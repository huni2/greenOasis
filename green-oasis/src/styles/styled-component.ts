import styled from 'styled-components';

export const FloorMap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const ZoomControls = styled.div`
  position: absolute;
  // bottom: 20px;
  top : 70px;
  right: 20px;
  z-index: 1000;
  display: flex;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 8px;
`;

export const TransformWrapper = styled.div`
  position: relative;
`; 