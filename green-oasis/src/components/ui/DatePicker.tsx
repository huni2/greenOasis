import {
    DatePicker as AntDatePicker,
    DatePickerProps
} from 'antd';
import React from 'react';

// 기본 DatePicker 함수형 컴포넌트
const DatePicker = (props: DatePickerProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntDatePicker {...newProps} />;
};

// 정적 속성 복사
DatePicker.RangePicker = AntDatePicker.RangePicker;
DatePicker.MonthPicker = AntDatePicker.MonthPicker;
DatePicker.WeekPicker = AntDatePicker.WeekPicker;
DatePicker.YearPicker = (AntDatePicker as any).YearPicker; // 일부는 any로 우회 필요
DatePicker.QuarterPicker = (AntDatePicker as any).QuarterPicker;
DatePicker.displayName = AntDatePicker.displayName;

export default DatePicker;
