import React from 'react';
import {
  Form as AntForm,
  FormInstance,
} from 'antd';

const FormComponent = (props: Parameters<typeof AntForm>[0]) => {
  return <AntForm {...props} />;
};

// 정적 메서드 포함
const Form = Object.assign(FormComponent, {
  Item: AntForm.Item,
  List: AntForm.List,
  useForm: AntForm.useForm,
  useWatch: AntForm.useWatch,
  Provider: AntForm.Provider,
  ErrorList: AntForm.ErrorList,
});

export default Form;
