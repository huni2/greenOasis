import { noticeService } from '@/services/noticeService';
import NoticeUpdateClient from './NoticeUpdateClient';

interface Props {
    params: {
        id: string;
    }
}
export default async function NoticeUpdatePage({params}: Props) {
    const noticeId = params.id;
    const flag = "notice";

    try {
        const noticeDetail = await noticeService.getNoticeDetail(
            flag,
            noticeId,
        );
        return <NoticeUpdateClient noticeDetail={noticeDetail}/>
    
    } catch (error) {
        console.error("공지사항 상세 조회 실패:", error);
        return (
            <NoticeUpdateClient 
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