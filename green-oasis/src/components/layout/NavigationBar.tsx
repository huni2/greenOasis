// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// // import { RootState } from '@/redux/store'; // Redux-session
// import { toggleSidebar } from '@/redux/features/layout/layoutSlice';
// import { Dropdown } from 'antd';
// import type { MenuProps } from 'antd';
// import {
//   StyledHeader,
//   LogoWrapper,
//   MenuWrapper,
//   LocationLinks,
//   RightNavWrapper,
//   NavItems,
//   NavItem,
//   Title
// } from '@/styles/styled-components/NavigationBar.styles';
// import { useRouter } from "next/navigation";
// // import { ReduxSessionUser } from "@/types/login";
// import { clearSessionUser } from "@/redux/features/session/sessionSlice";
// import { CommonUtils } from "@/utils/commonUtils";
// // import {LoginService} from "@/services/loginService";

// interface NavigationBarProps {
//   style?: React.CSSProperties;
// }

// const NavigationBar: React.FC<NavigationBarProps> = ({ style }) => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   // const { isSidebarOpen } = useSelector((state: RootState) => state.layout);
//   // const sessionUser = useSelector((state: RootState) => state.session.user);
//   // const [userInfo, setUserInfo] = useState<ReduxSessionUser | null>(null);
//   const [isSsoMode] = useState(process.env.NEXT_PUBLIC_LOGIN_MODE === 'SSO');
//   const smSession = CommonUtils.getCookie('SMSESSION');

//   // useEffect(() => {
//   /*
//   console.log('isSsoMode : ', isSsoMode);
//   console.log("sessionUser : ", sessionUser);
//   console.log('smSession : ', smSession);
  
//   if (isSsoMode) {
//     if ((!smSession || smSession === 'LOGGEDOFF') && !sessionUser) {
//       console.log('로그인 정보가 없음');
//       // 저장된 사용자 정보 초기화
//       dispatch(clearSessionUser());
      
//       // SSO 로그인 페이지로 이동
//       router.push('/login/sso');
//     } else {
//       console.log("사용자 정보가 있음");
//       setUserInfo(sessionUser);
//     }
//   } else {
//     if (!sessionUser) {
//       console.log('로그인 정보가 없음');
//       document.cookie = 'auth=false; path=/;';
//       setUserInfo(null);
//       router.push('/login');
      
//     } else {
//       console.log("사용자 정보가 있음");
      
//       setUserInfo(sessionUser);
//     }
//   }
//    */
//   // const fetchInit = async () => {

//   //   const sessionUser = await LoginService.getSession();

//   //   if (sessionUser) {
//   //     setUserInfo(sessionUser);
//   //   } else {
//   //     router.push('/logout');
//   //   }
//   // };

//   // fetchInit();
//   // }, [sessionUser]);

//   const moveSite = (url: string) => {
//     router.push(url);
//   };

//   // const evtLogout = async () => {
//   //   // 서버 로그아웃 처리
//   //   // await LoginService.logout();

//   //   // 저장된 사용자 정보 초기화
//   //   dispatch(clearSessionUser());

//   //   CommonUtils.setCookie('SMSESSION', 'LOGGEDOFF', 7, 'skhynix.com');

//   //   document.cookie = 'auth=false; path=/;';

//   //   router.push('/login');
//   // }

//   const evtMyInfo = () => {
//     // console.log(LoginService.getSession());
//     router.push('/myinfo/profile');
//   }

//   const items: MenuProps['items'] = [
//     {
//       key: '1',
//       label: (
//         <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0' }}>
//           <i className="flag-us" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
//           <span>English</span>
//         </div>
//       ),
//     },
//     {
//       key: '2',
//       label: (
//         <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0' }}>
//           <i className="flag-china" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
//           <span>中文</span>
//         </div>
//       ),
//     },
//   ];

//   // const profileItems: MenuProps['items'] = [
//   //   {
//   //     key: '1',
//   //     label: (
//   //       <div onClick={evtMyInfo}>
//   //         <i className="ti-settings text-primary" />
//   //         나의정보
//   //       </div>
//   //     ),
//   //   },
//   //   ...(!isSsoMode ? [{
//   //     key: '2',
//   //     label: (
//   //       <div onClick={evtLogout}>
//   //         <i className="ti-power-off text-primary" />
//   //         로그아웃
//   //       </div>
//   //     ),
//   //   }] : [])
//   // ];

//   const notificationItems: MenuProps['items'] = [
//     {
//       key: '1',
//       label: (
//         <div className="preview-item">
//           <div className="preview-thumbnail">
//             <div className="preview-icon bg-success">
//               <i className="ti-info-alt mx-0" />
//             </div>
//           </div>
//           <div className="preview-item-content">
//             <h6>에러</h6>
//             <p>1분전</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: '2',
//       label: (
//         <div className="preview-item">
//           <div className="preview-thumbnail">
//             <div className="preview-icon bg-warning">
//               <i className="ti-settings mx-0" />
//             </div>
//           </div>
//           <div className="preview-item-content">
//             <h6>설정</h6>
//             <p>메세지</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: '3',
//       label: (
//         <div className="preview-item">
//           <div className="preview-thumbnail">
//             <div className="preview-icon bg-info">
//               <i className="ti-user mx-0" />
//             </div>
//           </div>
//           <div className="preview-item-content">
//             <h6>사용자등록</h6>
//             <p>2일전</p>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <StyledHeader style={style}>
//       <LogoWrapper>
//         <button type="button" className="navbar-toggler" onClick={() => dispatch(toggleSidebar())}>
//           <i className="icon-menu" />
//         </button>
//       </LogoWrapper>
//       <MenuWrapper 
//       $isOpen={isSidebarOpen}>
//         <Link href="/" className="navbar-logo">
//           <Image src="/images/login_sk_hynix_wh.png" alt="SK hynix 로고" width={58} height={30} style={{ height: '', width: '', marginTop: '-3px' }} />
//         </Link>
//         <Title>MAPS（실시간 자산관리 시스템) </Title>
//         <LocationLinks className={'location-link'}>
//           <li><a onClick={() => moveSite('/location/1010')} style={{ color: '#FFFFFF', }}>이천</a></li>
//           <li><a onClick={() => moveSite('/location/1020')} style={{ color: '#FFFFFF' }}>청주</a></li>
//           {/* <li><a href="">우시</a></li>
//           <li><a href="">충징</a></li> */}
//         </LocationLinks>
//       </MenuWrapper>
//       <RightNavWrapper>
//         <NavItems>
//           <NavItem className="nav-language">
//             <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
//               <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="languageDropdown">
//                 <i className="flag-korea" />
//                 <span>한국어</span>
//               </a>
//             </Dropdown>
//           </NavItem>
//           <NavItem className="nav-noti">
//             <Dropdown menu={{ items: notificationItems }} placement="bottomRight" trigger={['click']}>
//               <a className="nav-link count-indicator" id="notiDropdown" href="#" data-toggle="dropdown">
//                 <i className="icon-bell mx-0" />
//                 <span className="count" />
//               </a>
//             </Dropdown>
//           </NavItem>
//           <NavItem className="nav-profile">
//             {/* <Dropdown menu={{ items: profileItems }} placement="bottomRight" trigger={['click']}>
//               <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
//                 <img src="/images/top_face.png" alt="profile" />
//                 <span>{userInfo?.userCompanyId}</span>
//               </a>
//             </Dropdown> */}
//           </NavItem>
//           <NavItem className="nav-time">
//             <div>
//               {/* <span>{userInfo?.userName} | {userInfo?.userGroupName}</span> */}
//               <button type="button">
//                 <i className="icon-reset" />
//               </button>
//             </div>
//           </NavItem>
//         </NavItems>
//       </RightNavWrapper>
//     </StyledHeader>
//   );
// };

// export default NavigationBar; 