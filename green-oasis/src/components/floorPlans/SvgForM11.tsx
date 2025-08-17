import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";

interface SvgForM11Props {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}

const SvgForM11: React.FC<SvgForM11Props> = ({ siteId, campusId, buildId, floorData }) => {
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
    backgroundImage: "url('/images/panorama/M11.webp')",
  }

  return (
    <svg 
      className="skhynixWrap-ic sideView w8000 svgForM11"
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
              
              <polygon data-name="M11_PH hoverBox" className="hoverBox" points="475.63 2292.16 475.22 2355.33 3169.08 1365.05 3169.08 1182.21 475.63 2292.16"/>
              <path className="dataBox" d="M4071.62,871.92l-1033.22,344.68c-44.23,19.33-52.77,61.02-52.77,95.47h0c0,58.92,58.66,99.85,113.96,79.52l1033.34-305.56c40.54-22.44,55.62-65.19,55.49-100.82l-.12-35.12c-.21-60.04-61.08-100.81-116.68-78.17Z"/>
              <text className="dataNumber" transform="translate(3778.84 1120.26) rotate(-15.71)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3052.74 1345.03) rotate(-18.03)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 PH</tspan>
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
              
              <polygon data-name="M11_8F hoverBox" className="hoverBox" points="474.78 2510.01 3169.08 1637.83 3169.08 1422.69 475.18 2370.06 474.78 2510.01"/>
              <path className="dataBox" d="M3121.1,1653.37l995.84-275.43c42.73-13.83,71.67-53.62,71.68-98.53v-25.69c0-71.5-70.72-121.5-138.13-97.65l-995.84,301.11c-41.37,14.64-69.02,53.76-69.02,97.64h0c0,70.32,68.57,120.2,135.47,98.54Z"/>
              <text className="dataNumber" transform="translate(3780.27 1386.67) rotate(-15.18)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3056.75 1622.85) rotate(-17.7)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 8F</tspan>
              </text>
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
              
              <polygon data-name="M11_7F hoverBox" className="hoverBox" points="474.33 2666.96 3169.08 1952.36 3169.08 1720.41 474.73 2526.99 474.33 2666.96"/>
              <path className="dataBox" d="M4188.59,1634.08v-29.72c0-75.25-72.56-129.2-144.62-107.53l-978.42,250.73c-47.45,14.27-79.93,57.97-79.93,107.52h0c0,73.71,69.81,127.42,141.06,108.53l978.41-221.01c49.22-13.05,83.49-57.6,83.5-108.52Z"/>
              <text className="dataNumber" transform="translate(3780.94 1728.29) rotate(-11.91)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3055.45 1917.24) rotate(-16.81)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 7F</tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('6F');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, '6F')}
            >
              
              <polygon data-name="M11_6F hoverBox" className="hoverBox" points="473.88 2823.92 3169.08 2266.6 3169.08 2024.09 474.28 2683.93 473.88 2823.92"/>
              <path className="dataBox" d="M4188.57,1989.31v-32.17c0-76.88-72.09-133.4-146.75-115.04l-966.03,201.95c-52.95,13.02-90.17,60.51-90.17,115.03h0c0,75.07,68.93,131.21,142.45,116.01l966.03-169.77c55.01-11.38,94.47-59.82,94.47-116Z"/>
              <text className="dataNumber" transform="translate(3780.49 2067.39) rotate(-8.95)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3049.16 2215.22) rotate(-12.58)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 6F</tspan>
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
              
              <polygon data-name="M11_5F hoverBox" className="hoverBox" points="473.43 2980.91 3169.08 2580.55 3169.08 2333.53 473.83 2840.9 473.43 2980.91"/>
              <path className="dataBox" d="M4188.55,2345.88v-32.98c0-76.16-69.24-133.55-144.08-119.41l-959.89,154.01c-57.39,10.85-98.95,60.99-98.95,119.4h0c0,74.22,65.95,131.1,139.37,120.2l959.89-121.03c59.56-8.85,103.66-59.98,103.66-120.19Z"/>
              <text className="dataNumber" transform="translate(3784.76 2411.45) rotate(-5.73)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3043.4 2529.2) rotate(-8.76)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 5F</tspan>
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
              
              <polygon data-name="M11_4F hoverBox" className="hoverBox" points="472.98 3137.92 3169.08 2894.22 3169.08 2647.72 473.38 2997.89 472.98 3137.92"/>
              <path className="dataBox" d="M4188.53,2704.39v-32.22c0-73.18-64.32-129.69-136.89-120.26l-960.37,105.92c-60.43,7.85-105.65,59.32-105.65,120.26h0c0,71.28,61.19,127.19,132.18,120.77l960.37-73.7c62.49-5.65,110.35-58.03,110.35-120.77Z"/>
              <text className="dataNumber" transform="translate(3775.99 2770.37) rotate(-5.7)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3038.73 2838.54) rotate(-5.7)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 4F</tspan>
              </text>
            </a>
          );
        })()}

        {(() => {
          const floor = getFloorData('3F');
          return (
            <a href=""
              onClick={(e) => handleFloorClick(e, '3F')}
            >
              
              <polygon data-name="M11_3F hoverBox" className="hoverBox" points="472.52 3294.95 3169.08 3194.02 3169.08 2974.2 472.93 3154.9 472.52 3294.95"/>
              <path className="dataBox" d="M4188.51,3056.65v-24.88c0-62.86-53.18-112.61-115.91-108.41l-985.6,56.34c-57.05,3.82-101.38,51.22-101.38,108.4h0c0,61.6,51.15,110.87,112.71,108.57l985.59-31.46c58.38-2.18,104.57-50.14,104.58-108.56Z"/>
              <text className="dataNumber" transform="translate(3761.13 3094.62) rotate(-3.31)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3035.07 3133.14) rotate(-3.31)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 3F</tspan>
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
              
              <polygon data-name="M11_2F hoverBox" className="hoverBox" points="472.07 3449 3169.08 3506.39 3169.08 3280.76 472.48 3311.94 472.07 3449"/>
              <path className="dataBox" d="M4188.48,3410.98v-27.41c0-62.15-50.76-112.34-112.91-111.62l-979.63,9.65c-61.14.71-110.33,50.47-110.33,111.61h0c0,60.72,48.54,110.3,109.24,111.59l979.62,17.76c62.56,1.33,113.99-49.01,113.99-111.58Z"/>
              <text className="dataNumber" transform="translate(3761.8 3447.27) rotate(.75)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3037.84 3436.04) rotate(.75)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 2F</tspan>
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
              
              <polygon data-name="M11_1F hoverBox" className="hoverBox" points="471.62 3609.08 3169.08 3815.41 3169.08 3568.92 472.03 3468.99 471.62 3609.08"/>
              <path className="dataBox" d="M4188.46,3750.82v-32.11c0-65.52-51.82-119.31-117.3-121.74l-959.21-30.17c-69-2.56-126.32,52.68-126.32,121.73h0c0,63.67,49.04,116.6,112.52,121.46l959.21,62.28c70.73,5.41,131.1-50.52,131.1-121.45Z"/>
              <text className="dataNumber" transform="translate(3755.5 3768.7) rotate(3.02)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3035.39 3734.33) rotate(3.02)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 1F</tspan>
              </text>
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
              
              <polygon data-name="M11_B1F hoverBox" className="hoverBox" points="471.17 3776.17 3169.08 4088.85 3169.08 3861.03 471.57 3631.07 471.17 3776.17"/>
              <path className="dataBox" d="M4188.44,4064.2v-25.54c0-58.3-44.62-106.89-102.71-111.85l-978.33-71.04c-65.51-5.58-121.78,46.09-121.78,111.84h0c0,56.99,42.71,104.94,99.32,111.5l978.33,96.58c66.66,7.73,125.16-44.38,125.16-111.49Z"/>
              <text className="dataNumber" transform="translate(3765.32 4066.91) rotate(6.06)">
                <tspan x="350" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </tspan>
              </text>
              <text className="title" transform="translate(3040.78 4007.69) rotate(6.06)">
                <tspan x="0" y="0" xmlSpace="preserve">M11 B1F</tspan>
              </text>
            </a>
          );
        })()}
      </g>
    </svg>
  );
};

export default SvgForM11;
