import { boardService } from '@/services/boardService';
import { BoardListParams } from '@/types/board/board';
import { BoardListClient } from './BoardListClient';

export default async function BoardListPage() {
    const flag = 'board';
    const initialParams: BoardListParams = {
        startDate: '',
        endDate: '',
        searchType: '',
        searchKeyword: '',
        currPage: 1,
        startRow: 0,
        rowCnt: 15,
    };

    const response = await boardService.getBoardList(flag, initialParams);

    return (
        <BoardListClient 
            initialData={{
                result: response.result,
                resultCnt: response.resultCnt?.[0]?.CNT || 0, 
            }}
            initialParms={initialParams}
        />
    );
}
