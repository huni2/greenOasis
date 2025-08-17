import { NoticeListClient } from './NoticeListClient';
import { noticeService } from '@/services/noticeService';
import { NoticeListParams } from '@/types/board/notice';

export default async function NoticeListPage() {
    const flag = 'notice';
    const initialParams: NoticeListParams = {
        startDate: '',
        endDate: '',
        searchType: '',
        searchKeyword: '',
        currPage: 1,
        startRow: 0,
        rowCnt: 15,
        expressYn: ''
    };

    const response = await noticeService.getNoticeList(flag, initialParams);

    return (
        <NoticeListClient 
            initialData={{
                result: response.result,
                resultCnt: response.resultCnt?.[0]?.CNT || 0, 
            }}
            initialParms={initialParams}
        />
    );
}
