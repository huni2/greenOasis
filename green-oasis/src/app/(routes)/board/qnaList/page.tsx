import { qnaService } from "@/services/qnaService";
import { QnaListParams } from "@/types/board/qna";
import { QnaListClient } from "./QnaListClient";

export default async function QnaListPage() {
    const flag = 'qna';
    const initialParams: QnaListParams = {
        startDate: '',
        endDate: '',
        searchType: '',
        searchKeyword: '',
        currPage: 1,
        startRow: 0,
        rowCnt: 15,
    };

    const response = await qnaService.getQnaList(flag, initialParams);

    return (
        <QnaListClient
            initialData={{
                result: response.result,
                resultCnt: response.resultCnt?.[0]?.CNT || 0, 
            }}
            initialParms={initialParams}
        />
    );
}
