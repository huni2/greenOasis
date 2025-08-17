import { boardService } from '@/services/boardService';
import BoardDetailClient from './BoardDetailClient';

interface Props {
    params: {
        id: string;
    }
}
export default async function BoardDetailPage({params}: Props) {
    const boardId = params.id;
    const flag = "board";

    try {
        const boardDetail = await boardService.getBoardDetail(
            flag,
            boardId,
        );
        return <BoardDetailClient boardDetail = { boardDetail }/>
    } catch (error) {
        console.error("공지사항 상세 조회 실패:", error);
        return (
            <BoardDetailClient 
                boardDetail={{
                    BOARD_ID: "",
                    TITLE: "",
                    WRITER_USER_ID: "",
                    WRITER_USER_NAME: "",
                    WRITER_DATE: "",
                    REMARK: "",
                    NOTICE_ID: "",
                    UP_BOARD_ID: "",
                    COMMENT_YN: "",
                    SEQ: "",
                    VIEWS: "",
                    REG_USER_ID: "",
                    REG_DATE: "",
                    UPD_USER_ID: "",
                    UPD_DATE: "",
                }}
            />
        );
    }
}