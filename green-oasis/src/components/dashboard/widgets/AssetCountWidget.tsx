'use client';

import { useEffect, useRef } from 'react';
import Highcharts, { Options } from 'highcharts';

export default function AssetCountWidget() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const chartOptions: Options = {
    chart: {
      type: 'line',
      spacingTop: 30,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      height: 400,
      style: {
        fontFamily: 'inherit'
      }
    },
    accessibility: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },
    xAxis: {
      categories: ['2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04', '2024-03-05', '2024-03-06', '2024-03-07'],
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: 'bold'
        }
      },
      lineColor: '#e3e3e3',
      lineWidth: 1,
      gridLineWidth: 0,
      tickLength: 0
    },
    yAxis: [{
      title: {
        text: undefined
      },
      lineColor: '#d2d2d2',
      lineWidth: 1,
      gridLineColor: '#e3e3e3',
      tickLength: 4
    }],
    legend: {
      verticalAlign: 'top',
      align: 'center' as const,
      margin: 0,
      x: 0,
      y: -35,
      floating: true,
      shadow: false,
      symbolRadius: 0
    },
    plotOptions: {
      series: {
        animation: true,
        marker: {
          enabled: true,
          radius: 4
        }
      }
    },
    series: [{
      name: '금주',
      data: [20, 30, 20, 50, 60, 20, 60],
      color: '#50b7e4',
      type: 'line'
    }, {
      name: '전주',
      data: [40, 25, 30, 50, 60, 20, 60],
      color: '#aed92c',
      type: 'line'
    }]
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && chartContainerRef.current) {
      const chart = Highcharts.chart(chartContainerRef.current, chartOptions);

      const handleResize = () => {
        chart.reflow();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        chart.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [chartOptions]);

  return (
    <div 
      ref={chartContainerRef} 
      style={{ width: '100%', height: '400px', minHeight: '400px' }}
    />
  );
} 