import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'SK hynix MAPS',
  description: 'SK hynix MAPS',
};

import '@/styles/css/common_root.css';
import ClientLayout from './client-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // 로그인 페이지는 별도의 레이아웃을 사용
  if (pathname === '/login') {
    return children;
  }

  return (
    <html lang="ko">
      <head>
        <title>SK hynix 자산관리시스템</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className="bg-gray bg1">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
