import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";


interface SvgForM15Props {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}


const SvgForM15: React.FC<SvgForM15Props> = ({ siteId, campusId, buildId, floorData }) => {
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
    backgroundImage: 'url("/images/panorama/M15.webp")',
  } 

  return (
    <svg  
      className="skhynixWrap-ic sideView w8000 svgForM15"
      style={svgBg}
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="1220" 
      // height="auto" 
      viewBox="0 0 8000 4416"
      >

      <g className="level-area">
        {(() => {
          const floor = getFloorData('B1F');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, 'B1F')}
              className='link_disabled'
            >

              <path className="hoverBox" d="M7371,3138.55l-4404,791.8v256.01l4404-931.27v-116.53Z"/>
              <path className="dataBox" d="M4222.72,3920.82l-1253.26,265.02c-66.18,13.99-128.46-36.49-128.46-104.14v-39.69c0-51.52,36.9-95.64,87.6-104.76l1253.26-225.32c65.28-11.74,125.27,38.44,125.27,104.76h0c0,50.3-35.21,93.73-84.42,104.14Z"/>
              <text className="title" transform="translate(2958 4096) rotate(-10.5)">
                <tspan x="0" y="0">M15 B1F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3894 3916) rotate(-10.82)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
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

              <path className="hoverBox" d="M7371,3007.14l-4404,634.51v256.01l4404-773.99v-116.53Z"/>
              <path className="dataBox" d="M4218.57,3677.7l-1251.93,220.02c-65.56,11.52-125.64-38.92-125.64-105.49v-39.65c0-53.25,39.12-98.42,91.83-106.01l1251.93-180.37c64.56-9.3,122.38,40.78,122.38,106.01h0c0,52-37.35,96.49-88.57,105.49Z"/>
              <text className="title" transform="translate(2958 3808) rotate(-8.85)">
                <tspan x="0" y="0">M15 1F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3894.07 3655) rotate(-7.65)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('2F');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, '2F')}
              className='link_disabled'
            >
              
              <path className="hoverBox" d="M7371,2875.72l-4404,477.22v256.01l4404-616.7v-116.53Z"/>
              <path className="dataBox" d="M4214.42,3434.28l-1250.84,175.16c-64.76,9.07-122.58-41.22-122.58-106.61v-39.61c0-54.96,41.41-101.1,96.05-107.02l1250.84-135.54c63.67-6.9,119.24,42.98,119.24,107.02h0c0,53.68-39.55,99.16-92.72,106.61Z"/>
              <text className="title" transform="translate(2949 3520) rotate(-6.38)">
                <tspan x="0" y="0">M15 2F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3894 3394) rotate(-6.28)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('3F');
          return (
            <a href="" onClick={(e) => handleFloorClick(e, '3F')}>
              
              <path className="hoverBox" d="M7371,2744.31l-4404,319.94v256.01l4404-459.41v-116.53Z"/>
              <path className="dataBox" d="M4210.29,3190.56l-1250.02,130.4c-63.77,6.65-119.27-43.36-119.27-107.48v-39.59c0-56.64,43.74-103.67,100.23-107.77l1250.02-90.81c62.6-4.55,115.89,45.01,115.89,107.77h0c0,55.34-41.81,101.73-96.85,107.48Z"/>
              <text className="title" transform="translate(2958 3232) rotate(-5.48)">
                <tspan x="0" y="0">M15 3F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3894 3151) rotate(-4.50)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0}/ {floor?.slaveCnt || 0}/ {floor?.masterTrackerCnt || 0}/ {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('4MF');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, '4MF')}
              className='link_disabled'
            >
              

              <path className="hoverBox" d="M7371,2612.89l-4404,162.65v256.01l4404-302.13v-116.53Z"/>
              <path className="dataBox" d="M4206.22,2946.54l-1249.47,85.72c-62.6,4.29-115.75-45.33-115.75-108.08v-39.57c0-58.28,46.1-106.11,104.34-108.26l1249.47-46.15c61.36-2.27,112.33,46.86,112.33,108.26h0c0,56.95-44.1,104.18-100.92,108.08Z"/>
              <text className="title" transform="translate(2949 2951.2) rotate(-2.44)">
                <tspan x="0" y="0">M15 4MF</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 2890) rotate(-3.28)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                  </tspan>
                </text>
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
              

              <path className="hoverBox" d="M7371,2481.48l-4404,5.37v256.01l4404-144.84v-116.53Z"/>
              <path className="dataBox" d="M4202.23,2702.23l-1249.19,41.08c-61.27,2.02-112.04-47.11-112.04-108.41v-39.56c0-59.86,48.48-108.4,108.34-108.47l1249.19-1.52c59.96-.07,108.6,48.51,108.6,108.47h0c0,58.52-46.42,106.49-104.91,108.41Z"/>
              <text className="title" transform="translate(2949 2658) rotate(-.67)">
                <tspan x="0" y="0">M15 4F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885.76 2638) rotate(-.78)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
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
              
              <path className="hoverBox" d="M7371,2350.07l-4404-151.92v256.01l4404,12.45v-116.53Z"/>
              <path className="dataBox" d="M4198.36,2457.64l-1249.2-3.53c-59.79-.17-108.16-48.68-108.16-108.47v-39.56c0-61.37,50.87-110.52,112.21-108.4l1249.2,43.09c58.42,2.02,104.73,49.95,104.73,108.4h0c0,60.03-48.75,108.64-108.77,108.47Z"/>
              <text className="title" transform="translate(2941.5 2364.8) rotate(1.7)">
                <tspan x="0" y="0">M15 5F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 2377) rotate(1.14)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
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

              <path className="hoverBox" d="M7371,2218.65l-4404-309.21v256.01l4404,169.73v-116.53Z"/>
              <path className="dataBox" d="M4194.64,2212.77l-1249.49-48.16c-58.16-2.24-104.15-50.04-104.15-108.24v-39.57c0-62.81,53.25-112.46,115.91-108.06l1249.49,87.73c56.74,3.98,100.74,51.18,100.74,108.06h0c0,61.46-51.08,110.61-112.5,108.24Z"/>
              <text className="title" transform="translate(2949 2071.6) rotate(4.04)">
                <tspan x="0" y="0">M15 6F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 2125) rotate(2.59)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('7F');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, '7F')}
            >
              
              <path className="hoverBox" d="M7371,2087.24l-4404-466.5v256.01l4404,327.02v-116.53Z"/>
              <path className="dataBox" d="M4191.09,1967.65l-1250.05-92.82c-56.41-4.19-100.04-51.18-100.04-107.75v-39.59c0-64.17,55.61-114.2,119.42-107.44l1250.05,132.41c54.96,5.82,96.66,52.18,96.66,107.44h0c0,62.82-53.39,112.4-116.04,107.75Z"/>
              <text className="title" transform="translate(2949 1778.4) rotate(4.89)">
                <tspan x="0" y="0">M15 7F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 1873) rotate(5.48)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('8F');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, '8F')}
              className='link_disabled'
            >
              
              <path className="hoverBox" d="M7371,1955.83l-4404-623.78v256.01l4404,484.31v-116.53Z"/>
              <path className="dataBox" d="M4187.75,1722.3l-1250.89-137.56c-54.56-6-95.86-52.09-95.86-106.98v-39.62c0-65.44,57.92-115.74,122.72-106.56l1250.89,177.18c53.08,7.52,92.53,52.95,92.53,106.56h0c0,64.1-55.68,113.99-119.39,106.98Z"/>
              <text className="title" transform="translate(2941.5 1485.2) rotate(7.26)">
                <tspan x="0" y="0">M15 8F</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 1612) rotate(6.91)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('PH');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, 'PH')}
              className='link_disabled'
            >

              <path className="hoverBox" d="M7371,1824.41l-4404-781.07v256.01l4404,641.59v-116.53Z"/>
              <path className="dataBox" d="M4184.62,1476.74l-1251.98-182.39c-52.62-7.67-91.64-52.78-91.64-105.96v-39.65c0-66.62,60.18-117.07,125.78-105.43l1251.98,222.04c51.13,9.07,88.38,53.51,88.38,105.43h0c0,65.28-57.91,115.37-122.51,105.96Z"/>
              <text className="title" transform="translate(2940 1207) rotate(8.89)">
                <tspan x="0" y="0">M15 PH</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 1360) rotate(8.34)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('PH2');
          return (
            <a href="" 
              onClick={(e) => handleFloorClick(e, 'PH2')}
              className='link_disabled'
            >
              
              <path className="hoverBox" d="M7371,1693L2967,754.64v256.01l4404,798.88v-116.53Z"/>
              <path className="dataBox" d="M4181.74,1231.01l-1253.33-227.35c-50.61-9.18-87.41-53.26-87.41-104.7v-39.69c0-67.69,62.37-118.18,128.58-104.07l1253.33,267.04c49.12,10.47,84.23,53.85,84.23,104.07h0c0,66.37-60.09,116.54-125.4,104.7Z"/>
              <text className="title" transform="translate(2949 919) rotate(10.74)">
                <tspan x="0" y="0">M15 PH2</tspan>
              </text>
              <text className="dataNumber" transform="translate(3885 1099) rotate(10.67)">
                <tspan x="320" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
            </a>
          );
        })()}
      </g>

    </svg>
  );
};

export default SvgForM15;
