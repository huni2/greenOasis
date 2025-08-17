'use client'

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, DatePicker, Form, Input, Modal, Select, Table, ColumnsType, Space, Radio, TextArea } from "@/components/ui";
import { SearchOutlined } from '@ant-design/icons';
import { BoardData, BoardListParams, BoardListResponse, BoardDetail } from '@/types/board/board';
import { boardService } from '@/services/boardService';
import { NoticeDetail } from '@/types/board/notice';
import { noticeService } from '@/services/noticeService';
import Alert from '@/components/ui/Alert';

interface NoticeDetailClientProps {
    noticeDetail: NoticeDetail;
}

export const NoticeDetailClient: React.FC<NoticeDetailClientProps> = ({noticeDetail}) => {
    const [form] = Form.useForm();
    const router = useRouter();

    const handleDelete = () => {
        const flag = "notice";
        const noticeId = noticeDetail.NOTICE_ID;
        if (!noticeId) {
            Alert.warning('삭제 오류', '게시글 ID가 유효하지 않습니다');
            return;
        }
        Modal.confirm({
            title: '공지사항 삭제',
            content: '게시글을 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            okButtonProps: { className: 'btn btn01' },
            cancelButtonProps: { className: 'btn btn02' },
            centered: true,
            onOk: async () => {
                try {
                    await noticeService.deleteNotice(flag, noticeId)
                    Modal.success({
                        title: '공지사항 삭제 완료',
                        content: `공지사항이 삭제되었습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true,
                        onOk: () => { router.push('/board/noticeList'); }
                    });
                } catch (error) {
                    console.error('Error deleting asset model:', error);
                    Modal.error({
                        title: '공지사항 삭제 실패',
                        content: `공지사항 삭제를 실패하였습니다.`,
                        okButtonProps: { className: 'btn btn01' },
                        centered: true
                    });
                }
            },
        });
    };


    // const handleDelete = () => {
    //     const flag = "notice";
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
    //                     title: '공지사항 삭제 완료',
    //                     content: `공지사항이 삭제되었습니다.`,
    //                     okButtonProps: { className: 'btn btn01' },
    //                     centered: true,
    //                     // onOk: () => { fetchData(currentPage); }
    //                 });
    //             } catch (error) {
    //                 console.error('Error deleting asset model:', error);
    //                 Modal.error({
    //                     title: '공지사항 삭제 실패',
    //                     content: `공지사항 삭제를 실패하였습니다.`,
    //                     okButtonProps: { className: 'btn btn01' },
    //                     centered: true
    //                 });
    //             }
    //         },
    //     });
    //};

    return (
            <div className="content-wrapper">
                <div className="sub-cont" >
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">공지사항 상세</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">공지사항 상세</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <Form
                        form={form}
                    >
                    <div className="whiteBox mt-3">
                        <div className="tb-write-area">
                            <div className="tb_body">
                                    {/* <div className="right w50p">
                                        <dl>
                                            <dt><div>표출여부</div></dt>
                                            <dd>
                                                <Input readOnly value={noticeDetail.EXPRESS_YN}/>
                                            </dd>
                                        </dl> 
                                        <dl>
                                        </dl>
                                    </div> */}
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>제목</div></dt>
                                            <dd>
                                                <Input readOnly value={noticeDetail.TITLE}/>
                                                {/* <input
                                                    type="text"
                                                    name="TITLE"
                                                    value={formData.TITLE}
                                                    onChange={handleInputChange}
                                                    id="title"
                                                /> */}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성자</div></dt>
                                            <dd>
                                                <Input readOnly value={noticeDetail.WRITER_USER_ID}/>
                                                
                                                {/* <input
                                                    type="text"
                                                    name="WRITER_USER_ID"
                                                    value={formData.WRITER_USER_ID}
                                                    onChange={handleInputChange}
                                                    id="writerId"
                                                /> */}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>작성일시</div></dt>
                                            <dd>
                                                <Input readOnly value={noticeDetail.WRITER_DATE}/>
                                                {/* <input
                                                    type="text"
                                                    name="WRITER_DATE"
                                                    value={formData.WRITER_DATE}
                                                    onChange={handleInputChange}
                                                    id="writerDate"
                                                /> */}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>내용</div></dt>
                                            <dd>
                                                <TextArea readOnly value={noticeDetail.REMARK} rows={18}/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tb_bottom mt-3">
                            <Button 
                                className='btn btn02'
                                onClick={() => router.push('/board/noticeList')} 
                            >
                                목록
                            </Button>
                            <Button className='btn btn02' onClick={handleDelete} >삭제</Button>
                            <Button 
                                className='btn btn01' 
                                onClick={() => {
                                    const noticeId = noticeDetail.NOTICE_ID;
                                    router.push(`/board/${noticeId}/noticeUpdate`)
                                }}>수정</Button>
                        </div>
                    </div>
                    </Form>
                </div>
            </div>
    );
};

export default NoticeDetailClient;
