import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  background: #4747b3;
  height: 50px;
  padding: 0;
  line-height: 50px;
  display: flex;
  align-items: center;
  min-width: 1200px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
`;

export const LogoWrapper = styled.div`
  background: #4747b3;
  width: 185px;
  height: 50px;
  display: flex;
  align-items: center;
  transform: translateZ(0);
  backface-visibility: hidden;

  .navbar-toggler {
    border: 0;
    color: inherit;
    font-size: 1.25rem;
    padding: 0 15px;
    border-radius: 0;
    color: #fff;
    transform: rotate(0deg);
    transition: transform 0.3s linear;
    background: transparent;
  }

  .icon-menu {
    font-size: 0;
    width: 30px;
    height: 30px;
    display: block;
    background: url('/images/nav_list1.png');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MenuWrapper = styled.div<{ $isOpen: boolean }>`
  background: #4747b3;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  left : ${props => props.$isOpen ? '0' : '-130px'}
`;

export const RightNavWrapper = styled.div`
  background: #4747b3;
  margin-left: auto;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Title = styled.span`
  position: relative;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  min-width: 130px;
  color: #fff;
  display: flex;
  align-items: center;
  height: 50px;

  &::before {
    position: absolute;
    left: 1px;
    top: 50%;
    margin-top: -12.5px;
    width: 1px;
    height: 25px;
    background: #3d3da8;
    content: "";
    clear: both;
    overflow: hidden;
  }

  &::after {
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -12.5px;
    width: 1px;
    height: 25px;
    background: #5151be;
    content: "";
    clear: both;
    overflow: hidden;
  }
`;

export const LocationLinks = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-left: 20px;

  li {
    a {
      display: block;
      text-align: center;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.3);
      width: 60px;
      color: #fff;
      font-size: 12px;
      margin-right: 3px;
      opacity: 1;
      border-radius: 2px;
      height: 24px;
      line-height: 24px;

      &:hover,
      &.active {
        border: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }
`;

export const NavItems = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
  height: 50px;
`;

export const NavItem = styled.li`
  height: 50px;
  align-items: center;
  display: flex;
  margin: 0 10px;

  &:last-child {
    margin-right: 0;
    background: #4d4dc0;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid #4040a7;
    align-self: stretch !important;
    height: 50px;
  }

  .nav-link {
    font-size: 13px;
    overflow: hidden;
    color: #d0cfda;
    display: flex;
    align-items: center;
    padding: 0 ;
    margin: 0;

    span {
      color: inherit;
    }

    i.icon-bell {
      font-size: 0;
      height: 25px;
      width: 25px;
      background-repeat: no-repeat;
      background-position: center;
      float: left;
      background-size: 25px;
    }

    
  }

  &.nav-profile {
    .nav-link {
      position: relative;

      img {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        margin-right: 8px;
      }

      span {
        font-family: 'roboto';
      }
    }
  }

  &.nav-language {
    .nav-link {
      margin-right: 0;
      span { margin-right: 5px;}
    }
    
  }

  &.nav-time {
    font-size: 12px;
    opacity: 0.7;

    div {
      display: flex;
      align-items: center;
      margin-top: 3px;

      span {
        display: block;
        color: #fff;
        font-family: 'roboto';
      }

      button {
        background: transparent;
        border: none;
        appearance: none;
        margin-left: 5px;
        cursor: pointer;

        i.icon-reset {
          display: inline-block;
          width: 0;
          height: 0;
          margin-top: 5px;
          text-align: center;
          background: url('/images/nav_reset.png') no-repeat 0 0;
        }
      }
    }
  }

  .icon-error {
    background-image: url('/images/nav_error.png');
  }

  .icon-mail {
    background-image: url('/images/nav_mail.png');
  }

  .icon-bell {
    font-size: 0 !important;
    background-image: url('/images/nav_bell.png');
  }

  .count-indicator {
    position: relative;
    padding: 0;
    text-align: center;
    height: 50px;
      
    .count {
      position: absolute;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #ff0016;
      top: 12px;
      border: 1px solid #ff0016;
    }
  }

  .flag-korea {
    background: url('/images/flag_korea.png') no-repeat 0 center;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
  }

  .flag-us {
    background: url('/images/flag_us.png') no-repeat 0 center;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
  }

  .flag-china {
    background: url('/images/flag_china.png') no-repeat 0 center;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
  }

  .preview-item {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    border-bottom: 1px solid #ebedf2;

    &:last-child {
      border-bottom: none;
    }

    .preview-thumbnail {
      margin-right: 15px;

      .preview-icon {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.bg-success {
          background: #0acf97 !important;
        }
        &.bg-warning {
          background: #FFC100 !important;
        }
        &.bg-info {
          background: #248AFD !important;
          border:1px solid red;
        }

        i {
          font-size: 12px;
          color: #fff;
          height: auto;
          width: auto;
          background: none;
        }
      }
    }

    .preview-item-content {
      h6 {
        font-weight: normal;
        font-size: 14px;
        margin-bottom: 3px;
        color: #000;
      }

      p {
        font-size: 12px;
        margin: 0;
        color: #777;
      }
    }
  }
`; 