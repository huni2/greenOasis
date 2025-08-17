'use client';

import { useState, useEffect } from 'react';
import { StyledDashboardWidgets } from '@/styles/styled-components/Dashboard.styles';
import TotalAssetWidget from '@/components/dashboard/widgets/TotalAssetWidget';
import AssetCountWidget from '@/components/dashboard/widgets/AssetCountWidget';
import TrackerStatusWidget from '@/components/dashboard/widgets/TrackerStatusWidget';
import DemolitionAssetWidget from '@/components/dashboard/widgets/DemolitionAssetWidget';
import IdleAssetWidget from '@/components/dashboard/widgets/IdleAssetWidget';
import RelocationAssetWidget from '@/components/dashboard/widgets/RelocationAssetWidget';
import EmptyDashboard from './EmptyDashboard';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Card, Dropdown, Button } from 'antd';
import { EllipsisOutlined, ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface DashboardWidgetsProps {
  currentTab: string;
}

interface WidgetItem {
  id: string;
  title: string;
  component: React.ComponentType<{ title: string }>;
  gridSpan: { x: number; y: number };
}

const initialWidgets: WidgetItem[] = [
  { 
    id: 'asset-count', 
    title: '자산 Count 추이',
    component: AssetCountWidget, 
    gridSpan: { x: 9, y: 2 } 
  },
  { 
    id: 'total-asset', 
    title: '전체 자산',
    component: TotalAssetWidget, 
    gridSpan: { x: 3, y: 1 } 
  },
  { 
    id: 'tracker-status', 
    title: '트래커 상태',
    component: TrackerStatusWidget, 
    gridSpan: { x: 3, y: 1 } 
  },
  { 
    id: 'demolition-asset', 
    title: '철거 자산 현황',
    component: DemolitionAssetWidget, 
    gridSpan: { x: 3, y: 1 } 
  },
  { 
    id: 'idle-asset', 
    title: '유휴 자산 현황',
    component: IdleAssetWidget, 
    gridSpan: { x: 3, y: 1 } 
  },
  { 
    id: 'relocation-asset', 
    title: '이설 자산 현황',
    component: RelocationAssetWidget, 
    gridSpan: { x: 3, y: 1 } 
  },
];

export default function DashboardWidgets({ currentTab }: DashboardWidgetsProps) {
  const [widgets, setWidgets] = useState<WidgetItem[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setWidgets(initialWidgets);
    const timeout = setTimeout(() => setEnabled(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
  };

  const getDropdownItems = (widgetId: string): MenuProps['items'] => [
    {
      key: 'goto',
      label: '바로가기',
      icon: <ArrowRightOutlined />,
      onClick: () => console.log('Navigate to:', widgetId),
    },
    {
      key: 'delete',
      label: '삭제하기',
      icon: <DeleteOutlined />,
      onClick: () => {
        setWidgets(widgets.filter(w => w.id !== widgetId));
      },
    },
  ];

  const renderDashboardContent = (tabId: string) => {
    switch (tabId) {
      case 'dashboard-01':
        return enabled ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="widgets" direction="horizontal">
              {(provided) => (
                <div
                  className="grid-stack"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {widgets.map((widget, index) => {
                    const Component = widget.component;
                    return (
                      <Draggable key={widget.id} draggableId={widget.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              gridColumn: `span ${widget.gridSpan.x}`,
                              gridRow: `span ${widget.gridSpan.y}`,
                              ...provided.draggableProps.style,
                            }}
                            className={snapshot.isDragging ? 'dragging' : ''}
                          >
                            <Card
                              title={
                                <div {...provided.dragHandleProps} className="card-title-area">
                                  {widget.title}
                                </div>
                              }
                              extra={
                                <Dropdown menu={{ items: getDropdownItems(widget.id) }} trigger={['click']} placement="bottomRight">
                                  <Button type="text" icon={<EllipsisOutlined />} />
                                </Dropdown>
                              }
                              className="dashboard-card"
                            >
                              <Component title={widget.title} />
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : null;
      default:
        return <EmptyDashboard />;
    }
  };

  return (
    <StyledDashboardWidgets>
      <div className="dashboard-contents-section">
        {['dashboard-01', 'dashboard-02', 'dashboard-03', 'dashboard-04'].map((tabId) => (
          <div
            key={tabId}
            id={tabId}
            className={`dashboard-contents-area ${currentTab === tabId ? 'current' : ''}`}
          >
            {renderDashboardContent(tabId)}
          </div>
        ))}
      </div>
    </StyledDashboardWidgets>
  );
} 