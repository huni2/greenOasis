import React, { ReactNode } from 'react';
import SvgForIC from './SvgForIC';
import SvgForCJ from './SvgForCJ';
import SvgForM10A from './SvgForM10A';
import SvgForM10C from './SvgForM10C';
import SvgForM11 from './SvgForM11';
import SvgForM14 from './SvgForM14';
import SvgForM15 from './SvgForM15';
import SvgForM16 from './SvgForM16';
import {FloorData, BuildingData} from '@/types/location';


// === 컴포넌트 props 타입 ===
interface SiteComponentProps {
    siteId: string;
    campusId: string;
    buildingData?: BuildingData[];
  }
  
  interface BuildComponentProps {
    siteId: string;
    campusId: string;
    buildId: string;
    floorData?: FloorData[];
  }
  
  // === 사이트 ID 기반 컴포넌트 매핑 ===
  export const getSiteComponentMap = (props: SiteComponentProps): Record<string, ReactNode> => ({
    '1010': <SvgForIC {...props} />,
    '1020': <SvgForCJ {...props} />,
  });
  
  // === 건물 ID 기반 컴포넌트 매핑 ===
  export const getBuildComponentMap = (props: BuildComponentProps): Record<string, ReactNode> => ({
    'P140-01': <SvgForM10A {...props} />,
    'P140-03': <SvgForM10C {...props} />,
    'P140-40': <SvgForM14 {...props} />,
    'P140-62': <SvgForM16 {...props} />,
    'P240-01': <SvgForM11 {...props} />,
    'P240-63': <SvgForM15 {...props} />,
  });
