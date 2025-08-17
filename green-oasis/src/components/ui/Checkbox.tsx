import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';

const Checkbox = (props: CheckboxProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntCheckbox {...newProps} />;
};

export default Checkbox;
