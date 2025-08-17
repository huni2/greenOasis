// 'use client';

// import React, {useEffect} from 'react';
// import { Layout } from '@/components/ui';
// import Sidebar from '@/components/layout/Sidebar';
// // import NavigationBar from '@/components/layout/NavigationBar';
// import Footer from '@/components/layout/Footer';
// import { Providers } from './providers';
// import {useDispatch, useSelector} from 'react-redux';
// // import { RootState } from '@/redux/store';
// import Loading from "@/components/common/Loading";
// import {toggleShowSpinner} from "@/redux/features/layout/layoutSlice";
// import {usePathname} from "next/navigation";

// const { Content } = Layout;

// const MainLayout = ({ children }: { children: React.ReactNode }) => {
//   const pathname : string | null = usePathname();
//   // const { isSidebarOpen, showSpinner } = useSelector((state: RootState) => state.layout);
//   // const sidebarWidth = isSidebarOpen ? 210 : 55;
//   const dispatch = useDispatch();

//   useEffect(() => {
    
//     const timer = setTimeout(async () => {
//       if (showSpinner) {

//         // 평면도인지 확인
//         const floorReg = /^(\/location)+(\/+[-a-zA-Z0-9]+){4}$/g

//         if (!floorReg.test(pathname?.toString() || '')) {
//           dispatch(toggleShowSpinner());
//         }
//       }
//     }, (1 * 1000));
    
//     return () => {
//       clearTimeout(timer);
//     }
//   }, []);
  
//   return (
//     <Layout>
//       <Loading></Loading>
//       <NavigationBar style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000 }} />
//       <div style={{display: "flex", flexDirection: "row"}}>
//         {/*<Sidebar style={{ position: 'fixed', top: '50px', left: 0, bottom: 0, zIndex: 999 }} />*/}
//         <Sidebar style={{top: '50px'}}/>
//         <div style={{ transition: 'margin-left 0.2s', width: `calc(100vw - ${isSidebarOpen ? '210px' : '55px'})`}}>
//           <Content>
//             {children}
//           </Content>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <Providers>
//       <MainLayout>
//         {children}
//       </MainLayout>
//     </Providers>
//   );
// } 