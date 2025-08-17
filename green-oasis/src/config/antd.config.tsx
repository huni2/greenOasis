import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import React from 'react';

export const antdConfig = {
  token: {
    colorPrimary: '#4747B3',
    borderRadius: 6,
  },
  components: {
    Button: {
      colorPrimary: '#4747B3',
    },
    Table: {
      colorBgContainer: '#ffffff',
    },
  },
};

const AntdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider locale={koKR} theme={antdConfig}>
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider; 