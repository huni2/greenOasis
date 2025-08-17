import styled from 'styled-components';
import { Layout, Menu } from '@/components/ui';

const { Sider } = Layout;

export const StyledMenu = styled(Menu)`
  &.ant-menu {
    .ant-menu-item,
    .ant-menu-submenu-title {
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0 16px;
      display: flex;
      align-items: center;
      transition: none;

      .menu-icon {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transition: none;
      }

      .ant-menu-title-content {
        flex: 1;
        transition: none;
      }
    }

    .ant-menu-submenu-arrow {
      position: absolute;
      right: 16px;
      transition: none;
    }

    .ant-menu-sub.ant-menu-inline {
      background: transparent;
      transition: none;
    }

    .ant-menu-sub {
      background: transparent;
      
      .ant-menu-item {
        height: 40px;
        line-height: 40px;
        margin: 0;
        padding-left: 48px;
        transition: none;
      }
    }

    &.ant-menu-inline-collapsed {
      width: 70px;

      .ant-menu-submenu {
        .ant-menu-submenu-title {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;

          .menu-icon {
            margin: 0;
            width: 16px;
            height: 16px;
          }

          .ant-menu-title-content {
            display: none;
          }
        }

        &:hover {
          .ant-menu-submenu-title {
            background: transparent;
          }
        }
      }

      .ant-menu-submenu-arrow {
        display: none;
      }
    }
  }
`;

export const GlobalStyle = styled.div`
  .ant-menu-submenu-popup {
    .ant-menu {
      min-width: 160px;
      border: 1px solid #dedfe2;
      border-radius:0px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      padding-top: 40px;
      position: relative;

      .submenu-title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: calc(100% + 2px);
        margin-left: -1px;
        height: 40px;
        line-height: 40px;
        background: #1e1e1e;
        color: #fff;
        text-align: center;
        border-bottom: 1px solid #dedfe2;
      }

      .ant-menu-item {
        margin: 0;
        padding: 0 16px;
        height: 40px;
        line-height: 40px;

        &:hover {
          background: #f5f5f5;
        }

        a {
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
  }
`;

export const StyledSider = styled(Sider)`
  height: calc(100vh - 50px);
  background: #fff;
  border-right: 1px solid #dedfe2;
  transition: none;

  .ant-layout-sider-children {
    height: 100%;
    overflow-y: auto;
  }

  &:not(.ant-layout-sider-collapsed) {
    width: 210px !important;
    min-width: 210px !important;
    max-width: 210px !important;
  }

  &.ant-layout-sider-collapsed {
    width: 70px !important;
    min-width: 70px !important;
    max-width: 70px !important;
  }

  .ant-menu {
    background-color: white;
  }
  
  .menu-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    background-size: contain;
    transition: none;
  }

  .ant-menu-item:nth-of-type(1) .menu-icon,
  .ant-menu-submenu:nth-of-type(1) .menu-icon {
    background-image: url('/images/nav_map.png');
  }

  .ant-menu-item:nth-of-type(2) .menu-icon,
  .ant-menu-submenu:nth-of-type(2) .menu-icon {
    background-image: url('/images/nav_tracker.png');
  }

  .ant-menu-item:nth-of-type(3) .menu-icon,
  .ant-menu-submenu:nth-of-type(3) .menu-icon {
    background-image: url('/images/nav_asset.png');
  }

  .ant-menu-item:nth-of-type(4) .menu-icon,
  .ant-menu-submenu:nth-of-type(4) .menu-icon {
    background-image: url('/images/nav_bbs.png');
  }

  .ant-menu-item:nth-of-type(5) .menu-icon,
  .ant-menu-submenu:nth-of-type(5) .menu-icon {
    background-image: url('/images/nav_system.png');
  }

  .ant-menu-item:nth-of-type(6) .menu-icon,
  .ant-menu-submenu:nth-of-type(6) .menu-icon {
    background-image: url('/images/nav_myinfo.png');
  }

  .ant-menu-item:nth-of-type(7) .menu-icon,
  .ant-menu-submenu:nth-of-type(7) .menu-icon {
    background-image: url('/images/nav_blacklist.png');
  }

  .ant-menu-item:nth-of-type(8) .menu-icon,
  .ant-menu-submenu:nth-of-type(8) .menu-icon {
    background-image: url('/images/nav_ble.png');
  }
`;

// New styled components for the content wrapper and sub-content
export const ContentWrapper = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 50px);
`;

export const SubContent = styled.div`
  background: #fff;
  border-radius:0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const PageTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  color: #333;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;

  span {
    margin: 0 5px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  transition: none;

  &:hover {
    background-color: #f5f5f5;
  }

  .menu-icon {
    margin-right: 10px;
  }
`;

export const SubMenuItem = styled.div`
  padding: 8px 15px 8px 35px;
  cursor: pointer;
  transition: none;

  &:hover {
    background-color: #f5f5f5;
  }
`; 