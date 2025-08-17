import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const SubContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PageTitleBox = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Breadcrumb = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BreadcrumbItem = styled.li`
  margin-right: 10px;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 10px;
  }
`;

export const CampusCurrentState = styled.div`
  margin: 20px 0;
`;

export const Card = styled.div`
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const MasterSlave = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1;
  text-align: center;
  padding: 15px;
  border-right: 1px solid #eee;

  &:last-child {
    border-right: none;
  }
`;

export const Badge = styled.span`
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius:0px;
  font-size: 12px;
  margin-left: 5px;
`;

export const MapContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const MapCover = styled.div`
  flex: 2;
`;

export const MapLeft = styled.div`
  position: relative;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
`;

export const ZoomButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const MapList = styled.div`
  flex: 1;
`;

export const TableTitle = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

export const DataTableWrap = styled.div`
  padding: 15px;
`;

export const LayerConditionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LayerCondition = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const LayerData = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ArrowMore = styled.div`
  width: 20px;
  height: 20px;
  background: url('/images/arrow-more.png') no-repeat center;
  background-size: contain;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SkhynixIcon = styled.div`
  width: 100%;
  height: 100%;
`;

export const HoverBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const DataBox = styled.div`
  background: #fff;
  padding: 15px;
  border-radius:0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DataTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DataNumber = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #4747B3;
`;

export const CompassIcon = styled.div`
  width: 30px;
  height: 30px;
  background: url('/images/compass.png') no-repeat center;
  background-size: contain;
  position: absolute;
  top: 20px;
  right: 20px;
`; 