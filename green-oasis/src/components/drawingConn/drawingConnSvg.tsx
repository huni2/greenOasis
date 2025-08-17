import React, {useCallback, useEffect, useRef, useState} from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { Equipment, BayArea } from '@/types/drawingConn';

export type InteractionMode = 'select' | 'resize' | 'drag' | 'pan' | 'insert' | 'none';

interface DrawingConnDetail {
  width: number;
  height: number;
  sizeX: number;
  sizeY: number;
  drawingImageFile: string;
}

interface DrawingConnSvgProps {
  mode: 'bay' | 'equip';
  detail: DrawingConnDetail;
  bayAreas: BayArea[];
  equipments?: Equipment[];
  selectedEquipments?: Equipment[];
  // selectedBay?: BayArea;
  selectedBayList? : BayArea[];
  isDragging: boolean;
  isPanning: boolean;
  interactionMode: InteractionMode;
  onInteractionModeChange: (mode: InteractionMode) => void;
  onPanStart: (ref: ReactZoomPanPinchRef, event: MouseEvent | TouchEvent) => void;
  onCanvasClick: (e: React.MouseEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onMouseDown: (e: React.MouseEvent<SVGElement>, equip?: Equipment) => void;
  onResizeStart: (e: React.MouseEvent<SVGElement>, equipment: Equipment, handle?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left') => void;
  onSelectBay?: (bay: BayArea | undefined) => void;
  onSelectEquipment?: (equipment: Equipment | null) => void;
  onResizeBay?: (e: React.MouseEvent, bay: BayArea, handle: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left') => void;
  onEquipmentsUpdate?: (equipments: Equipment[]) => void;
  svgRef: React.RefObject<SVGSVGElement>;
  onTransformChange?: (state: { scale: number; positionX: number; positionY: number }) => void;
  onBringToFront? : () => void;
  onBringToBack? : () => void;
  onAlignTop? : () => void;
  onAlignBottom? : () => void;
  onAlignLeft? : () => void;
  onAlignRight? : () => void;
  onEquallyMarginX? : () => void;
  onEquallyMarginY? : () => void;
  onCopy? : () => void;
}

const DrawingConnSvg: React.FC<DrawingConnSvgProps> = ({
  mode,
  detail,
  bayAreas,
  equipments,
  selectedEquipments,
  // selectedBay,
  selectedBayList,
  isDragging,
  isPanning,
  interactionMode,
  onInteractionModeChange,
  onPanStart,
  onCanvasClick,
  onDragOver,
  onDrop,
  onMouseDown,
  onResizeStart,
  onSelectBay,
  onSelectEquipment,
  onResizeBay,
  onEquipmentsUpdate,
  svgRef,
  onTransformChange,
  onBringToFront,
  onBringToBack,  
  onAlignTop,
  onAlignBottom,
  onAlignLeft,
  onAlignRight,
  onEquallyMarginX,
  onEquallyMarginY,
  onCopy,
}) => {
  const [svgScale, setSvgScale] = useState(1);
  const [circleRadius, setCircleRadius] = useState(0);
  
  useEffect(() => {
    calcCircleRadius();
  }, []);
  
  // 그리드 스냅 함수
  const GRID_SIZE = 10;
  const snapToGrid = (value: number, scale: number = 1) => {
    const scaledGridSize = GRID_SIZE / scale;
    return Math.round(value / scaledGridSize) * scaledGridSize;
  };

  // 전체화면 핸들러
  const handleFullscreen = useCallback(() => {
    const editorArea = document.querySelector('.model_editor_area');
    if (!editorArea) return;

    if (!document.fullscreenElement) {
      editorArea.requestFullscreen().catch(err => {
        console.error(`전체화면 오류: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  // 커서 스타일 계산
  const getCursorStyle = useCallback((): string => {
    switch (interactionMode) {
      case 'select':
        return 'pointer';
      case 'drag':
        return 'move';
      case 'resize':
        return 'nwse-resize';
      case 'pan':
        return isPanning ? 'grabbing' : 'grab';
      case 'none':
      default:
        return 'default';
    }
  }, [interactionMode, isPanning]);

  // 마우스 이벤트 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent<SVGElement>) => {
    const target = e.target as HTMLElement;
    
    if (interactionMode === 'resize') {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    // 리사이즈 핸들 클릭 시 이벤트 전파 중단
    if (target.tagName === 'circle') {
      e.stopPropagation();
      return;
    }

    if (target.tagName === 'polygon') {
      e.stopPropagation();
      const bayId = target.id.replace(/^[BE]_/, '');
      const bay = bayAreas.find(b => b.locationId === bayId);
      if (bay) {
        onSelectBay?.(bay);
        onMouseDown(e, bay as unknown as Equipment);
      }
    } else if (target.id === 'drawing' || target.tagName === 'svg') {
      // 도면이나 SVG 영역을 클릭했을 때만 선택 해제
      if (mode === 'bay') {
        onSelectBay?.(undefined);
      }
      onInteractionModeChange('pan');
      onSelectEquipment?.(null);
    }
  }, [mode, bayAreas, onSelectBay, onInteractionModeChange, onSelectEquipment, interactionMode, onMouseDown]);

  const handleMouseUp = useCallback((e: React.MouseEvent<SVGElement>) => {
    const target = e.target as HTMLElement;
    
    // SVG 영역이나 도면을 클릭했을 때만 선택 해제
    if (target.id === 'drawing' || target.tagName === 'svg') {
      if (mode === 'bay') {
        onSelectBay?.(undefined);
      }
      onInteractionModeChange('none');
      onSelectEquipment?.(null);
    }
  }, [mode, onSelectBay, onInteractionModeChange, onSelectEquipment]);

  const calcCircleRadius = () => {
    const point = svgRef.current?.createSVGPoint();
    if (!point) return 0;
    point.x = 0;
    point.y = 0;
    const startPos = point.matrixTransform(svgRef.current?.getScreenCTM()?.inverse());
    
    point.x = 5;
    point.y = 5;
    const endPos = point.matrixTransform(svgRef.current?.getScreenCTM()?.inverse());
    // console.log(`START POS : ${startPos.x}, ${startPos.y} / END POS : ${endPos.x}, ${endPos.y}`);
    // console.log(`SVG SCALE : ${svgScale}, SVG SIZE : ${detail?.sizeX ?? 0}`);
    // return (100 / (svgScale * 100) / (detail?.sizeX / 8000));
    setCircleRadius(endPos.x - startPos.x);
  }
  return (
    // <div className="model_map_floorPlan">
    <div className={ mode === 'equip' ? "model_map_floorPlan" : "bay_map_floorPlan"}>
      <div className="model_editor_area"
        style={{ cursor: getCursorStyle() }}
      >
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={20}
          centerOnInit={true}
          wheel={{ step: 1 }}
          // doubleClick={{ step: 1 }}
          doubleClick={{ disabled: true }}
          panning={{ 
            velocityDisabled: true,
            disabled: interactionMode === 'select' || interactionMode === 'resize',
            allowLeftClickPan: interactionMode !== 'select' && interactionMode !== 'resize',
            allowMiddleClickPan: false,
            allowRightClickPan: false,
            lockAxisX: false,
            lockAxisY: false
          }}
          limitToBounds={false}
          alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
          centerZoomedOut={false}
          onPanningStart={(ref, e) => {
            if (interactionMode !== 'select' && interactionMode !== 'resize') {
              onPanStart(ref, e);
            }
          }}
          onPanningStop={() => {
            if (interactionMode === 'pan') {
              onInteractionModeChange('none');
            }
          }}
          onTransformed={(ref, state) => {
            onTransformChange?.({
              scale: state.scale,
              positionX: state.positionX,
              positionY: state.positionY
            });
            setSvgScale(state.scale);
            calcCircleRadius();
          }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperClass="transform-component"
                contentClass="transform-content"
                wrapperStyle={{
                  // width: '100%',
                  // height: '100%',
                  // position: 'absolute',
                  // top: 0,
                  // left: 0,
                  cursor: getCursorStyle()
                }}
                contentStyle={{
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <svg
                  id="editor"
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${detail?.sizeX ?? 0} ${detail?.sizeY ?? 0}`}
                  preserveAspectRatio="xMidYMid meet"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  ref={svgRef}
                  style={{
                    pointerEvents: 'all',
                    margin: 'auto',
                    cursor: getCursorStyle()
                  }}
                >
                  {/* 도면 이미지 */}
                  <image
                    id="drawing"
                    className="drawing-image"
                    width={detail?.sizeX ?? 0}
                    height={detail?.sizeY ?? 0}
                    href={`/uploads/${detail?.drawingImageFile}`}
                    preserveAspectRatio="xMidYMid meet"
                  />

                  {/* BAY 영역 폴리곤 렌더링 */}
                  <g id={'bayAreaGroup'}>
                    {bayAreas
                      .filter((_bayData) => _bayData.locationType === 'BAY')
                      .map((_bayData) => (
                        <g key={_bayData.locationId}>
                          <polygon
                            id={`B_${_bayData.locationId}`}
                            key={`B_${_bayData.locationId}`}
                            points={_bayData.points}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (mode === 'bay') {
                                onSelectBay?.(_bayData);
                                onMouseDown(e, _bayData as unknown as Equipment);
                              }
                            }}
                            style={{
                              pointerEvents: mode === 'bay' ? 'all' : 'none',
                              opacity: selectedBayList?.map(item => item.locationId).includes(_bayData.locationId) ? 0.3 : 0.1,
                              fill: '#fffc00',
                              stroke: selectedBayList?.map(item => item.locationId).includes(_bayData.locationId) ? '#ff0000' : 'black',
                              strokeWidth: selectedBayList?.map(item => item.locationId).includes(_bayData.locationId) ? 2 : 1,
                              cursor: mode === 'bay' ? 'move' : 'default',
                              zIndex: 99,
                            }}
                          >
                            {_bayData.subSectionId && (
                              <title>{_bayData.subSectionName}</title>
                            )}
                          </polygon>
                          
                          {selectedBayList?.map(item => item.locationId).includes(_bayData.locationId) && (
                            <>
                              <circle
                                cx={_bayData.points.split(' ')[0].split(',')[0]}
                                cy={_bayData.points.split(' ')[0].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'nw-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _bayData, 'top-left')}
                              />
                              <circle
                                cx={_bayData.points.split(' ')[1].split(',')[0]}
                                cy={_bayData.points.split(' ')[1].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'ne-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _bayData, 'top-right')}
                              />
                              <circle
                                cx={_bayData.points.split(' ')[2].split(',')[0]}
                                cy={_bayData.points.split(' ')[2].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'se-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _bayData, 'bottom-right')}
                              />
                              <circle
                                cx={_bayData.points.split(' ')[3].split(',')[0]}
                                cy={_bayData.points.split(' ')[3].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'sw-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _bayData, 'bottom-left')}
                              />
                            </>
                          )}
                        </g>
                      ))}
                  </g>

                  {/* 장비 영역 폴리곤 렌더링 */}
                  <g id={'equipAreaGroup'}>
                    {bayAreas
                      .filter((_equipData) => _equipData.locationType === 'EQUIP')
                      .map((_equipData) => (
                        // <g key={_equipData.subSectionId}>
                        <g key={`E_${_equipData.locationId}`}>
                          <polygon
                            id={`E_${_equipData.locationId}`}
                            key={`E_${_equipData.locationId}`}
                            points={_equipData.points}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              if (mode === 'bay') {
                                onSelectBay?.(_equipData);
                                onMouseDown(e, _equipData as unknown as Equipment);
                              }
                            }}
                            style={{
                              pointerEvents: mode === 'bay' ? 'all' : 'none',
                              opacity: selectedBayList?.map(item => item.locationId).includes(_equipData.locationId) ? 0.3 : 0.1,
                              fill: '#248afd',
                              stroke: selectedBayList?.map(item => item.locationId).includes(_equipData.locationId) ? '#ff0000' : 'black',
                              strokeWidth: selectedBayList?.map(item => item.locationId).includes(_equipData.locationId) ? 2 : 1,
                              cursor: mode === 'bay' ? 'move' : 'default',
                              zIndex: 98,
                            }}
                          />
                          {selectedBayList?.map(item => item.locationId).includes(_equipData.locationId) && (
                            <>
                              <circle
                                cx={_equipData.points.split(' ')[0].split(',')[0]}
                                cy={_equipData.points.split(' ')[0].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'nw-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _equipData, 'top-left')}
                              />
                              <circle
                                cx={_equipData.points.split(' ')[1].split(',')[0]}
                                cy={_equipData.points.split(' ')[1].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'ne-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _equipData, 'top-right')}
                              />
                              <circle
                                cx={_equipData.points.split(' ')[2].split(',')[0]}
                                cy={_equipData.points.split(' ')[2].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'se-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _equipData, 'bottom-right')}
                              />
                              <circle
                                cx={_equipData.points.split(' ')[3].split(',')[0]}
                                cy={_equipData.points.split(' ')[3].split(',')[1]}
                                r={circleRadius}
                                fill="white"
                                stroke="black"
                                style={{ cursor: 'sw-resize', pointerEvents: 'all' }}
                                onMouseDown={(e) => onResizeBay?.(e, _equipData, 'bottom-left')}
                              />
                            </>
                          )}
                        </g>
                      ))}
                  </g>

                  {/* 장비 이미지 렌더링 */}
                  <g id={'equipImageGroup'}>
                    {equipments?.map((_equipImgData) => (
                      <g key={_equipImgData.uuid}>
                        <image
                          id={_equipImgData.uuid}
                          className="draggable"
                          x={_equipImgData.posX}
                          y={_equipImgData.posY}
                          width={_equipImgData.sizeX}
                          height={_equipImgData.sizeY}
                          href={`/uploads/${_equipImgData.equipModelImage}`}
                          preserveAspectRatio="none"
                          data-eq-id={_equipImgData.eqpId}
                          data-assets-no={_equipImgData.assetsNo}
                          data-equip-model-cd={_equipImgData.equipModelCd}
                          onMouseDown={(e) => onMouseDown(e, _equipImgData)}
                          style={{
                            cursor: interactionMode === 'select' ? 'pointer' : getCursorStyle(),
                            // opacity: selectedEquipments?.some(eq => eq?.uuid === _equipImgData.uuid) ? 0.8 : 1,
                            filter: selectedEquipments?.some(eq => eq?.uuid === _equipImgData.uuid) ? 'drop-shadow(0 0 5px #ff0000)' : 'none',
                            pointerEvents: 'all',
                            transform: 'none',
                            transformOrigin: '0 0'
                          }}
                        >
                          <title>{_equipImgData.eqpId}</title>
                        </image>
                        {selectedEquipments?.some(eq => eq?.uuid === _equipImgData.uuid) && (
                          <>
                            <circle
                              cx={_equipImgData.posX + _equipImgData.sizeX}
                              cy={_equipImgData.posY}
                              r={circleRadius}
                              fill="white"
                              stroke="black"
                              style={{ cursor: 'ne-resize', pointerEvents: 'all' }}
                              onMouseDown={(e) => onResizeStart(e, _equipImgData, 'top-right')}
                            />
                            <circle
                              cx={_equipImgData.posX + _equipImgData.sizeX}
                              cy={_equipImgData.posY + _equipImgData.sizeY}
                              r={circleRadius}
                              fill="white"
                              stroke="black"
                              style={{ cursor: 'se-resize', pointerEvents: 'all' }}
                              onMouseDown={(e) => onResizeStart(e, _equipImgData, 'bottom-right')}
                            />
                            <circle
                              cx={_equipImgData.posX}
                              cy={_equipImgData.posY + _equipImgData.sizeY}
                              r={circleRadius}
                              fill="white"
                              stroke="black"
                              style={{ cursor: 'sw-resize', pointerEvents: 'all' }}
                              onMouseDown={(e) => onResizeStart(e, _equipImgData, 'bottom-left')}
                            />
                            <circle
                              cx={_equipImgData.posX}
                              cy={_equipImgData.posY}
                              r={circleRadius}
                              fill="white"
                              stroke="black"
                              style={{ cursor: 'nw-resize', pointerEvents: 'all' }}
                              onMouseDown={(e) => onResizeStart(e, _equipImgData, 'top-left')}
                            />
                          </>
                        )}
                      </g>
                    ))}
                  </g>
                </svg>
              </TransformComponent>

              <div className="editIcons">
                <button type="button" className="btnFull" onClick={handleFullscreen} title="전체보기">전체보기</button>
                <button type="button" className="btnPlus" onClick={() => zoomIn()} title="확대">확대</button>
                <button type="button" className="btnMinus" onClick={() => zoomOut()} title="축소">축소</button>
                <div className="divide"></div>
                {/*<button type="button" className="btnCopy" onClick={onCopy} title="복사">복사</button>*/}
                {/*<button type="button" className="btnCut" onClick={() => {}} title="잘라내기">잘라내기</button>*/}
                {/*<button type="button" className="btnPaste" onClick={() => {}} title="붙여넣기">붙여넣기</button>*/}
                {/*<div className="divide"></div>*/}
                <button type="button" className="btnLayerTop" onClick={onBringToFront} title="레이어 앞으로 가져오기">레이어 앞으로 가져오기</button>
                <button type="button" className="btnLayerBottom" onClick={onBringToBack} title="레이어 뒤로 보내기">레이어 뒤로 보내기</button>
                <div className="divide"></div>
                <button type="button" className="btnArrayTop" onClick={onAlignTop} title="상단정렬">상단정렬</button>
                <button type="button" className="btnArrayLeft" onClick={onAlignLeft} title="좌측정렬">좌측정렬</button>
                <button type="button" className="btnArrayRight" onClick={onAlignRight} title="우측정렬">우측정렬</button>
                <button type="button" className="btnArrayBottom" onClick={onAlignBottom} title="하단정렬">하단정렬</button>
                <button type="button" className="btnDistributionHorizontal" onClick={onEquallyMarginX} title="가로균등배치">가로균등배치</button>
                <button type="button" className="btnDistributionVertical" onClick={onEquallyMarginY} title="세로균등배치">세로균등배치</button>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default DrawingConnSvg;