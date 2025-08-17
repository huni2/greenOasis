import React from 'react';
import { useRouter } from 'next/navigation';
import { FloorData } from '@/types/location';
import {locationSectionService} from "@/services/locationSectionService";
import Alert from "@/components/ui/Alert";

interface SvgForM10CProps {
  siteId: string;
  campusId: string;
  buildId: string;
  floorData?: FloorData[];
}

const SvgForM10C: React.FC<SvgForM10CProps> = ({ siteId, campusId, buildId, floorData }) => {
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
    backgroundImage: "url('/images/panorama/M10C.webp')",
  }

  return (
    <svg 
      style={svgBg}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="1220" 
      // height="auto" 
      viewBox="0 0 1220 695"
      className='svgForM10C'
      >

      <g className="view-M10C sideView" transform="matrix(1 0 0 1 142 116.9528)">
        <g className="level-area">
          {(() => {
            const floor = getFloorData('1F');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '1F')}
                className='link_disabled'
              >
                
                <polygon className="hoverBox" points="-82.05,303.05 246.09,398.09 1008.09,297.4 1008.09,357.66 244.91,518.61 -82.05,369.43"/>
                <path className="dataBox" d="M445.3,450l-169.7,24.2c-11.2,1.6-21.6-6.4-23.1-17.9l0,0c-1.5-11.6,6.5-21.9,17.8-23.1l171.2-18 c7.9-0.8,15.1,6.2,16.1,15.7l0,0C458.6,440.3,453.2,448.9,445.3,450z"/>
                <text transform="matrix(0.9901 -0.1406 0.1406 0.9901 267.8347 461.6919)" className="title">M10C 1F</text>
                <text transform="matrix(0.9901 -0.1406 0.1406 0.9901 340.1616 451.5621)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
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
                
                <polygon className="hoverBox" points="-82.41,235.97 251.16,276.11 1009.99,233.45 1009,297.3 248.03,397.32 -81.97,302.75"/>
                <path className="dataBox" d="M445.5,342.2l-170.2,16.9c-11.9,1.2-22.9-7.9-24.2-20.3l0,0c-1.3-12.4,7.6-23,19.7-23.6l171.6-8.1 c7.5-0.4,14.1,7.1,15,16.6l0,0C458.1,333.2,452.9,341.5,445.5,342.2z"/>
                <text transform="matrix(0.9975 -7.100000e-02 7.100000e-02 0.9975 266.8409 341.7031)" className="title">M10C 2F</text>
                <text transform="matrix(0.9975 -7.100000e-02 7.100000e-02 0.9975 339.6994 336.6594)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
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
                
                <polygon className="hoverBox" points="-84.35,170.36 246.09,152.86 1009.39,174.79 1008.09,233.91 247.07,274.74 -83.91,233.91"/>
                <path className="dataBox" d="M444.3,227.8l-171.8,4.1c-11.3,0.3-20.8-8.9-20.9-20.6l0,0c-0.1-11.6,9.2-21,20.5-20.8l171.9,2.3 c7.9,0.1,14.3,7.9,14.4,17.4l0,0C458.5,219.7,452.3,227.6,444.3,227.8z"/>
                <text transform="matrix(0.9998 -1.880000e-02 1.880000e-02 0.9998 266.3817 217.6696)" className="title">M10C 3F</text>
                <text transform="matrix(0.9998 -1.880000e-02 1.880000e-02 0.9998 339.404 216.4307)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
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
                
                <polygon className="hoverBox" points="-85.3,106.95 242.13,30.98 1011.74,114.79 1010.43,173.91 243.11,152.86 -84.86,170.03"/>
                <path className="dataBox" d="M443.2,126l-172.1-5.5c-11.1-0.4-19.9-9.9-19.4-21.3l0,0c0.5-11.4,10-20,21.1-19.3l171.6,11.2 c8.1,0.5,14.3,8.6,13.9,18.1l0,0C458,118.8,451.3,126.3,443.2,126z"/>
                <text transform="matrix(0.9994 3.330151e-02 -3.330151e-02 0.9994 266.1639 106.6848)" className="title">M10C 4F</text>
                <text transform="matrix(0.9994 3.330151e-02 -3.330151e-02 0.9994 339.1519 109.258)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
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
                
                <polygon className="hoverBox" points="-85.8,77.68 246.63,-22.29 1012.23,83.52 1011.93,114.65 247.61,30.59 -85.37,106.76"/>
                <path className="dataBox" d="M440.9,46.4L269.5,25.9c-10.7-1.3-18.5-11.2-17.1-22.1l0,0c1.3-10.9,11.2-18.4,21.9-16.9l170.3,24.9 c8.3,1.2,14.1,9.8,13.1,19.3l0,0C456.7,40.5,449.2,47.4,440.9,46.4z"/>
                <text transform="matrix(0.9936 0.1131 -0.1131 0.9936 266.2997 13.1423)" className="title">M10C 5F</text>
                <text transform="matrix(0.9936 0.1131 -0.1131 0.9936 338.8479 21.5425)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
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
                
                <polygon className="hoverBox" points="-86.3,52.01 246.13,-57.96 1012.74,59.84 1012.43,82.97 247.11,-22.08 -85.86,77.09"/>
                <path className="dataBox" d="M441.4,1.4L271.1-20.9c-11.8-1.5-19.9-10.5-18-19.8l0,0c2-9.3,13.2-15.2,24.8-13.3L446-25.5 c7.4,1.3,12.3,8.2,11.1,15.4l0,0C455.9-2.7,448.9,2.4,441.4,1.4z"/>
                <text transform="matrix(0.9902 0.1395 -0.1395 0.9902 266.4702 -33.7072)" className="title">M10C PH</text>
                <text transform="matrix(0.9902 0.1395 -0.1395 0.9902 338.7693 -23.3805)" className="dataNumber" x="100" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}
        </g>

        <g className="fab-area" style={{display: 'none'}}>
          {(() => {
            const floor = getFloorData('1FFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '1FFAB')}
                className='link_disabled'
              >
                
                <path className="dataBox dataBox-fab" d="M875.5,353.4L681.2,384c-4,0.6-7.7-1.9-8.3-5.6l-2.8-17.8c-0.6-3.7,2.2-7.2,6.2-7.7L872,326.5 c3-0.4,5.7,1.9,6.1,5l2,15.3C880.5,350,878.5,352.9,875.5,353.4z"/>
                <polygon className="dataBox-arrow-r" points="878.2,333 883.9,336.6 879.4,341.6"/>
                <text transform="matrix(1.1664 -0.1656 0.1406 0.9901 677.5498 372.6025)" className="title title-FAB">M10C 1F FAB</text>
                <text transform="matrix(0.9901 -0.1406 0.1406 0.9901 755.2308 361.5712)" className="dataNumber" x="115" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}

          {(() => {
            const floor = getFloorData('2FFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '2FFAB')}
              >
                
                <path className="dataBox dataBox-fab" d="M877.5,295.6l-195.8,19.3c-4.4,0.4-8.1-2.8-8.5-7.2l-1.5-21.2c-0.3-4.4,3-8.2,7.4-8.5l196.7-11.9 c2.8-0.2,5.1,2.5,5.3,6l0.9,16.7C882.3,292.3,880.3,295.3,877.5,295.6z"/>
                <polygon className="dataBox-arrow-r" points="881.2,275.1 886.6,279.1 881.8,283.8"/>
                <text transform="matrix(1.1751 -8.359999e-02 7.100000e-02 0.9975 678.2538 300.5139)" className="title title-FAB">M10C 2F FAB</text>
                <text transform="matrix(0.9975 -7.100000e-02 7.100000e-02 0.9975 756.5167 294.9468)" className="dataNumber" x="115" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}

          {(() => {
            const floor = getFloorData('3FFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '3FFAB')}
              >
                
                <path className="dataBox dataBox-fab" d="M877,223.8l-196.7,5.9c-4.2,0.1-7.7-3.2-7.8-7.5l-0.4-20.4c-0.1-4.3,3.3-7.7,7.5-7.7l196.9,0.2 c2.9,0,5.2,2.8,5.3,6.3l0.3,16.7C882.1,220.8,879.9,223.7,877,223.8z"/>
                <polygon className="dataBox-arrow-r" points="881.8,201.6 887,205.8 882,210.3"/>
                <text transform="matrix(1.1779 -2.220000e-02 1.880000e-02 0.9998 677.865 216.3823)" className="title title-FAB">M10C 3F FAB</text>
                <text transform="matrix(0.9998 -1.880000e-02 1.880000e-02 0.9998 756.311 214.9037)" className="dataNumber" x="110" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}

          {(() => {
            const floor = getFloorData('4FFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '4FFAB')}
              >
                
                <path className="dataBox dataBox-fab" d="M875.8,153.1L679,142.8c-4.2-0.2-7.4-3.9-7.2-8.1l1.2-20.4c0.3-4.2,3.9-7.4,8.1-7l196.2,16.4 c2.9,0.2,5,3.2,4.9,6.7l-0.8,16.7C881.1,150.6,878.7,153.3,875.8,153.1z"/>
                <polygon className="dataBox-arrow-r" points="881.9,131.4 886.8,136 881.4,140.1"/>
                <text transform="matrix(1.176 6.959708e-02 -5.899752e-02 0.9983 677.4514 130.2752)" className="title title-FAB">M10C 4F FAB</text>
                <text transform="matrix(0.9983 5.899752e-02 -5.899752e-02 0.9983 756.2775 134.9371)" className="dataNumber" x="110" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}

          {(() => {
            const floor = getFloorData('5FFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, '5FFAB')}
            >
                
                <path className="dataBox dataBox-fab" d="M874.5,94.4L677.8,76.2c-4.1-0.4-7.1-3.5-6.8-6.9l1.7-16.7c0.4-3.5,4-5.9,8.1-5.5l197.3,22.8 c2.9,0.3,4.9,3,4.5,5.9l-2.1,13.9C880.1,92.6,877.4,94.7,874.5,94.4z"/>
                <polygon className="dataBox-arrow-r" points="881.7,77.1 886.3,82 880.8,85.7"/>
                <text transform="matrix(1.1705 0.1333 -0.1131 0.9936 677.6269 64.8639)" className="title title-FAB">M10C 5F FAB</text>
                <text transform="matrix(0.9936 0.1131 -0.1131 0.9936 755.5834 73.7409)" className="dataNumber" x="115" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}

          {(() => {
            const floor = getFloorData('PHFAB');
            return (
              <a href="" 
                onClick={(e) => handleFloorClick(e, 'PHFAB')}
              >
                
                <path className="dataBox dataBox-fab" d="M874.8,62.3L679.2,37.6c-4.6-0.6-7.7-4.1-7.1-7.9l3.1-18.1c0.6-3.8,4.8-6.2,9.3-5.4l193.4,31.9 c2.6,0.4,4.4,3.1,4,5.9l-1.7,13.7C879.9,60.5,877.4,62.6,874.8,62.3z"/>
                <polygon className="dataBox-arrow-r" points="881.5,46 886,51 880.3,54.6"/>
                <text transform="matrix(1.1666 0.1644 -0.1395 0.9902 677.8229 28.3738)" className="title title-FAB">M10C PH FAB</text>
                <text transform="matrix(0.9902 0.1395 -0.1395 0.9902 755.0164 39.2504)" className="dataNumber" x="115" y="0" textAnchor="end">
                  {floor?.masterCnt || 0} / {floor?.slaveCnt || 0} / {floor?.masterTrackerCnt || 0} / {floor?.slaveTrackerCnt || 0}
                </text>
              </a>
            );
          })()}
        </g>
      </g>
    </svg>
  );
};

export default SvgForM10C;
