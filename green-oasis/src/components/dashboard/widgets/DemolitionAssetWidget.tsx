'use client';

import { useRef, useEffect } from 'react';
import { List } from 'antd';
import { StyledWidget } from './Widget.styles';
import Chart from 'chart.js/auto';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchDemolitionAssetsRequest } from '@/redux/actions/demolitionActions';
import type { DemolitionAsset } from '@/types/demolition';

interface DemolitionAssetWidgetProps {
  title: string;
}

const CHART_COLORS = [
  '#ffeaf5',
  '#ffbfe1',
  '#ff97cf',
  '#ff86c5',
  '#ff71bb',
  '#ef58d6',
  '#d92bbc'
];

export default function DemolitionAssetWidget({ title }: DemolitionAssetWidgetProps) {
  const dispatch = useAppDispatch();
  const { assets, loading, error } = useAppSelector((state) => state.demolition);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    dispatch(fetchDemolitionAssetsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && assets.length > 0 && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData = {
        labels: assets.map((asset: DemolitionAsset) => asset.floor),
        datasets: [{
          data: assets.map((asset: DemolitionAsset) => asset.count),
          backgroundColor: CHART_COLORS,
          borderColor: "rgba(0,0,0,0)"
        }]
      };

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
                enabled: false
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
              ctx.fillText('철거', centerX, centerY);
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
  }, [loading, assets, dispatch]);

  return (
    <div className="flex-spot" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ flex: 'none', width: '200px', height: '200px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div style={{ flex: 1 }}>
        <List
          size="small"
          dataSource={assets.map((asset: DemolitionAsset, index: number) => ({
            ...asset,
            color: CHART_COLORS[index % CHART_COLORS.length]
          }))}
          renderItem={(item: DemolitionAsset & { color: string }) => (
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