export interface NoticeListResponse {
    result: NoticeData[];
    resultCnt: { CNT: number }[];
}

export interface NoticeData {
    WRITER_DATE: string;
    EXPRESS_YN: string;
    NOTICE_ID: string;
    REG_DATE: string;
    VIEWS: string;
    COMMENT_YN: string;
    TITLE: string;
    REG_USER_ID: string;
    WRITER_USER_ID: string;
    WRITER_USER_NAME: string;
    REMARK: string;
    SEQ: string;
    UPD_DATE: string;
    UPD_USER_ID: string;
}

export interface NoticeListParams {
    startDate?: string;       // YYYYMMDD 형식의 시작 날짜
    endDate?: string;         // YYYYMMDD 형식의 종료 날짜
    searchType?: string;      // 검색 유형
    searchKeyword?: string;   // 검색 키워드
    currPage?: number;        // 현재 페이지
    startRow?: number;        // 시작 행
    rowCnt?: number;          // 행 개수
    expressYn?: string;
}

export interface NoticeInsertParams {
    title?: string; 
    remark?: string; 
    expressYn?: string; 
}

export interface NoticeDetail {
    WRITER_DATE?: string; 
    EXPRESS_YN?: string; 
    NOTICE_ID?: string; 
    REG_DATE?: string; 
    VIEWS?: string; 
    COMMENT_YN?: string; 
    TITLE?: string; 
    REG_USER_ID?: string; 
    WRITER_USER_ID?: string; 
    REMARK?: string; 
    SEQ?: string; 
    UPD_DATE?: string; 
    UPD_USER_ID?: string; 
}