import { Input as AntInput, InputProps } from 'antd';

const Password = (props: InputProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};

    return <AntInput.Password {...newProps}/>;
}

export default Password;