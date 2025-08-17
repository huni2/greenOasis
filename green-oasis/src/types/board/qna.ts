export interface QnaListResponse {
    result: QnaData[];
    resultCnt: { CNT: number }[];
}

export interface QnaData {
    QNA_ID: string;
    TITLE: string;
    REMARK: string;
    UP_QNA_ID: string;
    COMMENT_YN: string;
    EXPRESS_YN: string;
    SEQ: number;
    VIEWS: number;
    WRITER_USER_ID: string;
    WRITER_USER_NAME: string;
    WRITER_DATE: string;
    REG_USER_ID: string;
    REG_DATE: string;
    UPD_USER_ID: string;
    UPD_DATE: string;
    QNA_LEVEL: string;
    PATH_SEQ: string;
    visible: boolean;
}

export interface QnaListParams {
    startDate?: string;       // YYYYMMDD 형식의 시작 날짜
    endDate?: string;         // YYYYMMDD 형식의 종료 날짜
    searchType?: string;      // 검색 유형
    searchKeyword?: string;   // 검색 키워드
    currPage?: number;        // 현재 페이지
    startRow?: number;        // 시작 행
    rowCnt?: number;          // 행 개수
}

export interface QnaDetail {
    QNA_ID: string;
    TITLE: string;
    WRITER_USER_ID: string;
    WRITER_USER_NAME: string;
    WRITER_DATE: string;
    REMARK: string;
    NOTICE_ID?: string;
    UP_QNA_ID: string;
    COMMENT_YN: string;
    SEQ: string;
    VIEWS: string;
    REG_USER_ID: string;
    REG_DATE: string;
    UPD_USER_ID: string;
    UPD_DATE: string;
}

export interface QnaInsertParams {
    title?: string; 
    remark?: string; 
}