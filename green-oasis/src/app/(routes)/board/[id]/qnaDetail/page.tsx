import { qnaService } from "@/services/qnaService";
import QnaDetailClient from "./QnaDetailClient";

interface Props {
    params: {
        id: string;
    }
}

export default async function QnaDetailPage({params}: Props) {
    const qnaId = params.id;
    const flag = "qna";

    try {
        const qnaDetail = await qnaService.getQnaDetail(
            flag,
            qnaId,
        );
        return <QnaDetailClient qnaDetail = { qnaDetail }/>
    } catch (error) {
        console.error("Q&A 상세 조회 실패:", error);
        return (
            <QnaDetailClient 
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