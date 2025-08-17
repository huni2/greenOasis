'use client';

import { usePathname } from 'next/navigation';
import ClientLayout from './client-layout';

export default function GlobalAppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 로그인 페이지는 레이아웃 제외
  if (pathname === '/login' || pathname === '/login/sso') {
    return children;
  }

  // 나머지는 공통 레이아웃 적용
  return <ClientLayout>{children}</ClientLayout>;
}