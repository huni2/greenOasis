import styled from 'styled-components';

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 2rem;
    color: #666;
  }

  a {
    padding: 0.75rem 1.5rem;
    background-color: #0070f3;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0051b3;
    }
  }
`; 