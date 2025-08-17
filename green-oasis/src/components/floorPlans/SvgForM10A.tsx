import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";

interface SvgForM10AProps {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}

const SvgForM10A: React.FC<SvgForM10AProps> = ({ siteId, campusId, buildId, floorData }) => {
  const router = useRouter();

  const handleFloorClick = async (e: React.MouseEvent<HTMLAnchorElement>, floorId: string) => {
    e.preventDefault();
    const isValidFloor = await locationSectionService.isValidFloor({
      siteId : siteId,
      campusId : campusId,
      buildId : buildId,
      floorId: floorId,
    });

    if (!isValidFloor) {
      Alert.error("오류", "도면정보를 찾을 수 없습니다.");
      return;
    }
    
    router.push(`/location/${siteId}/${campusId}/${buildId}/${floorId}`);
  };

  const getFloorData = (floorId: string) => {
    const floor = floorData?.find(f => f.floorId === floorId);
    return floor;
  };

  const svgBg ={
    backgroundSize: 'contain',
    backgroundPosition: 'center',   
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url('/images/panorama/M10A.webp')",
  }

  return (
    <svg 
      className="skhynixWrap-ic sideView w8000 svgForM10A"
      style={svgBg}
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="1220" 
      // height="auto" 
      viewBox="0 0 8000 3288"
    >

      <g className="level-area">



        {(() => {
          const floor = getFloorData('PH');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, 'PH')}
              className='link_disabled'
            >
              
              <polygon className="hoverBox" points="4094.81 622.04 4096.54 515.54 2981.15 323.95 2978.81 444.76 2979.46 444.87 2979.26 667.58 4473.63 875.05 4473.63 685.11 4094.81 622.04"/>
              <polygon className="hoverBox" points="7633.49 1211.2 7091.23 1120.42 7093.8 1032.97 6832.14 989.03 6535.89 1028.46 4473.63 685.11 4473.63 875.05 7633.83 1313.8 7633.49 1211.2"/>
              <path className="dataBox" d="M2979.36,554.3l-.03,31.98c-.04,46.6,34.31,86.08,80.46,92.48l1429.14,198.41c56.08,7.79,106.12-35.78,106.12-92.4h0c0-45.79-33.23-84.81-78.44-92.1l-1429.11-230.39c-56.68-9.14-108.08,34.6-108.14,92.02Z"/>
              <text className="dataNumber" transform="translate(3747.75 714.31) rotate(8.07)"><tspan x="780" y="0" textAnchor="end">                            
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3071.68 617.71) rotate(8.61)"><tspan x="0" y="0" xmlSpace="preserve">M10A  PH</tspan></text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('7F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '7F')}
              className='link_disabled'

            >
              <polygon className="hoverBox" points="7633.49 1350.2 4473.63 926.8 4473.63 1158.1 7633.83 1484.8 7633.49 1350.2"/>
              <path className="dataBox" d="M4495.56,929.74l-1394.2-186.81c-68.8-9.22-129.97,44.3-129.97,113.71v42.68c0,58.8,44.45,108.08,102.93,114.12l1394.2,144.13c67.67,7,126.53-46.09,126.53-114.12h0c0-57.47-42.53-106.08-99.49-113.71Z"/>
              <text className="dataNumber" transform="translate(3737.99 999.3) rotate(6.41)"><tspan x="780" y="0" textAnchor="end">                            
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3071.62 916.53) rotate(6.37)"><tspan x="0" y="0" xmlSpace="preserve">M10A  7F</tspan></text>
            </a>

          );
        })()}


        {(() => {
          const floor = getFloorData('6F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '6F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7633.79 1497.4 4473.63 1173.3 4473.63 1404.13 7634.14 1632.95 7633.79 1497.4"/>
            <path className="dataBox" d="M3078.23,1303.1l1393.66,100.9c66.53,4.82,123.16-47.86,123.16-114.56h0c0-58.9-44.55-108.25-103.14-114.26l-1393.73-142.94c-67.79-6.95-126.69,46.3-126.58,114.45l.07,42.04c.1,60.15,46.58,110.03,106.57,114.38Z"/>
            <text className="dataNumber" transform="translate(3731.09 1254.41) rotate(4.17)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3078.94 1209.13) rotate(4.74)"><tspan x="0" y="0" xmlSpace="preserve">M10A  6F</tspan></text>
            </a>

          );
        })()}


        {(() => {
          const floor = getFloorData('5F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '5F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7634.18 1650.35 4473.63 1421.59 4473.63 1631.56 7634.53 1777.87 7634.18 1650.35"/>
            <path className="dataBox" d="M2972.42,1425.68l.12,36.89c.18,55.74,44.05,101.55,99.74,104.13l1413.37,65.42c59.59,2.76,109.41-44.81,109.41-104.46h0c0-54.82-42.34-100.34-97.02-104.3l-1413.49-102.31c-60.7-4.39-112.31,43.77-112.12,104.63Z"/>
            <text className="dataNumber" transform="translate(3740.33 1523.49) rotate(2.19)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3071.6 1483.14) rotate(2.57)"><tspan x="0" y="0" xmlSpace="preserve">M10A  5F</tspan></text>
            </a>

          );
        })()}

        {(() => {
          const floor = getFloorData('4F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '4F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7634.53 1796.87 4473.63 1647.17 4473.63 1873.27 7634.87 1928.34 7634.53 1796.87"/>
            <path className="dataBox" d="M2973.64,1695.2l.28,41.79c.41,61.27,49.62,111.02,110.88,112.08l1395.45,24.31c63.08,1.1,114.81-49.74,114.81-112.83h0c0-60.25-47.33-109.87-107.51-112.72l-1395.72-66.1c-64.64-3.06-118.61,48.75-118.18,113.47Z"/>
            <text className="dataNumber" transform="translate(3742.34 1772.44) rotate(1.62)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3071.69 1742.05) rotate(1.24)"><tspan x="0" y="0" xmlSpace="preserve">M10A  4F</tspan></text> 
            </a>

          );
        })()}

        {(() => {
          const floor = getFloorData('3F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '3F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7633.87 1947.34 4473.63 1887.57 4473.63 2103.02 7634.22 2079.78 7633.87 1947.34"/>
            <path className="dataBox" d="M4595.05,1994.9h0c0-58.32-46.69-105.91-105.01-107.01l-1409.6-26.66c-59.89-1.13-109.05,47.11-109.05,107.01v24.07c0,59.03,47.8,106.92,106.83,107.03l1409.6,2.59c59.19.11,107.23-47.84,107.23-107.03Z"/>
            <text className="dataNumber" transform="translate(3739.54 2019.2)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3071.63 2017.54)"><tspan x="0" y="0" xmlSpace="preserve">M10A  3F</tspan></text>
            </a>

          );
        })()}

        {(() => {
          const floor = getFloorData('2F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '2F')}
              
            >
            <polygon className="hoverBox" points="7635.22 2094.78 4473.63 2115.98 4473.63 2359.33 7635.56 2234.18 7635.22 2094.78"/>
            <path className="dataBox" d="M4472.61,2115.99l-1380.4,9.26c-66.85.45-120.81,54.77-120.81,121.63v45.38c0,69.06,57.43,124.26,126.44,121.53l1380.4-54.64c65.25-2.58,116.82-56.23,116.82-121.53h0c0-67.49-54.95-122.08-122.44-121.63Z"/>
            <text className="dataNumber" transform="translate(3760.51 2289.33) rotate(-1.04)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3071.66 2298.72) rotate(-1.54)"><tspan x="0" y="0">M10A  2F</tspan></text>
            </a>

          );
        })()}


        {(() => {
          const floor = getFloorData('2MF');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '2MF')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7633.56 2245.18 4473.63 2373.04 4473.63 2576.11 7633.91 2360.53 7633.56 2245.18"/>
            <path className="dataBox" d="M4595.05,2473.12h0c0-57.29-47.67-103.06-104.91-100.75l-1422.33,57.55c-53.99,2.18-96.66,46.54-96.75,100.58l-.05,31.59c-.1,58.23,49.02,104.44,107.14,100.8l1422.38-89.15c53.13-3.33,94.52-47.39,94.52-100.63Z"/>
            <text className="dataNumber" transform="translate(3756.58 2536.21) rotate(-2.55)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3072.35 2567.13) rotate(-2.96)"><tspan x="0" y="0" xmlSpace="preserve">M10A  2MF</tspan></text>
            </a>

          );
        })()}

        {(() => {
          const floor = getFloorData('1F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, '1F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7633.91 2371.53 4473.63 2588.37 4473.63 2816.92 7634.25 2511.85 7633.91 2371.53"/>
            <path className="dataBox" d="M2971.39,2797.68v38.96c0,67.15,57.86,119.69,124.7,113.24l1396.12-134.76c58.33-5.63,102.84-54.64,102.84-113.24h0c0-65.9-55.81-118.01-121.56-113.5l-1396.12,95.79c-59.67,4.09-105.98,53.69-105.98,113.5Z"/>
            <text className="dataNumber" transform="translate(3757.6 2800.49) rotate(-4.74)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3074.1 2848.25) rotate(-5.11)"><tspan x="0" y="0">M10A 1F</tspan></text>
            </a>

          );
        })()}


        {(() => {
          const floor = getFloorData('B1F');
          return (
            
            <a href=""
              onClick={(e) => handleFloorClick(e, 'B1F')}
              className='link_disabled'
            >
            <polygon className="hoverBox" points="7632.84 2565.21 7632.49 2516.93 4473.63 2827.52 4473.63 2989.93 7632.84 2565.21"/>
            <path className="dataBox" d="M3064.63,3179.35l1461.17-196.44c39.66-5.33,69.26-39.18,69.26-79.19h0c0-47.22-40.73-84.14-87.72-79.52l-1461.6,143.71c-41.16,4.05-72.42,38.83-72.08,80.18l.44,52.73c.4,48.09,42.88,84.94,90.55,78.53Z"/>
            <text className="dataNumber" transform="translate(3754.17 3020.98) rotate(-5.83)"><tspan x="780" y="0" textAnchor="end">                            
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3076.89 3106.51) rotate(-6.91)"><tspan x="0" y="0" xmlSpace="preserve">M10A  B1F</tspan></text>
            </a>

          );
        })()}




      </g>
    </svg>
  );
};

export default SvgForM10A;
