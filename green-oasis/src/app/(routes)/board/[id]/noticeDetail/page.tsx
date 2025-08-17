import { noticeService } from '@/services/noticeService';
import NoticeDetailClient from './NoticeDetailClient';

interface Props {
    params: {
        id: string;
    }
}
export default async function NoticeDetailPage({params}: Props) {
    const noticeId = params.id;
    const flag = "notice";

    try {
        const noticeDetail = await noticeService.getNoticeDetail(
            flag,
            noticeId,
        );
        return <NoticeDetailClient noticeDetail = { noticeDetail }/>
    
    } catch (error) {
        console.error("공지사항 상세 조회 실패:", error);
        return (
            <NoticeDetailClient 
                noticeDetail={{
                    TITLE: "",
                    REMARK: "",
                    WRITER_USER_ID: "",
                    WRITER_DATE:"",
                    EXPRESS_YN: "",
                    NOTICE_ID: "",
                }}
            />
        );
    }
    
}