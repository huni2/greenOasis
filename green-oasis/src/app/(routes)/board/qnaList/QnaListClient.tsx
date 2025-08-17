'use client'

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, DatePicker, Form, Input, Modal, Select, Table, ColumnsType, Space, Radio } from "@/components/ui";
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { QnaData, QnaListParams } from '@/types/board/qna';
import { qnaService } from '@/services/qnaService';

export interface QnaClientProps {
    initialData: {
        result: QnaData[];
        resultCnt: number;
    }
    initialParms: QnaListParams;
}

export const QnaListClient: React.FC<QnaClientProps> = ({initialData}) => {
    const router = useRouter();
    const [noticeType, setNoticeType] = useState('전체');
    const [loading, setLoading] = useState(false);
    const [searchForm] = Form.useForm();
    const [tableData, setTableData] = useState<QnaData[]>([]);
    const [total, setTotal] = useState(0);
    const [pageSize] = useState<number>(15);;
    const [currentPage, setCurrentPage] = useState(1);
    const { RangePicker } = DatePicker;

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
        {
            title: '조회수',
            dataIndex: 'VIEWS',
            align: 'center',
        }
    ];

    const searchParams = (values: any, page: number): QnaListParams => {
        return {
            startDate: values.dateRange?.[0]?.format('YYYYMMDD') || "",
            endDate: values.dateRange?.[1]?.format('YYYYMMDD') || "",
            currPage: page,
            searchKeyword: values.searchText || '',
            startRow: (page - 1) * pageSize,
            rowCnt: pageSize,
            searchType: values.searchType === "전체" ? "" : values.searchType,
        }
    }
    const fetchData = useCallback( async (page: number = 1, searchValues?: any) => {
            const values = searchValues ?? searchForm.getFieldsValue();
            const params = searchParams(values, page);
            const flag = "qna";
            try {
                setLoading(true);
                const response = await qnaService.getQnaList(flag, params);
                if (response && response.result) {
                    setTableData(response.result);
                    setTotal(response.resultCnt[0]?.CNT ?? 0);
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
        }, [pageSize,searchForm]);

    const handleSearch = useCallback(() => {
        fetchData(1); 
    }, [fetchData]);

    const handleTableChange = useCallback((pagination: any) => {
        fetchData(pagination.current); 
    }, [fetchData]);

    const handleAddQna= useCallback(() => {
        router.push('/board/qnaInsert');
    }, [router]);

    useEffect(() => {
        fetchData(); 
    }, [noticeType]);

    const handleClear = () => {
        searchForm.resetFields();
    };

    return (
    <>
        <div className="content-wrapper">
            <div className="sub-cont" >
                <div className="page-title-box">
                    <div className="left">
                        <h2 className="title">Q&A</h2>
                    </div>
                    <div className="right">
                        <div>
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item">게시판</li>
                                <li className="breadcrumb-item active">Q&A</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <Form
                    form={searchForm}
                    onFinish={handleSearch}
                >
                    <div className="top-search-area">
                        <div className="left">
                            <dl>
                                <dt>작성일시</dt>
                                <dd>
                                    <Form.Item name="dateRange">
                                        <RangePicker />
                                    </Form.Item>
                                </dd>
                            </dl>
                            <dl>
                                <dt><div>검색어</div></dt>
                                <dd>
                                    <Form.Item name="searchType" initialValue="">
                                        <Select className='mw120'>
                                            <Select.Option value="">전체</Select.Option>
                                            <Select.Option value="title">제목</Select.Option>
                                            <Select.Option value="writer">작성자</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </dd>
                                <dd>
                                    <Form.Item name="searchText" >
                                        <Input placeholder="검색어" className='mw200' />
                                    </Form.Item>
                                </dd>
                            </dl>
                        </div>

                        <div className="right">
                                <div className='btns-wrap'>
                                    <Button className="btn btnReset" onClick={handleClear} icon={<RedoOutlined />}>초기화</Button>
                                    <Form.Item>
                                            <Button className="btn btn-search" 
                                                type="primary"
                                                htmlType="submit"
                                                icon={<SearchOutlined />}
                                            >
                                                조회
                                            </Button>
                                    </Form.Item>
                                </div>
                        </div>
                    </div>
                </Form>
            
                <section className="dataTable-Group">
                    <div className="tb_top">
                        <p className="total">Total <em>{total}</em></p>
                        <div>
                            <Button
                                onClick={handleAddQna}
                                className="btn btn02" 
                            >
                                등록
                            </Button>
                        </div>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        loading={loading}
                        pagination={{ current: currentPage, pageSize: pageSize, total: total }}
                        onChange={handleTableChange}
                        showSorterTooltip={false} 
                        size='small'
                    >
                    </Table>
                </section>
            </div>
        </div >
    </>
    );
};