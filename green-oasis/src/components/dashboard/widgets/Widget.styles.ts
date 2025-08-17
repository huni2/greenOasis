import styled from 'styled-components';

export const StyledWidget = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 100%;

  .ant-card {
    height: 100%;
    border-radius: 8px;
    box-shadow: none;

    .ant-card-head {
      padding: 16px 24px;
      border-bottom: 1px solid #f0f0f0;

      .ant-card-head-title {
        padding: 0;
      }
    }

    .ant-card-body {
      padding: 24px;
    }
  }

  .statistics-current-style-01 {
    .master-current-contents {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .dot-shape-1, .dot-shape-2, .dot-shape-3,
    .important-spot, .normal-state, .error-state,
    .dead-state, .disuse-state {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      min-height: 24px;

      p {
        color: rgba(0, 0, 0, 0.45);
        font-size: 13px;
        margin: 0;
        line-height: 1;
      }

      span {
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
      }
    }

    .dot-shape-1 {
      span { color: #4747B3; }
    }

    .dot-shape-2 {
      span { color: #52c41a; }
    }

    .dot-shape-3 {
      span { color: #722ed1; }
    }

    .important-spot {
      span { color: #4747B3; }
    }

    .normal-state {
      span { color: #52c41a; }
    }

    .error-state {
      span { color: #f5222d; }
    }

    .dead-state {
      span { color: #faad14; }
    }

    .disuse-state {
      span { color: #d9d9d9; }
    }
  }

  .flex-spot {
    display: flex;
    gap: 12px;
    align-items: center;

    > div:first-child {
      flex: none;
      width: 120px;
      height: 120px;
    }

    > div:last-child {
      flex: 1;

      .ant-list-item {
        padding: 2px 0;

        > div {
          display: flex;
          gap: 8px;
          
          > div:first-child {
            display: flex;
            gap: 4px;
            align-items: center;
            width: 60px;
          }
        }
      }
    }
  }
`; 