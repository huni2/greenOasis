import styled from 'styled-components';

export const StyledDashboardPage = styled.div`
  .sub-cont {
    
  }
`;

export const StyledDashboardTabs = styled.div`
  .dashboard-widget-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .dashboard-widget-header {
    display: flex;
    align-items: center;
  }

  .widget-button-area {
    display: flex;
    gap: 10px;
  }

  .widget-button {
    position: relative;
    padding: 8px 20px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius:0px;
    cursor: pointer;

    &.current {
      border-color: #0070f3;
      color: #0070f3;
    }
  }

  .widget-functional-area {
    display: flex;
    gap: 5px;
    margin-left: 10px;
  }

  .widget-additional-area {
    display: flex;
    gap: 10px;
  }
`;

export const StyledDashboardWidgets = styled.div`
  .dashboard-contents-area {
    display: none;

    &.current {
      display: block;
    }
  }

  .grid-stack {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(12, 1fr);
    min-height: 600px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .dashboard-card {
    height: 100%;
    
    .ant-card-head {
      min-height: 48px;
      padding: 0 16px;
      
      .ant-card-head-wrapper {
        height: 48px;
      }
      
      .ant-card-head-title {
        padding: 8px 0;
      }
      
      .ant-card-extra {
        padding: 8px 0;
      }
    }

    .ant-card-body {
      height: calc(100% - 48px);
      padding: 16px;
    }
  }

  .card-title-area {
    cursor: grab;
    user-select: none;
    font-size: 16px;
    font-weight: 600;
    
    &:active {
      cursor: grabbing;
    }
  }

  .dragging {
    .dashboard-card {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      opacity: 0.9;
    }
    
    .card-title-area {
      cursor: grabbing;
    }
  }

  .dashboard-empty-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    background: #fff;
    border-radius: 8px;
    text-align: center;

    h1 {
      margin: 20px 0 10px;
      font-size: 24px;
    }

    p {
      color: #666;
    }
  }
`; 