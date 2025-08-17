'use client';

import React, { useState } from 'react';
import { uploadFile } from '@/utils/apiService';
import { UploadOutlined } from '@ant-design/icons';
import Alert from "@/components/ui/Alert";
import {Button, Upload} from '@/components/ui';
import UploadProps from "@/components/ui/UploadProps";


const FileUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (fileList.length === 0) {
      Alert.warning('경고', '업로드할 파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('mFiles', fileList[0]); // 하나만 예시로 처리
    // 추가 파라미터
    // formData.append('filePath', 'admin');
    // formData.append('fileOriName', '업로드 테스트');
    // formData.append('fileName', '도면');
    // formData.append('fileType', '도면');
    // formData.append('fileSize', '도면');
    // formData.append('fileImageSizeX', '도면');
    // formData.append('fileImageSizeY', '도면');
    // formData.append('userId', '도면');

    setUploading(true);
    try {
      const response = await uploadFile<number>('/api/file/upload', formData);

      console.log('Response:', response);

      if (response !== -1) {
        Alert.success('처리 완료', `업로드 성공! 키: ${response}`);
      } else {
        Alert.error('오류', '업로드 실패');
      }
    } catch (error) {
      console.error(error);
      Alert.error('오류', '서버 오류로 업로드 실패');
    } finally {
      setUploading(false);
      setFileList([]);
    }
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      setFileList([file]); // 하나만 업로드
      return false; // 자동 업로드 막기
    },
    onRemove: () => {
      setFileList([]);
    },
    fileList,
  };

   return (
    <div className="content-wrapper">
      <div className="sub-cont">
        <div className="p-4 border rounded shadow max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">파일 업로드</h2>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>파일 선택</Button>
          </Upload>
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            업로드
          </Button>

        </div>
      </div>
    </div>
   );
};

export default FileUpload;
