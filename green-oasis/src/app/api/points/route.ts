import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 100;
  
  // 예시 데이터 생성 (실제로는 DB나 다른 소스에서 가져올 것)
  const points = Array.from({ length: limit }).map((_, index) => ({
    id: (page - 1) * limit + index,
    x: Math.random() * 1160,  // panorama4.png의 width 기준
    y: Math.random() * 438,   // panorama4.png의 height 기준
    type: Math.random() > 0.5 ? 'red' : 'blue',
  }));

  return NextResponse.json(points);
} 