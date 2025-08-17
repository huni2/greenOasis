import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f4f6f8;
`;

export const MainLayout = styled(Layout)`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  display: flex;
  flex: 1;
  background: #f4f6f8;

  .ant-layout-sider {
    height: 100%;
    background: #fff;
    border-right: none;
    box-shadow: none;
  }

  .ant-layout-sider-children {
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(100vh - 50px);
  background: #f4f6f8;
  padding: 0;
`;

export const StyledContent = styled(Content)`
  flex: 1;
  padding: 0;
  background: #f4f6f8;
`; 