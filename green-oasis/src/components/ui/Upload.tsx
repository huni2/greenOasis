import { Upload as AntUpload, UploadProps } from 'antd';

const Upload = <T extends object> (props: UploadProps<T>) => {
    return <AntUpload {...props} />;
};

export default Upload;
