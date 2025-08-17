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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

export const Breadcrumb = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BreadcrumbItem = styled.li<{ active?: boolean }>`
  margin-right: 8px;
  color: ${props => props.active ? '#4747B3' : '#666'};

  &:not(:last-child)::after {
    content: '/';
    margin-left: 8px;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const MapCover = styled.div`
  flex: 1;
  position: relative;
`;

export const MapLeft = styled.div`
  position: relative;
  background: #f5f5f5;
  border-radius:0px;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
  padding: 20px;
`;

export const CompassIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: url('/images/compass.png') no-repeat center;
  background-size: contain;
`;

export const ZoomButtons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
`;

export const MapList = styled.div`
  width: 300px;
  background: #fff;
  border-radius:0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const SearchGroup = styled.div`
  padding: 16px;
`;

export const InputWrap = styled.div`
  input {
    width: 100%;
    padding: 8px 12px;
   /* border: 1px solid #B0B1B5;
    border-radius:0px;*/
    transition: all 0.3s;

    &:focus {
      /*border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);*/
      outline: none;
    }
  }
`;

export const DataTableWrap = styled.div`
  padding: 16px;
`;

export const TableListArea = styled.div`
  overflow-x: auto;
`;

export const TableList = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #fafafa;
`;

export const TableHeadRow = styled.table`
  width: 100%;
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #f0f0f0;
`;

export const TableBody = styled.tbody`
  tr:hover {
    background: #fafafa;
  }
`;

export const TableBodyRow = styled.table`
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Link = styled.a`
  color: #4747B3;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #40a9ff;
  }
`;

export const ExcelButton = styled.button`
  padding: 4px 15px;
  font-size: 14px;
  border-radius:0px;
  color: #fff;
  background: #52c41a;
  border: 1px solid #52c41a;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #73d13d;
    border-color: #73d13d;
  }
`;

export const Hidden = styled.div`
  display: none;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const SkhynixIcon = styled.div`
  polygon {
    fill: #4747B3;
    transition: fill 0.3s;
  }

  polygon:hover {
    fill: #ffd666;
  }
`;

export const TitleBold = styled.h2`
  font-weight: bold;
  margin: 0;
`;

export const BuildingTitle = styled.h3`
  margin: 0;
  color: #4747B3;
`;

export const RedText = styled.span`
  color: #ff4d4f;
`;

export const BlueText = styled.span`
  color: #4747B3;
`; 