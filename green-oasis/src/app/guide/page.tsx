'use client';

import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui";
import {useRouter} from "next/navigation";

export default function GuidePage() {
    const router = useRouter();
    
    return (
        <div className="content-wrapper" 
             style={{width: '100%', height: '100%', textAlign : 'center', marginTop : 'calc(100vh - 50%)'}}
        >
            <Button onClick={() => router.push("/guide/element")} size={'large'} className={'p-5'}>
                구성요소
            </Button>
            <b className={'ml-3'}></b>
            <Button onClick={() => router.push("/guide/searchPage")} size={'large'} className={'p-5'}>
                조회 페이지 예시 (Tracker 관리)
            </Button>
            <Button onClick={() => router.push("/guide/location")} size={'large'} className={'p-5'}>
                Location 정보 사용 예
            </Button>
            <Button onClick={() => router.push("/guide/upload")} size={'large'} className={'p-5'}>
                업로드 사용 예
            </Button>
        </div>
    )
}