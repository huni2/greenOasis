'use client'

import React from 'react';
import { Button, Input, Radio, Form, TextArea } from "@/components/ui";
import { useRouter } from 'next/navigation';
import { NoticeDetail } from '@/types/board/notice';
import { noticeService } from '@/services/noticeService';
import Alert from '@/components/ui/Alert';

interface NoticeUpdateProps {
    noticeDetail: NoticeDetail;
}

export const NoticeUpdateClient: React.FC<NoticeUpdateProps> = ({noticeDetail}) => {
    const router = useRouter();
    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            const insertData = {
                title: values.title,
                remark: values.remark,
                expressYn: values.expressYn,
            };
            const flag = "notice";
            const noticeId = noticeDetail.NOTICE_ID;
            if (!noticeId){
                Alert.error('수정 오류','공지사항 ID가 없습니다');
                return;
            }
            const result = await noticeService.updateNotice(flag, noticeId, insertData);
            if (result > 0) {
                Alert.success('저장 성공','저장 되었습니다.');
                router.push(`/board/${noticeId}/noticeDetail`);
                router.refresh();
            } else {
                Alert.error('저장 실패','저장 실패하였습니다.')
            }
        } catch (error) {
            console.error("NoticeUpdateClient Error:", error);
            throw error;
        }
    };


    // const handleSubmit = async (event: FormEvent) => {
    //     const flag = "notice";
    //     if (!formData.TITLE || !formData.REMARK) {
    //         Modal.error({
    //             title: '필수 항목 누락',
    //             content: '제목과 내용은 필수입니다.',
    //             okButtonProps: { className: 'btn btn01' },
    //             centered: true,
    //         });
    //         return;
    //     }

    //     try {
    //         Modal.confirm({
    //             title: '등록',
    //             content: `공지사항을 등록하시겠습니까?`,
    //             okText: '확인',
    //             cancelText: '취소',
    //             okButtonProps: { className: 'btn btn01' },
    //             cancelButtonProps: { className: 'btn btn02' },
    //             centered: true,
    //             onOk: async () => {
    //                 try {
    //                     const formDataToUpload = new FormData();

    //                     await boardService.createBoard(flag, formData);
    //                     Modal.success({
    //                         title: '공지사항 등록완료',
    //                         content: `공지사항이 등록되었습니다.`,
    //                         okButtonProps: { className: 'btn btn01' },
    //                         centered: true,
    //                         onOk: () => { router.push('/board/noticeList'); }
    //                     });
    //                 } catch (error: any) {
    //                     console.error('공지사항 등록 실패:', error);
    //                     Modal.error({
    //                         title: '공지사항 등록실패',
    //                         content: error.message || '저장 중 알 수 없는 오류가 발생했습니다.',
    //                         okText: '확인',
    //                         okButtonProps: { className: 'btn btn01' },
    //                         centered: true,
    //                     });
    //                 }
    //             }
    //         });
    //     } catch (error) {
    //         console.error('Error adding board:', error);
    //         Modal.error({
    //             title: '등록 실패',
    //             content: '공지사항 등록에 실패했습니다.',
    //             okButtonProps: { className: 'btn btn01' },
    //             centered: true,
    //         });
    //     }
    //};

    return (
            <div className="content-wrapper" >
                <div className="sub-cont">
                    <div className="page-title-box">
                        <div className="left">
                            <h2 className="title">공지사항 수정</h2>
                        </div>
                        <div className="right">
                            <div>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item">게시판</li>
                                    <li className="breadcrumb-item active">공지사항 수정</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    
                    <div className="whiteBox mt-3">
                        <Form
                            form={form}
                            initialValues={{ 
                                title: noticeDetail.TITLE,
                                remark: noticeDetail.REMARK,
                                expressYn: noticeDetail.EXPRESS_YN,
                            }}
                            //onFinish={handleSave}
                        >
                        <div className="tb-write-area">
                            <div className="tb_body">
                                <div className="d-flex">
                                    <div className="left w100p">
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
                                        <dl>
                                            <dt><div>표출여부</div></dt>
                                            <dd>
                                                <div className='td_height'>
                                                <Form.Item name="expressYn" noStyle>
                                                    <Radio.Group>
                                                        <Radio value="Y">Y</Radio>
                                                        <Radio value="N">N</Radio>
                                                    </Radio.Group>
                                                </Form.Item>
                                                </div>
                                            </dd>
                                        </dl>
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
                                                {/* <textarea
                                                    className="st_textarea"
                                                    name="REMARK"
                                                    value={formData.REMARK}
                                                    onChange={handleInputChange}
                                                    id="remark"
                                                    style={{ height: '500px' }}
                                                ></textarea> */}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tb_bottom mt-3">
                            <Button 
                                className='btn btn02' 
                                onClick={() => router.push(`/board/${noticeDetail.NOTICE_ID}/noticeDetail`)}
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

export default NoticeUpdateClient;
