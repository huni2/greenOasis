import React from 'react';
import { useRouter } from 'next/navigation';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BuildingData } from '@/types/location';

interface SvgForCJProps {
  siteId: string;
  campusId: string;
  buildingData?: BuildingData[];
}

const TooltipContent = ({ building }: { building: BuildingData }) => (
  <div className="lay_tooltip">
    <div className="dataTooltip">
      <div>
        <p className="yellow">{building.name}</p>
        <table>
          <tbody>
            <tr>
              <td className="num">
                마스터자산 : {building.masterCnt}<br />
                슬레이브자산 : {building.slaveCnt}<br />
                마스터Tracker : {building.masterTrackerCnt}<br />
                슬레이브Tracker : {building.slaveTrackerCnt}<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SvgForCJ: React.FC<SvgForCJProps> = ({ siteId, campusId, buildingData }) => {
  const router = useRouter();

  const handleBuildingClick = (e: React.MouseEvent<HTMLAnchorElement>, buildingName: string, buildingId: string) => {
    e.preventDefault();
    console.log(siteId, campusId, buildingId, buildingName);
    if(buildingName === 'M11'){
      router.push(`/location/${siteId}/CJ3/${buildingId}`);
    }else{
      router.push(`/location/${siteId}/${campusId}/${buildingId}`);
    }
  };

  const getBuildingData = (buildingId: string) => {
    return buildingData?.find(b => b.key === buildingId);
  };

  return (
    <svg id="cj_group" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
         style={{backgroundImage : "url('/images/panorama_1020.webp')", backgroundSize : 'contain', backgroundPosition : 'center', backgroundRepeat : 'no-repeat'}}
         viewBox="0 0 8000 6000" className='svgForCJ'>
      <g className="skhynixWrap-ic panoramicView"> 
        {/* <!--M15--> */}
        {getBuildingData('P240-63') && (
          <Tippy content={<TooltipContent building={getBuildingData('P240-63')!} />} placement="top" interactive={false} offset={[0, 80]}>
            <a
              href=""
              onClick={(e) => handleBuildingClick(e, 'M15', 'P240-63')}
            >
              <path className="b_build" d="M3680.4,940.7l-12.43-294.47,76.4-5.61,2.07,15.8,22.01-2.07,5.96,32.63,422.16-36.26.78-29.78,139.6-10.45,5.87,25.9,17.7-1.04v-6.47l194.5-17.09.52,6.22,112.06-10.45.78-6.73,64.75-4.14,1.04,5.44,177.93-15.54,1.29-26.94,23.31-1.04.52-15.8,51.8-4.4,4.14,14.24,29.78-2.33,17.35,63.45-2.33,35.48,88.32,316.23,10.62-1.04,12.17,38.85-21.24,272.2-79.08,8.55,10.01,42.82-98.76,9.32-10.19-43.08-10.62,1.29,6.47,20.2-.52,18.39-12.43.26-9.06-38.07-3.88,1.29,4.4,17.87.52,18.13-11.14.78-3.37-5.44-7.25-30.56-1145.87,106.79s-17.75,4.21-23.62-6.84l-69.06-444.43s-.76-9.63,16.03-12.06Z"/>
              <rect className="tit_b" x="4240.11" y="831.42" width="438.66" height="174.4" rx="85.81" ry="85.81"/>
              <path className="tit_build" d="M4353.94,956.17v-85.81h18.99l14.59,40.3c.93,2.55,1.81,5.23,2.66,8.05.85,2.82,1.7,5.58,2.55,8.28h.58c.93-2.7,1.81-5.46,2.66-8.28.85-2.82,1.66-5.5,2.43-8.05l14.36-40.3h18.99v85.81h-15.63v-35.78c0-2.78.12-5.83.35-9.15.23-3.32.52-6.66.87-10.02s.67-6.35.98-8.97h-.46l-7.06,20.15-13.2,36.01h-9.84l-13.32-36.01-6.83-20.15h-.46c.31,2.63.62,5.62.93,8.97.31,3.36.6,6.7.87,10.02.27,3.32.41,6.37.41,9.15v35.78h-15.4Z"/>
              <path className="tit_build" d="M4451.68,956.17v-13.9h18.53v-51.76h-15.63v-10.65c4.32-.85,8.05-1.85,11.17-3.01s6.04-2.55,8.74-4.17h12.62v69.6h16.1v13.9h-51.53Z"/>
              <path className="tit_build" d="M4542.58,957.79c-4.56,0-8.61-.54-12.16-1.62-3.55-1.08-6.72-2.51-9.5-4.28-2.78-1.78-5.25-3.71-7.41-5.79l7.87-10.89c1.62,1.62,3.38,3.09,5.27,4.4,1.89,1.31,3.97,2.36,6.25,3.13,2.28.77,4.73,1.16,7.35,1.16,2.93,0,5.54-.58,7.82-1.74,2.28-1.16,4.07-2.82,5.38-4.98,1.31-2.16,1.97-4.79,1.97-7.87,0-4.63-1.33-8.2-4-10.71-2.66-2.51-6.16-3.76-10.48-3.76-2.47,0-4.59.35-6.37,1.04-1.78.7-3.94,1.85-6.48,3.47l-7.76-5.1,2.32-41.57h45.86v14.24h-31.15l-1.62,18.18c1.7-.77,3.36-1.35,4.98-1.74,1.62-.39,3.4-.58,5.33-.58,4.79,0,9.19.93,13.2,2.78,4.01,1.85,7.22,4.71,9.61,8.57,2.39,3.86,3.59,8.76,3.59,14.71s-1.41,11.31-4.23,15.63c-2.82,4.33-6.49,7.62-11,9.9-4.52,2.28-9.4,3.42-14.65,3.42Z"/>
            </a>
          </Tippy>
        )}

        {/* <!--M11--> */}
        {getBuildingData('P240-01') && (
          <Tippy content={<TooltipContent building={getBuildingData('P240-01')!} />} placement="top" interactive={false} offset={[0, 80]}>
            <a
              href=""
              onClick={(e) => handleBuildingClick(e, 'M11', 'P240-01')}
            >
              <polygon className="b_build" points="3597.13 4038.32 4696.46 4014.23 4696.46 4011.64 4808.87 4009.05 4810.16 4011.9 4817.67 4010.6 4820.52 3972.53 4865.76 3970.81 4865.93 3960.79 5066.74 3955.61 5130.45 4703.84 5110.25 4703.84 5093.93 4850.43 5090.56 4850.56 5090.91 4856.6 5028.41 4857.12 5028.75 4861.44 4819.31 4867.22 4818.28 4861.53 4788.75 4862.22 4788.41 4866.53 4599.86 4869.64 4598.82 4862.91 4558.68 4863.68 4558.94 4870.16 4377.64 4872.66 4377.99 4851.94 4298.56 4852.63 4298.91 4875.77 4126.94 4879.22 4126.25 4873.7 4087.57 4875.08 4088.09 4882.76 3985.36 4885.18 3985.01 4896.75 3929.59 4897.09 3929.07 4886.91 3601.62 4894.42 3584.69 4699.65 3586.59 4583.37 3589.44 4583.37 3597.13 4038.32"/>
              <rect className="tit_b" x="4085.15" y="4343.37" width="426.82" height="166.79" rx="82.78" ry="82.78"/>
              <path className="tit_build" d="M4193.07,4464.31v-85.81h18.99l14.59,40.3c.93,2.55,1.81,5.23,2.66,8.05.85,2.82,1.7,5.58,2.55,8.28h.58c.93-2.7,1.81-5.46,2.66-8.28.85-2.82,1.66-5.5,2.43-8.05l14.36-40.3h18.99v85.81h-15.63v-35.78c0-2.78.12-5.83.35-9.15.23-3.32.52-6.66.87-10.02s.67-6.35.98-8.97h-.46l-7.06,20.15-13.2,36.01h-9.84l-13.32-36.01-6.83-20.15h-.46c.31,2.63.62,5.62.93,8.97.31,3.36.6,6.7.87,10.02.27,3.32.41,6.37.41,9.15v35.78h-15.4Z"/>
              <path className="tit_build" d="M4290.81,4464.31v-13.9h18.53v-51.76h-15.63v-10.65c4.32-.85,8.05-1.85,11.17-3.01s6.04-2.55,8.74-4.17h12.62v69.6h16.1v13.9h-51.53Z"/>
              <path className="tit_build" d="M4359.13,4464.31v-13.9h18.53v-51.76h-15.63v-10.65c4.32-.85,8.05-1.85,11.17-3.01s6.04-2.55,8.74-4.17h12.62v69.6h16.1v13.9h-51.53Z"/>
            </a>
          </Tippy>
        )}
      </g>
    </svg>
  );
};

export default SvgForCJ;
