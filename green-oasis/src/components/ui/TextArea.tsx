import { Input as AntInput } from "antd";
import type { TextAreaProps } from "antd/es/input";


const TextArea = (props: TextAreaProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};

    return <AntInput.TextArea {...newProps}/>;
}

export default TextArea;