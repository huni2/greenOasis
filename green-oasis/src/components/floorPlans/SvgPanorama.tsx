import React, { useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import 'tippy.js/dist/tippy.css';
import { getSiteComponentMap, getBuildComponentMap } from './componentMaps';
import { BuildingData, FloorData } from '@/types/location';

interface SvgPanoramaProps {
  siteId: string;
  buildId: string;
  campusId: string;
  buildingData?: BuildingData[];
  floorData?: FloorData[];
}

const getCompassRotation = (siteId: string, buildId: string): number => {
  // siteId 매핑
  const siteRotationMap: { [key: string]: number } = {
    '1010': 135, // IC
    '1020': -5, // CJ
  };

  // buildId 매핑
  const buildRotationMap: { [key: string]: number } = {
    'P140-01': 70,  // M10A
    'P140-03': -120,  // M10C
    'P140-40': 95, // M14
    'P140-62': 170, // M16
    'P240-01': 45,  // M11
    'P240-63': -70,  // M15
  };

  // buildId가 있으면 buildId 기준, 없으면 siteId 기준으로 회전 각도 반환
  return buildId ? buildRotationMap[buildId] || 135 : siteRotationMap[siteId] || 135;
};

const SvgPanorama: React.FC<SvgPanoramaProps> = ({ siteId, buildId, campusId, buildingData, floorData }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const compassRotation = getCompassRotation(siteId, buildId);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      mapContainerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const renderSvg = (): React.ReactNode => {
    if (!buildId) {
      const siteMap = getSiteComponentMap({ siteId, campusId, buildingData });
      return siteMap[siteId] ?? <div>해당 도면이 없습니다.</div>;
    } else {
      const buildMap = getBuildComponentMap({ siteId, campusId, buildId, floorData });
      return buildMap[buildId] ?? <div>해당 도면이 없습니다.</div>;
    }
  };


  return (
    <TransformWrapper 
        initialScale={1} 
        minScale={0.5} 
        maxScale={5}
        centerOnInit
        doubleClick={{ disabled: true }}
        wheel={{ disabled: false }}
    >
        {({ zoomIn, zoomOut, resetTransform }) => (
            <div className="mapCov" ref={mapContainerRef}>
                <div className="mapLeft">
                    <div className="inner">
                        <TransformComponent>
                            {renderSvg()}
                        </TransformComponent>
                        <div className="ic-compass" style={{transform: `rotate(${compassRotation}deg)`}}></div>
                    </div>
                </div>
                <div className="zoomBtns">
                    <button type="button" className="btnFull" onClick={toggleFullScreen}>전체</button>
                    <button type="button" className="btnPlus" onClick={() => zoomIn()}>확대</button>
                    <button type="button" className="btnMinus" onClick={() => zoomOut()}>축소</button>
                    <button type="button" className="btnMove" onClick={() => resetTransform()}>리셋</button>
                </div>
            </div>
        )}
    </TransformWrapper>
  );
};

export default SvgPanorama;
