'use client';

import { useRef, useEffect } from 'react';
import { List } from 'antd';
import { StyledWidget } from './Widget.styles';
import Chart from 'chart.js/auto';

export default function IdleAssetWidget() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const chartData = {
    labels: ['1F', '2F', '3F', '4F', '5F', '6F', '7F'],
    datasets: [{
      data: [250, 50, 100, 400, 65, 65, 65],
      backgroundColor: [
        '#dee7f1',
        '#afbac4',
        '#b1b7bc',
        '#7d868f',
        '#76899e',
        '#666f7b',
        '#4c5257'
      ],
      borderColor: "rgba(0,0,0,0)"
    }]
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function(context: any) {
                    return `${context.label}: ${context.raw}`;
                  }
                }
              }
            },
            cutout: '70%'
          },
          plugins: [{
            id: 'centerText',
            beforeDraw(chart: any) {
              const { ctx, chartArea: { left, right, top, bottom } } = chart;
              const centerX = (left + right) / 2;
              const centerY = (top + bottom) / 2;

              ctx.save();
              ctx.fillStyle = 'black';
              ctx.font = '700 20px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('유휴', centerX, centerY);
              ctx.restore();
            }
          }]
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-spot" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ flex: 'none', width: '200px', height: '200px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div style={{ flex: 1 }}>
        <List
          size="small"
          dataSource={chartData.labels.map((label, index) => ({
            floor: label,
            count: chartData.datasets[0].data[index],
            color: chartData.datasets[0].backgroundColor[index]
          }))}
          renderItem={(item) => (
            <List.Item style={{ padding: '4px 0' }}>
              <div style={{ display: 'flex', width: '100%', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '45px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                  <span>{item.floor}</span>
                </div>
                <span>{item.count}</span>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
} 