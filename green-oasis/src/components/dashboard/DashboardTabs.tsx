'use client';

import { useState } from 'react';
import { StyledDashboardTabs } from '@/styles/styled-components/Dashboard.styles';
import { Tabs, Button, Input, Space, List } from 'antd';
import { PlusOutlined, EditOutlined, CloseOutlined, ReloadOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';

interface DashboardTabsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function DashboardTabs({ currentTab, onTabChange }: DashboardTabsProps) {
  const [tabs, setTabs] = useState([
    { id: 'dashboard-01', title: 'Dashboard', editing: false },
    { id: 'dashboard-02', title: 'Dashboard', editing: false },
    { id: 'dashboard-03', title: 'Dashboard 03', editing: false },
    { id: 'dashboard-04', title: 'Dashboard 04', editing: false },
  ]);

  const handleEditTitle = (index: number, newTitle: string) => {
    const newTabs = [...tabs];
    newTabs[index] = { ...newTabs[index], title: newTitle };
    setTabs(newTabs);
  };

  const toggleEdit = (index: number) => {
    const newTabs = [...tabs];
    newTabs[index] = { ...newTabs[index], editing: !newTabs[index].editing };
    setTabs(newTabs);
  };

  const handleRemoveTab = (tabId: string) => {
    setTabs(tabs.filter(tab => tab.id !== tabId));
  };

  const items: TabsProps['items'] = tabs.map((tab, index) => ({
    key: tab.id,
    label: (
      <Space>
        {tab.editing ? (
          <Input
            size="small"
            value={tab.title}
            onChange={(e) => handleEditTitle(index, e.target.value)}
            onPressEnter={() => toggleEdit(index)}
            onBlur={() => toggleEdit(index)}
            autoFocus
          />
        ) : (
          tab.title
        )}
        <Button
          type="text"
          size="small"
          icon={<EditOutlined />}
          onClick={(e) => {
            e.stopPropagation();
            toggleEdit(index);
          }}
        />
        <Button
          type="text"
          size="small"
          icon={<CloseOutlined />}
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveTab(tab.id);
          }}
        />
      </Space>
    ),
  }));

  return (
    <StyledDashboardTabs>
      <div className="dashboard-widget-section">
        <div className="dashboard-widget-header">
          <Space direction="horizontal" size="middle">
            <Tabs
              activeKey={currentTab}
              items={items}
              onChange={onTabChange}
              type="card"
              addIcon={<PlusOutlined />}
            />
          </Space>
        </div>
        <div className="widget-additional-area">
          <Space>
            <Button icon={<ReloadOutlined />}>새로고침</Button>
            <Button type="primary" icon={<AppstoreAddOutlined />}>위젯추가</Button>
          </Space>
        </div>
      </div>
    </StyledDashboardTabs>
  );
} 