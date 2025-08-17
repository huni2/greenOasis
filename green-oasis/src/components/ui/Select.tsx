import { Select as AntSelect, SelectProps } from 'antd';

// 함수형 Select 컴포넌트 정의
const Select = <T extends unknown>(props: SelectProps<T>) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntSelect {...newProps} />;
};

// 정적 속성 복사
Select.Option = AntSelect.Option;

export default Select;