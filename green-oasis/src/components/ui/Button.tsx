import { Button as AntButton, ButtonProps } from 'antd';

const Button = (props: ButtonProps) => {
    const DEV_CLASS = props.type === 'link' ? '' : `btn ${props.type === 'primary' ? '' : ''} signLW`;
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntButton {...newProps} />;
};

export default Button;
