import { Input as AntInput, InputProps } from 'antd';

const Input = (props: InputProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntInput {...newProps} />;
};

export default AntInput;
