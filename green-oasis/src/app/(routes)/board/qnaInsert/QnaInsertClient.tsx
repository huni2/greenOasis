'use client'

import React from 'react';
import { Button, Input, Form, TextArea } from "@/components/ui";
import { useRouter } from 'next/navigation';
import Alert from '@/components/ui/Alert';
import { qnaService } from '@/services/qnaService';


export const QnaInsertClient: React.FC = () => {
    const router = useRouter();
    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            const insertData = {
                title: values.title,
                remark: values.remark,
            };
            const flag = "qna";
            const result = await qnaService.insertQna(flag, insertData);
            if (result > 0) {
                Alert.success('저장 성공','저장 되었습니다.')
                router.refresh();
                router.back();
            } else {
                Alert.error('저장 실패','저장 실패하였습니다.')
            }
        } catch (error) {
            console.error("QnadInsertClient Error:", error);
            throw error;
        }
    }

    return (
            <div className="content-wrapper" >
                <div className="sub-cont">
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">Q&A 등록</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">Q&A 등록</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    
                    <div className="whiteBox mt-3">
                        <Form
                        form={form}
                        >
                        <div className="tb-write-area">
                            <div className="tb_body">
                                <div className="d-flex">
                                    <div className="left w50p">
                                        <dl>
                                            <dt><div>제목</div></dt>
                                            <dd>
                                                <Form.Item 
                                                    name="title" 
                                                    rules={[
                                                        { required: true, message: '제목을 입력하세요.' },
                                                    ]}
                                                    noStyle>
                                                    <Input placeholder="제목을 입력하세요"/>
                                                </Form.Item>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="right w50p">
                                        <dl>
                                            <dt><div></div></dt>
                                            <dd>
                                                <div className='td_height'/>
                                            </dd>
                                        </dl>
                                    </div>
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
                                                    <TextArea rows={18} placeholder='내용을 입력하세요'/>
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
                                onClick={() => router.push('/board/qnaList')} 
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

export default QnaInsertClient;
