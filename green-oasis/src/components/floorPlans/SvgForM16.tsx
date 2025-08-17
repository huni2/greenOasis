import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";


interface SvgForM16Props {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}

const SvgForM16: React.FC<SvgForM16Props> = ({ siteId, campusId, buildId, floorData }) => {
  const router = useRouter();

  const handleFloorClick = async (e: React.MouseEvent<HTMLAnchorElement>,floorId: string) => {
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
    backgroundImage : "url('/images/panorama/M16.webp')",
  } 

  return (
    <svg 
      className="svgForM16"
      style={svgBg}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/" 
      width="1220" 
      // height="auto" 
      viewBox="0 0 1071 695">
    <g className="skhynixWrap-ic sideView" transform="matrix(1 0 0 1 0 -1)">
      <g>
      {(() => {
        const floor = getFloorData('B1F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, 'B1F')}
            className='link_disabled'
          >
            
            <polygon points="343 640.2 1037 507.6 1037 517.7 345.37 663.12 343 640.2" className="hoverBox"/>
            <path d="M512.16,627.67l-185.09,39.34c-7.25,1.54-14.07-3.99-14.07-11.39h0c0-5.58,3.96-10.38,9.44-11.44l185.79-35.9c6.1-1.18,11.77,3.5,11.77,9.71h0c0,4.67-3.27,8.71-7.84,9.68Z" className="dataBox"/>
            <text transform="translate(327.96 659.21) rotate(-11.35)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16  B1F</tspan>
            </text>
            <text transform="translate(508.19 623.15) rotate(-11.35)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('1F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '1F')}
            className='link_disabled'
          >
            
            <polygon points="343 615 1037 493 1037 502 344.64 637.89 343 615" className="hoverBox"/>
            <path d="M511.58,605.63l-184.64,35.68c-7.23,1.4-13.94-4.14-13.94-11.5h0c0-5.67,4.07-10.53,9.65-11.53l185.12-33.09c6.37-1.14,12.23,3.76,12.23,10.23h0c0,4.98-3.53,9.26-8.42,10.21Z" className="dataBox"/>
            <text transform="translate(327.6 633.71) rotate(-10.41)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   1F</tspan>
            </text>
            <text transform="translate(508.1 598.99) rotate(-10.41)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('2F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '2F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 563.6 1039.15 461.78 1039 480 345.37 597.01 345.37 563.6" className="hoverBox"/>
            <path d="M509.46,570.06l-175.12,28.76c-10.13,1.66-19.34-6.15-19.34-16.42h0c0-8.27,6.07-15.28,14.25-16.47l175.63-25.45c9.03-1.31,17.11,5.69,17.11,14.81h0c0,7.33-5.31,13.58-12.54,14.77Z" className="dataBox"/>
            <text transform="translate(326.97 588.75) rotate(-8.57)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   2F</tspan>
            </text>
            <text transform="translate(508.93 559.65) rotate(-8.57)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('2MF');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '2MF')}
            className='link_disabled'
          >
            
            <polygon points="345.37 525.63 1039.15 446.15 1039.15 458.98 345.37 558.6 345.37 525.63" className="hoverBox"/>
            <path d="M510.34,534.69l-176.38,25.56c-10,1.45-18.96-6.31-18.96-16.41h0c0-8.45,6.35-15.55,14.75-16.48l177.13-19.68c8.07-.9,15.12,5.42,15.12,13.53h0c0,6.77-4.97,12.51-11.66,13.48Z" className="dataBox"/>
            <text transform="translate(326.48 548.05) rotate(-6.9)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   2MF</tspan>
            </text>
            <text transform="translate(508.79 525.35) rotate(-6.9)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('3F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '3F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 487.36 1039.15 426.79 1039.15 442.64 345.37 520.63 345.37 487.36" className="hoverBox"/>
            <path d="M509.01,502.44l-175.45,19.49c-9.9,1.1-18.56-6.65-18.56-16.61h0c0-8.67,6.63-15.9,15.27-16.65l175.86-15.29c8.53-.74,15.87,5.98,15.87,14.55h0c0,7.44-5.6,13.69-12.99,14.51Z" className="dataBox"/>
            <text transform="translate(326.21 510.34) rotate(-5.84)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   3F</tspan>
            </text>
            <text transform="translate(508.71 492.15) rotate(-5.84)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('4F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '4F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 449.24 1039.15 408.57 1039.15 422.72 345.37 482.36 345.37 449.24" className="hoverBox"/>
            <path d="M509.06,468.13l-175.9,15.3c-9.76.85-18.16-6.85-18.16-16.65h0c0-8.85,6.91-16.17,15.75-16.68l176.27-10.22c8.13-.47,14.99,6,14.99,14.14h0c0,7.35-5.62,13.48-12.94,14.11Z" className="dataBox"/>
            <text transform="translate(325.83 472.47) rotate(-4.08)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   4F</tspan>
            </text>
            <text transform="translate(508.57 458.82) rotate(-4.08)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('5F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '5F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 412.12 1039.15 391.32 1039 404 345.37 445.24 345.37 412.12" className="hoverBox"/>
            <path d="M508.63,435.78l-175.92,10.2c-9.61.56-17.71-7.09-17.71-16.71h0c0-9.06,7.2-16.47,16.25-16.73l176.14-5.11c8-.23,14.6,6.19,14.6,14.18h0c0,7.52-5.86,13.73-13.37,14.17Z" className="dataBox"/>
            <text transform="translate(325.51 434.17) rotate(-2.07)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   5F</tspan>
            </text>
            <text transform="translate(508.43 425.44) rotate(-2.07)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('6F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '6F')}
          >
            
            <polygon points="345.37 374.07 1039.15 374.07 1039.16 389.16 345.37 408.57 345.37 374.07" className="hoverBox"/>
            <path d="M507.75,403.41l-175.47,5.09c-9.46.27-17.28-7.32-17.28-16.79h0c0-9.24,7.47-16.75,16.71-16.79l175.54-.85c8.13-.04,14.74,6.54,14.74,14.67h0c0,7.94-6.31,14.44-14.25,14.67Z" className="dataBox"/>
            <text transform="translate(325.34 396.68) rotate(.54)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   6F</tspan>
            </text>
            <text transform="translate(508.33 393.15) rotate(-1.3)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('7F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '7F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 337.44 1039.15 347.5 1039 365 345.37 370.71 345.37 337.44" className="hoverBox"/>
            <path d="M507.47,369.14l-175.51,1.7c-9.34.09-16.96-7.46-16.96-16.8h0c0-9.37,7.67-16.93,17.04-16.79l175.5,2.54c8.02.12,14.46,6.65,14.46,14.67h0c0,8.05-6.48,14.6-14.53,14.68Z" className="dataBox"/>
            <text transform="translate(325.25 358.69) rotate(.66)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   7F</tspan>
            </text>
            <text transform="translate(508.26 358.92) rotate(.66)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('7MF');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '7MF')}
            className='link_disabled'
          >
            
            <polygon points="345.37 299.58 1039.16 329.28 1039 345 345.37 333.44 345.37 299.58" className="hoverBox"/>
            <path d="M507.12,335.78l-175.57-2.54c-9.18-.13-16.55-7.61-16.55-16.79h0c0-9.53,7.92-17.15,17.44-16.78l175.46,6.78c7.88.3,14.1,6.78,14.1,14.66h0c0,8.19-6.7,14.79-14.88,14.67Z" className="dataBox"/>
            <text transform="translate(325.22 321.35) rotate(1.48)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   7MF</tspan>
            </text>
            <text transform="translate(508.21 325.76) rotate(1.48)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('8F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '8F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 263.05 1039.16 309.87 1039 323 345.37 296.17 345.37 263.05" className="hoverBox"/>
            <path d="M507.27,302.43l-176.18-6.81c-8.98-.35-16.09-7.73-16.09-16.72h0c0-9.69,8.2-17.35,17.86-16.69l175.91,11.9c7.45.5,13.23,6.69,13.23,14.15h0c0,8.05-6.69,14.48-14.73,14.17Z" className="dataBox"/>
            <text transform="translate(325.2 282.98) rotate(2.93)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   8F</tspan>
            </text>
            <text transform="translate(508.13 292.48) rotate(2.93)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('9F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '9F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 225.93 1039.16 293.03 1039 307 345.37 259.05 345.37 225.93" className="hoverBox"/>
            <path d="M506.89,269.98l-176.32-11.92c-8.77-.59-15.57-7.88-15.57-16.66h0c0-9.86,8.49-17.57,18.31-16.62l175.9,17c7.26.7,12.79,6.8,12.79,14.09h0c0,8.19-6.94,14.68-15.11,14.12Z" className="dataBox"/>
            <text transform="translate(325.24 245.82) rotate(4.24)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   9F</tspan>
            </text>
            <text transform="translate(508.07 260.22) rotate(4.24)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('10F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '10F')}
          >
            
            <polygon points="345.37 188.81 1039.16 276.17 1039 287 345.37 221.79 345.37 188.81" className="hoverBox"/>
            <path d="M507.1,236.63l-177-16.25c-8.55-.79-15.1-7.96-15.1-16.55h0c0-10,8.77-17.74,18.69-16.49l176.36,22.15c6.83.86,11.95,6.66,11.95,13.54h0c0,8.03-6.9,14.33-14.9,13.59Z" className="dataBox"/>
            <text transform="translate(325.51 207.01) rotate(6.80)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   10F</tspan>
            </text>
            <text transform="translate(507.95 227.64) rotate(6.80)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('11F');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, '11F')}
            className='link_disabled'
          >
            
            <polygon points="345.37 142.64 1039.15 251.22 1039 264 345.37 171.96 345.37 142.64" className="hoverBox"/>
            <path d="M507.85,193.15l-180.06-23.49c-7.32-.96-12.8-7.19-12.8-14.58h0c0-9.02,8.04-15.91,16.95-14.53l179.44,27.79c6.1.95,10.61,6.2,10.61,12.38h0c0,7.56-6.65,13.4-14.15,12.42Z" className="dataBox"/>
            <text transform="translate(325.71 158.85) rotate(8.49)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   11F</tspan>
            </text>
            <text transform="translate(507.91 184.38) rotate(8.49)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('RF');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, 'RF')}
            className='link_disabled'
          >
            
            <polygon points="345.37 110.38 1039.16 233.79 1039.16 247.22 345.37 139.69 345.37 110.38" className="hoverBox"/>
            <path d="M507.61,164.78l-180.2-27.86c-7.14-1.1-12.41-7.25-12.41-14.48h0c0-9.12,8.25-16.03,17.23-14.42l179.49,32.14c5.95,1.07,10.28,6.24,10.28,12.28h0c0,7.65-6.82,13.5-14.39,12.33Z" className="dataBox"/>
            <text transform="translate(324.87 127.43) rotate(9.36)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   지붕층</tspan>
            </text>
            <text transform="translate(508.88 156.2) rotate(9.36)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>
      <g>
      {(() => {
        const floor = getFloorData('PH');
        return (
          <a href=""
            onClick={(e) => handleFloorClick(e, 'PH')}
            className='link_disabled'
          >
            
            <polygon points="66 169 34 185 34 214.55 66 201.36 66 169" className="hoverBox"/>
            <polygon points="66 169 107 174 107 185.29 66 202 66 169" className="hoverBox"/>
            <polygon points="302 58 225 95 225 137.79 302 107.37 302 58" className="hoverBox"/>
            <polygon points="302 58 355 70 355 92.21 421 104 421 84.06 458 92 458 127.43 315 101.57 302 107.37 302 58" className="hoverBox"/>
            <polygon points="633 159 707 144 707 172.81 633 159" className="hoverBox"/>
            <polygon points="707 144 737 150 737 168.01 801 180 801 191.42 707 172.81 707 144" className="hoverBox"/>
            <polygon points="884 205 955 197 955 218.82 884 205" className="hoverBox"/>
            <polygon points="955 197 973 200 973 213.11 990 216 990 203.32 999 205 999 218.82 1016 222 1016 229.67 955 218.82 955 197" className="hoverBox"/>
            <path d="M504.86,91.24l-173.21-38.66c-10.02-2.24-15.64-12.93-11.81-22.45h0c3.09-7.67,11.34-11.91,19.37-9.96l172.45,41.92c8.86,2.15,13.75,11.67,10.35,20.13h0c-2.73,6.8-9.99,10.62-17.15,9.02Z" className="dataBox"/>
            <text transform="translate(328.57 39.49) rotate(13.34)">
              <tspan x="0" y="0" xmlSpace="preserve" className="title">M16   PH</tspan>
            </text>
            <text transform="translate(509.5 80.92) rotate(13.34)">
              <tspan x="0" y="0" className="dataNumber" textAnchor="end">
                {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
              </tspan>
            </text>
          </a>
        );
      })()}
      </g>

    </g>
  </svg>
  );
};

export default SvgForM16;
