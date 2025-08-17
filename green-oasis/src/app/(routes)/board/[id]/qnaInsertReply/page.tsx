import { qnaService } from "@/services/qnaService";
import QnaInsertReplyClient from "./QnaInsertReplyClient";

interface Props {
    params: {
        id: string;
    }
}
export default async function BoardInsertReplyPage({params}: Props) {
    const boardId = params.id;
    const flag = "qna";
    try {
        const boardDetail = await qnaService.getQnaDetail(
            flag,
            boardId,
        );
        return <QnaInsertReplyClient qnaDetail = { boardDetail }/>
    } catch (error) {
        console.error("게시판 상세 조회 실패:", error);
        return (
            <QnaInsertReplyClient 
                qnaDetail={{
                    QNA_ID: "",
                    TITLE: "",
                    WRITER_USER_ID: "",
                    WRITER_USER_NAME: "",
                    WRITER_DATE: "",
                    REMARK: "",
                    NOTICE_ID: "",
                    UP_QNA_ID: "",
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