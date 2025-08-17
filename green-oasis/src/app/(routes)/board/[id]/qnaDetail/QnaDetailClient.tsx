'use client'

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, Modal, Select, Table, ColumnsType, TextArea } from "@/components/ui";
import Alert from '@/components/ui/Alert';
import { QnaData, QnaDetail, QnaListParams } from '@/types/board/qna';
import { qnaService } from '@/services/qnaService';

interface QnaDetailClientProps {
    qnaDetail: QnaDetail;
}

export const QnaDetailClient: React.FC<QnaDetailClientProps> = ({qnaDetail}) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState<QnaData[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pageSize] = useState<number>(15);
    const [currentPage, setCurrentPage] = useState(1);
    const columns: ColumnsType<QnaData> = [
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
                const level = Number(record.QNA_LEVEL || 1);
                const isReply = level > 1;
                return(
                    <Link 
                        href={`/board/${record.QNA_ID}/qnaDetail/`}
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

    const listParams = (page: number): QnaListParams => {
        return {
            startRow: (page - 1) * pageSize,
            rowCnt: pageSize,
        }
    }

    const fetchData = useCallback( async (page: number = 1) => {
            const flag = "qna";
            const qnaId = qnaDetail.QNA_ID;
            const upId = qnaDetail.UP_QNA_ID && qnaDetail.UP_QNA_ID.trim() !== ""
                ? qnaDetail.UP_QNA_ID
                : qnaDetail.QNA_ID;

            console.log("qnaId:", qnaId);
            console.log("upId:", upId);
            const params = listParams(page);
            try {
                setLoading(true);
                const response = await qnaService.getQnaDetailList(flag, qnaId, upId, params);
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
        const flag = "qna";
        const qnaId = qnaDetail.QNA_ID;
        if (!qnaId) {
            Alert.warning('삭제 오류', 'Qna ID가 유효하지 않습니다');
            return;
        }
        Modal.confirm({
            title: 'Q&A 삭제',
            content: 'Q&A를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            okButtonProps: { className: 'btn btn01' },
            cancelButtonProps: { className: 'btn btn02' },
            centered: true,
            onOk: async () => {
                try {
                    await qnaService.deleteQna(flag, qnaId)
                    Modal.success({
                        title: 'Q&A 삭제 완료',
                        content: `Q&A가 삭제되었습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true,
                        onOk: () => { router.push('/board/qnaList'); }
                    });
                } catch (error) {
                    console.error('Error deleting asset model:', error);
                    Modal.error({
                        title: 'Q&A 삭제 실패',
                        content: `Q&A 삭제를 실패하였습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true
                    });
                }
            },
        });
    };

    const handleAddReply = useCallback(() => {
        //const isReply = qnaDetail.UP_QNA_ID && qnaDetail.UP_QNA_ID.trim() !== "";
        // if (isReply) {
        //     Alert.warning('알림', (
        //         <>
        //         현재 게시글은 댓글입니다.
        //         <br/>
        //         정책상 대댓글은 허용되지 않습니다.
        //         </>
        //     ));
        //     return;
        // }

        router.push(`/board/${qnaDetail.QNA_ID}/qnaInsertReply`);
    }, [router]);
    
    const handleUpdate = useCallback(() => {
        router.push(`/board/${qnaDetail.QNA_ID}/qnaUpdate`);
    }, [router])

    return (
            <div className="content-wrapper" >
                <div className="sub-cont" >
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">Q&A 상세</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">Q&A 상세</li>
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
                                                <Input readOnly value={qnaDetail.TITLE}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성자</div></dt>
                                            <dd>
                                                <Input readOnly value={qnaDetail.WRITER_USER_ID}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성일시</div></dt>
                                            <dd>
                                                <Input readOnly value={qnaDetail.WRITER_DATE}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>내용</div></dt>
                                            <dd>
                                                <TextArea readOnly value={qnaDetail.REMARK} rows={5}/>
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
                        <Button  className="btn btn02" onClick={() => router.push('/board/qnaList')} >목록</Button>
                        <Button  className="btn btn02" onClick={handleDelete}>삭제</Button>
                        <Button  className="btn btn03" onClick={handleAddReply}>댓글</Button>
                        <Button  className="btn btn01" onClick={handleUpdate}>수정</Button>
                    </div> 
            </div>
        </div>
    );
};

export default QnaDetailClient;
