import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import styled from "styled-components";
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";

interface SvgForM14Props {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}

const SvgForM14: React.FC<SvgForM14Props> = ({ siteId, campusId, buildId, floorData }) => {
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
    backgroundImage: "url('/images/panorama/M14.webp')",
  }

  return (

    <svg 
      className="skhynixWrap-ic sideView w8000 svgForM14"
      style={svgBg}
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="1220" 
      // height="auto"
      viewBox="0 0 8000 4416"
      >
      <g className="level-area">
        {(() => {
          const floor = getFloorData('PH');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, 'PH')}
              className='link_disabled'
            >
              
              <polygon className="hoverBox" points="3970.09 1329.44 593.84 2151.25 593.17 2067.41 3966.42 1116.48 3970.09 1329.44"/>	
              <path className="dataBox" d="M5124.35,797.53l-1221.4,339.03c-45.3,12.57-76.28,54.3-75.22,101.3h0c1.49,65.83,63.66,113.27,127.54,97.34l1222.18-288.73c46.6-11.62,78.93-69.98,77.84-117.99l-.78-34.3c-1.52-66.94-65.65-114.56-130.17-96.65Z"/>
              <text className="dataNumber" transform="translate(4448.02 1145.84) rotate(-13.94)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3889.4 1287.01) rotate(-14.94)"><tspan x="0" y="0" xmlSpace="preserve">M14  PH</tspan></text>
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
              
              <polygon className="hoverBox" points="3972 1590.83 584.88 2297.63 584.88 2193.81 3973.15 1378 3972 1590.83"/>	
              <path className="dataBox" d="M5267.15,1254.57v-34.27c0-66.11-61.17-115.26-125.73-101.02l-1227.31,270.71c-47.41,10.46-81.16,52.47-81.16,101.02h0c0,64.98,59.21,113.87,123.02,101.58l1227.31-236.44c48.69-9.38,83.88-51.99,83.88-101.58Z"/>
              <text className="dataNumber" transform="translate(4441.99 1427.36) rotate(-11.38)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3883.56 1548.68) rotate(-12.96)"><tspan x="0" y="0" xmlSpace="preserve">M14  8F</tspan></text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('7F');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, '7F')}
            >
              
              <polygon className="hoverBox" points="3970.65 1840.32 584.88 2422.8 584.88 2321.03 3971.8 1627.67 3970.65 1840.32"/>
              <path className="dataBox" d="M5267.15,1543.7v-34.23c0-65.18-59.23-114.32-123.29-102.29l-1226.05,230.27c-49.21,9.24-84.87,52.22-84.87,102.29h0c0,64.04,57.28,112.88,120.51,102.77l1226.05-196.04c50.5-8.07,87.65-51.64,87.65-102.77Z"/>
              <text className="dataNumber" transform="translate(4433.2 1700.52) rotate(-10.13)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3896.59 1798.29) rotate(-10.15)"><tspan x="0" y="0" xmlSpace="preserve">M14  7F</tspan></text>
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
              
              <polygon className="hoverBox" points="3969.3 2090.62 584.88 2561.91 584.88 2454.19 3970.45 1878.14 3969.3 2090.62"/>
              <path className="dataBox" d="M5267.15,1831.77v-34.2c0-64.16-57.23-113.21-120.64-103.38l-1224.98,189.94c-50.98,7.9-88.58,51.79-88.58,103.38h0c0,63.01,55.3,111.72,117.8,103.78l1224.98-155.74c52.25-6.64,91.42-51.1,91.42-103.78Z"/>
              <text className="dataNumber" transform="translate(4430.19 1957.78) rotate(-8.78)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3898.75 2027.03) rotate(-9.21)"><tspan x="0" y="0" xmlSpace="preserve">M14  6F</tspan></text>
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
            <polygon className="hoverBox" points="3967.94 2338.72 584.88 2683.96 584.88 2582.29 3969.1 2126.41 3967.94 2338.72"/>	
            <path className="dataBox" d="M5267.15,2119.8v-34.18c0-63.07-55.19-111.92-117.79-104.26l-1224.13,149.71c-52.69,6.44-92.29,51.18-92.29,104.26h0c0,61.91,53.27,110.39,114.91,104.57l1224.13-115.53c53.95-5.09,95.17-50.39,95.17-104.57Z"/>
            <text className="dataNumber" transform="translate(4438.67 2213.96) rotate(-6.1)"><tspan x="780" y="0" textAnchor="end">
            {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
            </tspan></text>
            <text className="title" transform="translate(3897.79 2264.43) rotate(-4.74)"><tspan x="0" y="0" xmlSpace="preserve">M14  5F</tspan></text>
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
              
              <polygon className="hoverBox" points="3964.6 2587.62 582.88 2814.95 582.88 2713.33 3965.75 2375.48 3964.6 2587.62"/>	
              <path className="dataBox" d="M5265.15,2407.8v-34.16c0-61.9-53.1-110.46-114.75-104.94l-1223.49,109.56c-54.33,4.86-95.96,50.39-95.96,104.94h0c0,60.74,51.22,108.89,111.84,105.16l1223.49-75.39c55.57-3.42,98.88-49.49,98.88-105.16Z"/>
              <text className="dataNumber" transform="translate(4426.44 2475.7) rotate(-4.58)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3891.52 2516.65) rotate(-4.42)"><tspan x="0" y="0" xmlSpace="preserve">M14  4F</tspan></text>
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
              
              <polygon className="hoverBox" points="3963.25 2836.32 582.88 2941.88 582.88 2848.31 3964.4 2624.35 3963.25 2836.32"/>	
              <path className="dataBox" d="M5265.15,2698.44v-36.7c0-60.72-51.05-108.95-111.67-105.51l-1222.85,69.44c-55.95,3.18-99.69,49.47-99.69,105.51h0c0,59.47,49.06,107.23,108.51,105.64l1222.85-32.74c57.24-1.53,102.85-48.38,102.85-105.64Z"/>
              <text className="dataNumber" transform="translate(4424.52 2750.37) rotate(-2.57)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3895.47 2772.29) rotate(-1.86)"><tspan x="0" y="0" xmlSpace="preserve">M14  4MF</tspan></text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('3F');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, '3F')}
            >
              
              <polygon className="hoverBox" points="3963.9 3148.83 584.88 3098.74 584.88 2985.23 3965.05 2912.02 3963.9 3148.83"/>	
              <path className="dataBox" d="M5271.66,3050.8v-44.97c0-67.49-55.44-121.8-122.92-120.42l-1193.31,24.5c-65.54,1.35-117.97,54.86-117.97,120.42h0c0,65.71,52.67,119.3,118.38,120.43l1193.31,20.47c67.32,1.15,122.51-53.1,122.51-120.43Z"/>
              <text className="dataNumber" transform="translate(4429.14 3053.28) rotate(-.33)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3898.41 3052.6) rotate(1.28)"><tspan x="0" y="0" xmlSpace="preserve">M14  3F</tspan></text>
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
              
              <polygon className="hoverBox" points="3962.55 3454.13 584.88 3256.55 584.88 3127.09 3963.7 3213.5 3962.55 3454.13"/>	
              <path className="dataBox" d="M5271.66,3406.76v-44.98c0-65.29-52.07-118.67-117.35-120.29l-1193.55-29.59c-67.6-1.68-123.31,52.67-123.31,120.29h0c0,63.54,49.41,116.13,112.83,120.09l1193.55,74.57c69.27,4.33,127.83-50.69,127.83-120.09Z"/>
              <text className="dataNumber" transform="translate(4422.36 3386.62) rotate(2.39)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3887.04 3361.24) rotate(.67)"><tspan x="0" y="0" xmlSpace="preserve">M14  2F</tspan></text>
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
              
              <polygon className="hoverBox" points="3961.21 3715.24 584.88 3386.29 584.88 3282.89 3962.35 3487.77 3961.21 3715.24"/>	
              <path className="dataBox" d="M5266.54,3713.12l.42-32.03c.79-60.43-45.93-110.87-106.24-114.71l-1206.47-76.83c-64.79-4.13-119.83,46.86-120.66,111.78h0c-.76,59.26,44.22,109.12,103.25,114.45l1206.05,108.85c65.83,5.94,122.78-45.42,123.65-111.52Z"/>
              <text className="dataNumber" transform="translate(4427.66 3672.78) rotate(4.38)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text className="title" transform="translate(3887.86 3623.91) rotate(4.24)"><tspan x="0" y="0" xmlSpace="preserve">M14  1F</tspan></text>
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
              
              <polygon className="hoverBox" points="3958.86 3957.81 591.88 3497.64 591.88 3414.28 3960.01 3746.51 3958.86 3957.81"/>
              <path className="dataBox" d="M5266.79,3999.72l.2-34.18c.31-54.41-40.95-100.06-95.11-105.22l-1223.5-116.69c-61.46-5.86-114.71,42.27-115.07,104.01h0c-.31,53.3,39.33,98.38,92.23,104.91l1223.3,150.87c62.43,7.7,117.59-40.8,117.95-103.7Z"/>
              <text className="dataNumber" transform="translate(4420.14 3939.17) rotate(5.94)"><tspan x="780" y="0" textAnchor="end">
              {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan></text>
              <text id="title" className="title" transform="translate(3890.54 3887.05) rotate(6.11)"><tspan x="0" y="0" xmlSpace="preserve">M14  B1F</tspan></text>
            </a>
          );
        })()}

      </g>
    </svg>

  );
};

export default SvgForM14;
