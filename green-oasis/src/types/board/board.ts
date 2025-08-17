export interface BoardListResponse {
    result: BoardData[];
    resultCnt: { CNT: number }[];
}

export interface BoardData {
    BOARD_ID: string;
    TITLE: string;
    REMARK: string;
    UP_BOARD_ID: string;
    COMMENT_YN: 'Y' | 'N'; // 라디오 버튼으로 Y 또는 N만 선택 가능
    EXPRESS_YN: 'Y' | 'N'; // 라디오 버튼으로 Y 또는 N만 선택 가능
    SEQ: number;
    VIEWS: number;
    WRITER_USER_ID: string;
    WRITER_USER_NAME: string;
    WRITER_DATE: string;
    REG_USER_ID: string;
    REG_DATE: string;
    UPD_USER_ID: string;
    UPD_DATE: string;
    BOARD_LEVEL: string;
    PATH_SEQ: string;
    visible: boolean;
}

export interface BoardListParams {
    startDate?: string;       // YYYYMMDD 형식의 시작 날짜
    endDate?: string;         // YYYYMMDD 형식의 종료 날짜
    searchType?: string;      // 검색 유형
    searchKeyword?: string;   // 검색 키워드
    currPage?: number;        // 현재 페이지
    startRow?: number;        // 시작 행
    rowCnt?: number;          // 행 개수
}

export interface BoardDetail {
    BOARD_ID: string;
    TITLE: string;
    WRITER_USER_ID: string;
    WRITER_USER_NAME: string;
    WRITER_DATE: string;
    REMARK: string;
    NOTICE_ID?: string;
    UP_BOARD_ID: string;
    COMMENT_YN: string;
    SEQ: string;
    VIEWS: string;
    REG_USER_ID: string;
    REG_DATE: string;
    UPD_USER_ID: string;
    UPD_DATE: string;
}

export interface BoardInsertParams {
    title?: string; 
    remark?: string; 
}


// export interface BoardDetailClientProps {
//     initialData: {
//         BOARD_ID: string;
//         BOARD_TYP: string;
//         TITLE: string;
//         REMARK: string;
//         UP_BOARD_ID: string;
//         COMMENT_YN: 'Y' | 'N'; // 라디오 버튼으로 Y 또는 N만 선택 가능
//         EXPRESS_YN: 'Y' | 'N'; // 라디오 버튼으로 Y 또는 N만 선택 가능
//         SEQ: number;
//         VIEWS: number;
//         REG_USER_ID: string;
//         REG_DT: string;
//         UPD_USER_ID: string;
//         UPD_DT: string;
//         VISIBLE: boolean;
//     };
// }