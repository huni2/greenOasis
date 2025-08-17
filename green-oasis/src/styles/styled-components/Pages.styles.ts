import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 2rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f2f4f7;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/login_bg2.png');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  .welcome-text {
    text-align: center;
    color: #666;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .login-title {
    text-align: center;
    margin-bottom: 2rem;

    img {
      width: 120px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
      margin: 0;
      font-weight: 500;
    }
  }

  .language {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    gap: 0.5rem;

    a {
      color: #666;
      text-decoration: none;
      font-size: 0.9rem;
      padding: 0.25rem 0.5rem;
      border-radius:4px;

      &.active {
        color: #4747B3;
        background: rgba(24, 144, 255, 0.1);
      }
    }
  }

  .ant-form-item {
    margin-bottom: 1.5rem;
  }

  .ant-input {
    height: 40px;
  }

  .ant-btn {
    height: 40px;
    font-size: 1rem;
    background-color: #4747B3;
    color: white;
  }
 .ant-btn:hover ,
 .ant-btn:active {background-color: #3a3a8f;}

  .links-bar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;

    a {
      color: #666;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        color: #4747B3;
      }
    }
  }

  .copyrights {
    text-align: center;
    color: #666;
    font-size: 0.8rem;
    margin-top: 2rem;
  }
`; 