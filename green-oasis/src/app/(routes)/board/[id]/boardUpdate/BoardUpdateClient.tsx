'use client'

import React, { useCallback } from 'react';
import { Button, Input, Radio, Form, TextArea } from "@/components/ui";
import { useRouter } from 'next/navigation';
import { NoticeDetail } from '@/types/board/notice';
import { noticeService } from '@/services/noticeService';
import Alert from '@/components/ui/Alert';
import { BoardDetail } from '@/types/board/board';
import { boardService } from '@/services/boardService';

interface BoardUpdateProps {
    boardDetail: BoardDetail;
}

export const BoardUpdateClient: React.FC<BoardUpdateProps> = ({boardDetail}) => {
    const router = useRouter();
    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            const insertData = {
                title: values.title,
                remark: values.remark,
            };
            const flag = "board";
            const boardId = boardDetail.BOARD_ID;
            if (!boardId){
                Alert.error('수정 오류','공지사항 ID가 없습니다');
                return;
            }
            const result = await boardService.updateBoard(flag, boardId, insertData);
            if (result > 0) {
                Alert.success('저장 성공','저장 되었습니다.');
                router.push(`/board/${boardId}/boardDetail`);
                router.refresh();
            } else {
                Alert.error('저장 실패','저장 실패하였습니다.')
            }
        } catch (error) {
            console.error("BoardUpdateClient Error:", error);
            throw error;
        }
    };

    const handleCancle = useCallback(() => {
        router.push(`/board/${boardDetail.BOARD_ID}/boardDetail`);
    }, [router])

    return (
            <div className="content-wrapper" >
                <div className="sub-cont">
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">게시판 수정</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">게시판 수정</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    
                    <div className="whiteBox mt-3">
                        <Form
                            form={form}
                            initialValues={{ 
                                title: boardDetail.TITLE,
                                remark: boardDetail.REMARK,
                            }}
                        >
                        <div className="tb-write-area">
                            <div className="tb_body">
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>제목</div></dt>
                                            <dd>
                                                <Form.Item 
                                                    name="title" 
                                                    rules={[
                                                        { required: true, message: '제목을 입력하세요.' },
                                                    ]}
                                                    noStyle>
                                                    <Input placeholder="제목을 입력하세요" />
                                                </Form.Item>
                                            </dd>
                                        </dl>
                                    </div>
                                    {/* <div className="right w50p">
                                    </div> */}
                                </div>
                                <div className="d-flex">
                                    <div className="w100p">
                                        <dl>
                                            <dt><div>내용</div></dt>
                                            <dd>
                                                <Form.Item 
                                                    name="remark" 
                                                    rules={[
                                                        { required: true, message: '내용을 입력하세요.' },
                                                    ]}
                                                    noStyle>
                                                    <TextArea rows={18} placeholder='내용을 입력하세요' />
                                                </Form.Item>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tb_bottom mt-3">
                            <Button 
                                className='btn btn02' 
                                onClick={handleCancle}
                            >
                                취소
                            </Button>
                            <Button className='btn btn01' onClick={handleSave} >등록</Button>
                        </div>
                        </Form>
                    </div>
                </div>
            </div>
    );
};

export default BoardUpdateClient;
