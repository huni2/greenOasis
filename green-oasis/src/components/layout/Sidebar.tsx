// 'use client';

// import React, {useEffect, useState} from 'react';
// import type {MenuProps} from '@/components/ui';
// import Link from 'next/link';
// import {usePathname, useRouter} from 'next/navigation';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from '@/redux/store';
// import {setActiveMenu, toggleSidebar} from '@/redux/features/layout/layoutSlice';
// import {GlobalStyle, StyledMenu, StyledSider} from '@/styles/styled-components/Sidebar.styles';

// interface SidebarProps {
//   style?: React.CSSProperties;
// }

// type MenuItem = Required<MenuProps>['items'][number];

// // 서브메뉴 타이틀 스타일 상수
// const SUBMENU_TITLE_STYLE: React.CSSProperties = {
//   background: '#1e1e1e',
//   color: '#fff',
//   height: '40px',
//   width: '100%',
//   lineHeight: '40px',
//   margin: 0,
//   textAlign: 'center',
//   pointerEvents: 'none',
//   cursor: 'default'
// };

// // 서브메뉴 타이틀 아이템 생성 함수
// const createSubmenuTitle = (label: string, key: string) => ({
//   key,
//   label,
//   className: 'submenu-title',
//   style: SUBMENU_TITLE_STYLE
// });

// const expandedMenuItems: MenuItem[] = [
//   {
//     key: '0',
//     icon: <i className="menu-icon nav-map" />,
//     label: '전경도',
//     children: [
//       {
//         key: '0-1',
//         label: <Link href="/location/1010">이천캠퍼스</Link>,
//       },
//       {
//         key: '0-2',
//         label: <Link href="/location/1020">청주캠퍼스</Link>,
//       }
//     ]
//   },
//   {
//     key: '1',
//     icon: <i className="menu-icon nav-tracker" />,
//     label: 'Tracker 관리',
//     children: [
//       {
//         key: '1-1',
//         label: <Link href="/tracker/trackerList">Tracker 관리</Link>,
//       },
//       {
//         key: '1-2',
//         label: <Link href="/history/trackerErrorHistoryList">Tracker 장애</Link>,
//       },
//       {
//         key: '1-3',
//         label: <Link href="/history/trackerCollectionHistoryList">Tracker 데이터수집</Link>,
//       },
//       // {
//       //   key: '1-4',
//       //   label: <Link href="/bleMgmt/bleFirmwareVersion">Tracker 셋팅 변경</Link>,
//       // },
//       {
//         key: '1-5',
//         label: <Link href="/bleMgmt/bleFirmwareUpgrade">Tracker 전송관리</Link>,
//       },
//       {
//         key: '1-6',
//         label: <Link href="/tracker/trackerInstallList">Tracker 설치현황</Link>,
//       },
//       {
//         key: '1-7',
//         label: <Link href="/tracker/unclearAsset">Tracker 미위치 현황</Link>,
//       },
//       {
//         key: '1-8',
//         label: <Link href="/standard/storageList">사외 유휴 창고관리</Link>,
//       },
//     ]
//   },
//   {
//     key: '2',
//     icon: <i className="menu-icon nav-standardAsset" />,
//     label: '기준정보 관리',
//     children: [
//       {
//         key: '2-1',
//         label: <Link href="/assets/assetsList">MDM장비 관리</Link>,
//       },
//       {
//         key: '2-2',
//         label: <Link href="/standard/assetsConn">MDM장비 연결관리</Link>,
//       },
//       {
//         key: '2-3',
//         label: <Link href="/standard/drawing">도면관리</Link>,
//       },
//       {
//         key: '2-4',
//         label: <Link href="/standard/assetModel/assetModelList">도면항목관리</Link>,
//       },
//       {
//         key: '2-5',
//         label: <Link href="/standard/drawingConn">도면자산연결관리</Link>,
//       },
//       {
//         key: '2-6',
//         label: <Link href="/standard/bleApList">BLE AP관리</Link>,
//       },
//       {
//         key: '2-7',
//         label: <Link href="/standard/ohtList">OHT 관리</Link>,
//       },
//       {
//         key: '2-9',
//         label: <Link href="/standard/assetPosition">모델별 부착가이드</Link>,
//       },
//     ]
//   },
//   {
//     key: '3',
//     icon: <i className="menu-icon nav-bbs" />,
//     label: '게시판',
//     children: [
//       {
//         key: '3-1',
//         label: <Link href="/board/noticeList">공지사항</Link>,
//       },
//       {
//         key: '3-2',
//         label: <Link href="/board/boardList">게시판</Link>,
//       },
//       {
//         key: '3-3',
//         label: <Link href="/board/qnaList">Q&A</Link>,
//       }
//     ]
//   },
//   {
//     key: '4',
//     icon: <i className="menu-icon nav-system" />,
//     label: '시스템',
//     children: [
//       {
//         key: '4-1',
//         label: <Link href="/system/user/userList">사용자 관리</Link>,
//       },
//       {
//         key: '4-2',
//         label: <Link href="/system/menu/menuList">메뉴 관리</Link>,
//       },
//       {
//         key: '4-3',
//         label: <Link href="/system/group/groupList">그룹 관리</Link>,
//       },
//       {
//         key: '4-4',
//         label: <Link href="/system/code/codeList">코드 관리</Link>,
//       }
//     ]
//   },
//   {
//     key: '5',
//     icon: <i className="menu-icon nav-myinfo" />,
//     label: '나의정보',
//     children: [
//       {
//         key: '5-1',
//         label: <Link href="/myinfo/profile">나의정보</Link>,
//       }
//     ]
//   }
// ];

// const collapsedMenuItems: MenuItem[] = [
//   {
//     key: '0',
//     icon: <i className="menu-icon nav-map" />,
//     label: '전경도',
//     popupClassName: 'menu-popup-map',
//     children: [
//       createSubmenuTitle('전경도', '0-0'),
//       {
//         key: '0-1',
//         label: <Link href="/location/1010">이천캠퍼스</Link>,
//       },
//       {
//         key: '0-2',
//         label: <Link href="/location/1020">청주캠퍼스</Link>,
//       }
//     ]
//   },
//   {
//     key: '1',
//     icon: <i className="menu-icon nav-tracker" />,
//     label: 'Tracker 관리',
//     popupClassName: 'menu-popup-tracker',
//     children: [
//       createSubmenuTitle('Tracker 관리', '1-0'),
//       {
//         key: '1-1',
//         label: <Link href="/tracker/trackerList">Tracker 관리</Link>,
//       },
//       {
//         key: '1-2',
//         label: <Link href="/history/trackerErrorHistoryList">Tracker 장애</Link>,
//       },
//       {
//         key: '1-3',
//         label: <Link href="/history/trackerCollectionHistoryList">Tracker 데이터수집</Link>,
//       },
//       {
//         key: '1-4',
//         label: <Link href="/bleMgmt/bleFirmwareVersion">Tracker 셋팅 변경</Link>,
//       },
//       {
//         key: '1-5',
//         label: <Link href="/bleMgmt/bleFirmwareUpgrade">Tracker 전송관리</Link>,
//       },
//       {
//         key: '1-6',
//         label: <Link href="/tracker/trackerInstallList">Tracker 설치현황</Link>,
//       },
//       {
//         key: '1-7',
//         label: <Link href="/tracker/unclearAsset">Tracker 미위치 현황</Link>,
//       },
//       {
//         key: '1-8',
//         label: <Link href="/standard/storageList">사외 유휴 창고관리</Link>,
//       },
//     ]
//   },
//   {
//     key: '2',
//     icon: <i className="menu-icon nav-standardAsset" />,
//     label: '기준정보관리',
//     popupClassName: 'menu-popup-standardAsset',
//     children: [
//       createSubmenuTitle('기준정보관리', '2-0'),
//       {
//         key: '2-1',
//         label: <Link href="/assets/assetsList">MDM장비 관리</Link>,
//       },
//       {
//         key: '2-2',
//         label: <Link href="/standard/assetsConn">MDM장비 연결관리</Link>,
//       },
//       {
//         key: '2-9',
//         label: <Link href="/standard/assetPosition">모델별 부착가이드</Link>,
//       },
//       {
//         key: '2-3',
//         label: <Link href="/standard/drawing">도면관리</Link>,
//       },
//       {
//         key: '2-4',
//         label: <Link href="/standard/assetModel/assetModelList">도면항목관리</Link>,
//       },
//       {
//         key: '2-5',
//         label: <Link href="/standard/drawingConn">도면자산연결관리</Link>,
//       },
//       {
//         key: '2-6',
//         label: <Link href="/standard/bleApList">BLE AP관리</Link>,
//       },
//       {
//         key: '2-7',
//         label: <Link href="/standard/ohtList">OHT 관리</Link>,
//       },
//     ]
//   },
//   {
//     key: '3',
//     icon: <i className="menu-icon nav-bbs" />,
//     label: '게시판',
//     popupClassName: 'menu-popup-bbs',
//     children: [
//       createSubmenuTitle('게시판', '3-0'),
//       {
//         key: '3-1',
//         label: <Link href="/board/noticeList">공지사항</Link>,
//       },
//       {
//         key: '3-2',
//         label: <Link href="/board/boardList">게시판</Link>,
//       },
//       {
//         key: '3-3',
//         label: <Link href="/board/qnaList">Q&A</Link>,
//       }
//     ]
//   },
//   {
//     key: '4',
//     icon: <i className="menu-icon nav-system" />,
//     label: '시스템',
//     popupClassName: 'menu-popup-system',
//     children: [
//       createSubmenuTitle('시스템', '4-0'),
//       {
//         key: '4-1',
//         label: <Link href="/system/user/userList">사용자 관리</Link>,
//       },
//       {
//         key: '4-2',
//         label: <Link href="/system/menu/menuList">메뉴 관리</Link>,
//       },
//       {
//         key: '4-3',
//         label: <Link href="/system/group/groupList">그룹 관리</Link>,
//       },
//       {
//         key: '4-4',
//         label: <Link href="/system/code/codeList">코드 관리</Link>,
//       }
//     ]
//   },
//   {
//     key: '5',
//     icon: <i className="menu-icon nav-myinfo" />,
//     label: '나의정보',
//     popupClassName: 'menu-popup-myinfo',
//     children: [
//       createSubmenuTitle('나의정보', '5-0'),
//       {
//         key: '5-1',
//         label: <Link href="/myinfo/profile">나의정보</Link>,
//       }
//     ]
//   }
// ];

// const Sidebar: React.FC<SidebarProps> = ({ style }) => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { isSidebarOpen, activeMenu } = useSelector((state: RootState) => state.layout);
//   const rawPathname = usePathname();
//   const pathname = rawPathname ?? '';
//   const [openKeys, setOpenKeys] = React.useState<string[]>([]);
//   const sessionUser = useSelector((state: RootState) => state.session.user);
//   const [ expandedMenuItemList, setExpandedMenuItemList ] = useState<MenuItem[]>([]);
//   const [ collapsedMenuItemList, setCollapsedMenuItemList ] = useState<MenuItem[]>([]);
//   const [subMenuItemList, setSubMenuItemList] = useState<MenuItemData[]>([]);
  
//   interface MenuItemData {
//     UP_MENU_ID: string;
//     MENU_ID: string;
//     MENU_NAME: string;
//     MENU_URL: string;
//     ICON_URL?: React.ReactNode;
//   }

//   interface MenuItem {
//     key: string;
//     label: string | React.ReactNode;
//     icon?: React.ReactNode;
//     popupClassName?: string;
//     className?: string;
//     children?: MenuItem[];
//     style?: React.CSSProperties;
//   }

//   const createMenuItem = (item: MenuItemData, subItems: MenuItemData[], isExpandedMenu : boolean = true): MenuItem => (
//     isExpandedMenu ?
//       {
//         key: item.MENU_ID,
//         label: item.MENU_NAME,
//         icon: item.ICON_URL ? <i className={`menu-icon ${item.ICON_URL}`} /> : undefined,
//         children: subItems.map((subItem: MenuItemData) => ({
//           key: subItem.MENU_ID,
//           label: subItem.MENU_URL ? (
//             <Link href={subItem.MENU_URL}>
//               {subItem.MENU_NAME || ''}
//             </Link>
//           ) : null,
//         }))
//       } :
//       {
//         key: item.MENU_ID,
//         label: item.MENU_NAME,
//         icon: item.ICON_URL ? <i className={`menu-icon ${item.ICON_URL}`} /> : undefined,
//         popupClassName: 'menu-popup-tracker',
//         children: [
//           createSubmenuTitle(item.MENU_NAME, item.MENU_ID), 
//           ...subItems.map((subItem: MenuItemData) => (
//           {
//             key: subItem.MENU_ID,
//             label: subItem.MENU_URL ? (
//               <Link href={subItem.MENU_URL}>
//                 {subItem.MENU_NAME || ''}
//               </Link>
//             ) : null,
//           }
//         ))
//           ]
//       }
//   );
  
//   const createMyInfoMenuItem = (isExpandedMenu : boolean = true) : MenuItem => (
//     isExpandedMenu ?
//       {
//         key: '5',
//         icon: <i className="menu-icon nav-myinfo" />,
//         label: '나의정보',
//         children: [
//           {
//             key: '5-1',
//             label: <Link href="/myinfo/profile">나의정보</Link>,
//           }
//         ]
//       } :
//       {
//         key: '5',
//         icon: <i className="menu-icon nav-myinfo" />,
//         label: '나의정보',
//         popupClassName: 'menu-popup-myinfo',
//         children: [
//           createSubmenuTitle('나의정보', '5-1'),
//           {
//             key: '5-1',
//             label: <Link href="/myinfo/profile">나의정보</Link>,
//           }
//         ]
//       }
//   );

//   useEffect(() => {
//     if (!sessionUser) {
//       return;
//     }
    
//     let firstMenu = sessionUser?.firstMenu?.replaceAll('\\\"', '"');
//     let secondMenu = sessionUser?.secondMenu?.replaceAll('\\\"', '"');
//     let expandedMenuData = [];
//     let collapsedMenuData = [];
    
//     if (firstMenu && secondMenu) {
//       let firstMenuObj = JSON.parse(firstMenu);
//       let secondMenuObj = JSON.parse(secondMenu);

//       expandedMenuData = firstMenuObj.map((item: MenuItemData) => createMenuItem(item, secondMenuObj.filter((secondData: MenuItemData) => secondData.UP_MENU_ID === item.MENU_ID)));
//       // expandedMenuData.push(createMyInfoMenuItem());

//       collapsedMenuData = firstMenuObj.map((item: MenuItemData) => createMenuItem(item, secondMenuObj.filter((secondData: MenuItemData) => secondData.UP_MENU_ID === item.MENU_ID), false));
//       // collapsedMenuData.push(createMyInfoMenuItem(false));
      
//       setExpandedMenuItemList(expandedMenuData);
//       setCollapsedMenuItemList(collapsedMenuData);
//       setSubMenuItemList(secondMenuObj);
      
//       console.log("expandedMenuData", expandedMenuData);
//       console.log("collapsedMenuData", collapsedMenuData);
//       console.log("secondMenuObj", secondMenuObj.map((v : MenuItemData) => v.MENU_URL));
//     }
//   }, [sessionUser]);
  
//   // URL 패턴에 따른 메뉴 매핑
//   const getMenuKeysFromPath = (path: string): { parentKey: string; childKey?: string } | null => {
//     // console.log("찾아보자");
//     let targetUrl = '';
    
//     // URL에서 첫 번째 세그먼트 추출 (예: /tracker/trackerList -> tracker)
//     const firstSegment = path.split('/')[1];
//     const secondSegment = path.split('/')[2];

//     // ✅ trackerInstallList 예외 처리
//     if (firstSegment === 'tracker') {
//       switch (secondSegment) {
//         case 'trackerInstallList':
//           targetUrl = '/tracker/trackerInstallList';
//           break;
//         default :
//           targetUrl = '/tracker/trackerList';
//           break;
//       }
//     }

//     if (firstSegment === 'system' && secondSegment === 'code') {
//       targetUrl = '/system/code/codeList';
//     }

//     // standard 경로에 대한 예외 처리
//     if (firstSegment === 'location') {
//       targetUrl = secondSegment === '1010' ? '/location/1010' : '/location/1020';
//     }

//     // standard 경로에 대한 예외 처리
//     if (firstSegment === 'standard') {
//       switch (secondSegment) {
//         case 'assetsConn':
//           targetUrl = '/standard/assetsConn';
//           break;
//         case 'drawing':
//           targetUrl = '/standard/drawing';
//           break;
//         case 'assetModel':
//           targetUrl = '/standard/assetModel/assetModelList';
//           break;
//         case 'drawingConn':
//           targetUrl = '/standard/drawingConn';
//           break;
//         case 'bleApList':
//           targetUrl = '/standard/bleApList';
//           break;
//         case 'storageList':
//           targetUrl = '/standard/storageList';
//           break;
//         case 'ohtList':
//           targetUrl = '/standard/ohtList';
//           break;
//         case 'assetPosition':
//           targetUrl = '/standard/assetPosition';
//           break;
//         default :
//           targetUrl = '/standard/assetsConn';
//           break;
//       }
//     }

//     const targetMenuItem = subMenuItemList.find((v: any) => v.MENU_URL === targetUrl);
//     console.log("targetMenuItem", targetMenuItem);

//     return targetMenuItem ? {
//       parentKey: targetMenuItem.UP_MENU_ID,
//       childKey: targetMenuItem.MENU_ID
//     } : null;
//   };

//   const getMenuKeys = (path: string): { parentKey: string; childKey?: string } | null => {
//     const targetMenuItem = subMenuItemList.find((v: any) => v.MENU_URL === path);
    
//     return targetMenuItem ? {
//       parentKey : targetMenuItem?.UP_MENU_ID || '',
//       childKey : targetMenuItem?.MENU_ID
//     } : null;
//   }
  
//   useEffect(() => {
    
//     if (pathname && subMenuItemList.length > 0) {
//       // let menuKeys = pathToMenuKeys[pathname];
//       let menuKeys = getMenuKeys(pathname);

//       // URL 패턴 매칭으로 메뉴 키 찾기
//       if (!menuKeys) {
//         const pathMenuKeys = getMenuKeysFromPath(pathname);
//         if (pathMenuKeys) {
//           menuKeys = pathMenuKeys;
//         }
//       }

//       if (menuKeys) {
//         dispatch(setActiveMenu(menuKeys));
//       } else {
//         // 메뉴 키 조회가 안될경우 비정상 접근
//         // console.error("비정상접근>>>>>>>>>>>>>>>>>>>>>", pathname);
//         router.push(sessionUser?.firstScreen || '/');
//       }

//       // 평면도인지 확인
//       const floorReg = /^(\/location)+(\/+[-a-zA-Z0-9]+){4}$/g

//       if (floorReg.test(pathname)) {
//         // 평면도일경우 메뉴 접기
//         if (isSidebarOpen) {
//           dispatch(toggleSidebar());
//         }
//       } else {
//         // 평면도가 아닐경우 메뉴 펼치기
//         if (!isSidebarOpen) {
//           dispatch(toggleSidebar());
//         }
//         if (menuKeys) {
//           setOpenKeys([menuKeys.parentKey]);
//         }
//       }
//     }
//   }, [pathname, dispatch, expandedMenuItemList]);

//   const onOpenChange = (keys: string[]) => {
//     setOpenKeys(keys);
//   };

//   return (
//     <GlobalStyle>
//       <StyledSider
//         trigger={null}
//         collapsed={!isSidebarOpen}
//         width={210}
//         collapsedWidth={70}
//         style={style}
//       >
//         <StyledMenu
//           mode={!isSidebarOpen ? "vertical" : "inline"}
//           // items={!isSidebarOpen ? collapsedMenuItems : expandedMenuItems}
//           items={!isSidebarOpen ? collapsedMenuItemList : expandedMenuItemList}
//           selectedKeys={activeMenu.childKey ? [activeMenu.childKey] : [activeMenu.parentKey]}
//           openKeys={!isSidebarOpen ? undefined : openKeys}
//           onOpenChange={onOpenChange}
//           motion={{ motionName: '' }}
//         />
//       </StyledSider>
//     </GlobalStyle>
//   );
// };

// export default Sidebar;