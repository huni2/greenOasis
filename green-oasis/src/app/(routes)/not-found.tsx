'use client';

import Link from 'next/link';
import { StyledNotFound } from '@/styles/styled-components/NotFound.styles';

export default function NotFound() {
  return (
    <StyledNotFound>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/">
        홈으로 돌아가기
      </Link>
    </StyledNotFound>
  );
} 