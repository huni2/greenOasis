'use client'

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, Modal, Select, Table, ColumnsType, TextArea } from "@/components/ui";
import { BoardData, BoardListParams, BoardListResponse, BoardDetail } from '@/types/board/board';
import { boardService } from '@/services/boardService';
import Alert from '@/components/ui/Alert';

interface BoardDetailClientProps {
    boardDetail: BoardDetail;
}

export const BoardDetailClient: React.FC<BoardDetailClientProps> = ({boardDetail}) => {
    const [form] = Form.useForm();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState<BoardData[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pageSize] = useState<number>(15);
    const [currentPage, setCurrentPage] = useState(1);
    const columns: ColumnsType<BoardData> = [
        {
            title: 'No.',
            dataIndex: 'SEQ',
            align: 'center',
        },
        {
            title: '제목',
            dataIndex: 'TITLE',
            className: 'custom-header-align',
            render: (text: string, record: any) => {
                const level = Number(record.BOARD_LEVEL || 1);
                const isReply = level > 1;
                return(
                    <Link 
                        href={`/board/${record.BOARD_ID}/boardDetail/`}
                    >
                    <span 
                        className='custom-board-title'
                        style={{ 
                            paddingLeft: `${(level - 1) * 20}px`, 
                            display: 'inline-block',
                            color: isReply ? '#666' : '#5c51d6'
                        }}
                    >
                        {isReply ? `└ Re: ${text}` : text}
                    </span>
                    </Link>
                )
            }
        },
        {
            title: '작성자',
            dataIndex: 'REG_USER_ID',
            align: 'center',
        },
        {
            title: '작성일시',
            dataIndex: 'REG_DATE',
            align: 'center',
        },
    ];

    const listParams = (page: number): BoardListParams => {
        return {
            startRow: (page - 1) * pageSize,
            rowCnt: pageSize,
        }
    }

    const fetchData = useCallback( async (page: number = 1) => {
            const flag = "board";
            const boardId = boardDetail.BOARD_ID;
            const upId = boardDetail.UP_BOARD_ID && boardDetail.UP_BOARD_ID.trim() !== ""
                ? boardDetail.UP_BOARD_ID
                : boardDetail.BOARD_ID;

            console.log("boardId:", boardId);
            console.log("upId:", upId);
            const params = listParams(page);
            try {
                setLoading(true);
                const response = await boardService.getBoardDetailList(flag, boardId, upId, params);
                if (response && response.result) {
                    setTableData(response.result);
                    setTotal(response.resultCnt?.[0]?.CNT ?? 0)
                    setCurrentPage(page);
                } else {
                    Modal.error({
                        title: '데이터 조회 중 오류',
                        content: '데이터 조회 중 오류가 발생했습니다.',
                        okButtonProps: { className: 'btn btn01' },
                        centered: true,
                    });
                }
            } catch (error) {
                console.error('Error in fetchData:', error);
                Modal.error({
                    title: '데이터 조회 중 오류',
                    content: '데이터 조회 중 오류가 발생했습니다.',
                    okButtonProps: { className: 'btn btn01' },
                    centered: true,
                });
            } finally {
                setLoading(false);
            }
        }, [pageSize]);

    useEffect(() => {
        fetchData(1);
    }, [fetchData]);

    const handleTableChange = useCallback((pagination: any) => {
        fetchData(pagination.current); 
    }, [fetchData]);

    const handleDelete = () => {
        const flag = "board";
        const boardId = boardDetail.BOARD_ID;
        if (!boardId) {
            Alert.warning('삭제 오류', '게시글 ID가 유효하지 않습니다');
            return;
        }
        Modal.confirm({
            title: '게시글 삭제',
            content: '게시글을 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            okButtonProps: { className: 'btn btn01' },
            cancelButtonProps: { className: 'btn btn02' },
            centered: true,
            onOk: async () => {
                try {
                    await boardService.deleteBoard(flag, boardId)
                    Modal.success({
                        title: '게시글 삭제 완료',
                        content: `게시글이 삭제되었습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true,
                        onOk: () => { router.push('/board/boardList'); }
                    });
                } catch (error) {
                    console.error('Error deleting asset model:', error);
                    Modal.error({
                        title: '게시글 삭제 실패',
                        content: `게시글 삭제를 실패하였습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true
                    });
                }
            },
        });
    };

    const handleAddReply = useCallback(() => {
        const isReply = boardDetail.UP_BOARD_ID && boardDetail.UP_BOARD_ID.trim() !== "";

        if (isReply) {
            Alert.warning('알림', (
                <>
                현재 게시글은 댓글입니다.
                <br/>
                정책상 대댓글은 허용되지 않습니다.
                </>
            ));
            return;
        }

        router.push(`/board/${boardDetail.BOARD_ID}/boardInsertReply`);
    }, [router]);
    
    const handleUpdate = useCallback(() => {
        router.push(`/board/${boardDetail.BOARD_ID}/boardUpdate`);
    }, [router])


    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleExpressYNChange = (value: 'Y' | 'N') => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         EXPRESS_YN: value,
    //     }));
    // };

    // const handleUpdate = () => {
    //     const flag = "board";
    //     router.push(`/board/boardUpdate?id=${flag}`);
    // };

    // const handleReply = () => {
    //     const flag = "board";
    //     router.push(`/board/boardUpdate?id=${flag}`);
    // };

    // const handleDelete = () => {
    //     const flag = "board";
    //     Modal.confirm({
    //         title: '삭제하시겠습니까?',
    //         content: `게시글을 삭제하시겠습니까?`,
    //         okText: '삭제',
    //         cancelText: '취소',
    //         okButtonProps: { className: 'btn btn01' },
    //         cancelButtonProps: { className: 'btn btn02' },
    //         centered: true,
    //         onOk: async () => {
    //             try {
    //                 await boardService.deleteBoard(flag);
    //                 Modal.success({
    //                     title: '게시글 삭제 완료',
    //                     content: `게시글이 삭제되었습니다.`,
    //                     okButtonProps: { className: 'btn btn01' },
    //                     centered: true,
    //                     // onOk: () => { fetchData(currentPage); }
    //                 });
    //             } catch (error) {
    //                 console.error('Error deleting asset model:', error);
    //                 Modal.error({
    //                     title: '게시글 삭제 실패',
    //                     content: `게시글 삭제를 실패하였습니다.`,
    //                     okButtonProps: { className: 'btn btn01' },
    //                     centered: true
    //                 });
    //             }
    //         },
    //     });
    // };

    return (
            <div className="content-wrapper" >
                <div className="sub-cont" >
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">게시판 상세</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">게시판 상세</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="whiteBox mt-3">
                        {/* 게시판 상세 */}
                        <div className="tb-write-area">
                            <div className="tb_body">
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>제목</div></dt>
                                            <dd>
                                                <Input readOnly value={boardDetail.TITLE}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성자</div></dt>
                                            <dd>
                                                <Input readOnly value={boardDetail.WRITER_USER_ID}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성일시</div></dt>
                                            <dd>
                                                <Input readOnly value={boardDetail.WRITER_DATE}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>내용</div></dt>
                                            <dd>
                                                <TextArea readOnly value={boardDetail.REMARK} rows={5}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 연결 게시판 리스트 */}

                    <section className="dataTable-Group">
                        <div className="tb-list-area mt-3">
                            <div className="tb_list01">
                                <div className="tb_top">
                                    <h3>연결 게시판 리스트</h3>
                                </div>
                                <div className="tb_top">
                                    <p className="total">Total <em>{total}</em></p>
                                </div>
                                <div className="tb_thead">
                                    <Table
                                        size='small'
                                        columns={columns}
                                        dataSource={tableData}
                                        loading={loading}
                                        pagination={{ current: currentPage, pageSize: pageSize, total: total }}
                                        onChange={handleTableChange}
                                        showSorterTooltip={false} >
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="tb_bottom mt-3">
                        <Button  className="btn btn02" onClick={() => router.push('/board/boardList')} >목록</Button>
                        <Button  className="btn btn02" onClick={handleDelete}>삭제</Button>
                        <Button  className="btn btn03" onClick={handleAddReply}>댓글</Button>
                        <Button  className="btn btn01" onClick={handleUpdate}>수정</Button>
                    </div> 
            </div>
        </div>
    );
};

export default BoardDetailClient;
