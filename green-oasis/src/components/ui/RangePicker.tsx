import {
    DatePicker as AntDatePicker,
    TimeRangePickerProps as RangePickerProps
} from 'antd';
import React from 'react';

// 기본 DatePicker 함수형 컴포넌트
const RangePicker = (props: RangePickerProps) => {
    const DEV_CLASS = 'signLW';
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return <AntDatePicker.RangePicker {...newProps} />;
};

// 정적 속성 복사
RangePicker.MonthPicker = AntDatePicker.MonthPicker;
RangePicker.WeekPicker = AntDatePicker.WeekPicker;
RangePicker.YearPicker = (AntDatePicker as any).YearPicker; // 일부는 any로 우회 필요
RangePicker.QuarterPicker = (AntDatePicker as any).QuarterPicker;
RangePicker.displayName = AntDatePicker.displayName;

export default RangePicker;
