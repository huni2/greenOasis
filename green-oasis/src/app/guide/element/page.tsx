'use client'

import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  Password,
  Radio,
  RangePicker,
  Select,
  TextArea,
  Modal,
} from "@/components/ui";
import React, {useEffect, useState} from "react";
import {FileExcelOutlined, SearchOutlined} from "@ant-design/icons";
import Alert from "@/components/ui/Alert";

interface SelectOption {
  label: string;
  value: string;
}

export default function ElementPage() {
    const [selectLabel, setSelectLabel] = useState('이천');
    const [selectRadio, setSelectRadio] = useState('Y');
    const selectOptions = [
        { label : '이천', value : '1'},
        { label : '청주', value : '2'},
        { label : '서울', value : '3'},
        { label : '제주도', value : '4'},
    ]
    const selectGroupNames = ['사과', '망고', '수박'];

    const selectOptions2 = [
      { label : '사과1', value : 'apple1' },
      { label : '사과2', value : 'apple2' },
      { label : '사과3', value : 'apple3' },
      { label : '사과4', value : 'apple4' },
      { label : '사과5', value : 'apple5' },
      { label : '망고1', value : 'mango1' },
      { label : '망고2', value : 'mango2' },
      { label : '망고3', value : 'mango3' },
      { label : '망고4', value : 'mango4' },
      { label : '망고5', value : 'mango5' },
      { label : '수박1', value : 'watermelon1' },
      { label : '수박2', value : 'watermelon2' },
      { label : '수박3', value : 'watermelon3' },
      { label : '수박4', value : 'watermelon4' },
      { label : '수박5', value : 'watermelon5' },
    ]
    
    return(
        <div className="content-wrapper">

            <div className="sub-cont">
                <div className="page-title-box">
                    <div className="left">
                        <h2 className="title">공통 컴포넌트 가이드 페이지</h2>
                    </div>
                    <div className="right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">가이드</li>
                        </ol>
                    </div>
                </div>
                
                <Card title={'공통 적용 사항'} className={'mt-4'}>
                    <h4>외부 DEV 환경에서는 AntDesign Framework Element를 기존 2025 퍼블리싱 스타일을 맞추기 위해 'signLW' className이 추가됩니다</h4>
                    <h4>하이닉스 내부 전환 시 'signLW' className은 삭제되며 SignLW Framework으로 전환 될 예정입니다</h4>
                    <h4>각 Element의 Property 사용 전 'SignLW' 문서를 확인하시고 대응 되는것만 사용 하세요</h4>
                    <h4>SignLW (비공식) : http://1.214.91.59:9080</h4>
                </Card>
                
                <Card title={'Button'} className={'mt-4'} >
                    <Button className={'mr-5'} size={'small'}> size 'small' </Button>
                    <Button className={'mr-5'}> size default </Button>
                    <Button className={'mr-5'}> size 'large' </Button>
                    <br/>
                    <br/>
                    <Button className={'mr-5'} type={'primary'}> type primary </Button>
                    <Button className={'mr-5'} icon={<SearchOutlined/>}> icon </Button>
                    <Button className={'mr-5'} icon={<FileExcelOutlined/>}> EXCEL DOWNLOAD </Button>
                    <Button icon={<FileExcelOutlined />} className="btn btn02">Excel</Button>
                    <Button className={'mr-5'} icon={<SearchOutlined/>} type={'primary'}> primary icon </Button>
                    <Button className={'mr-5'} type='primary' size={'large'}> size 'large'</Button>
                    <Button type={'link'} className={'mr-5'}> <a href={'https://naver.com'}> 네이버 </a></Button>
                    <br/>
                    <br/>
                    <h4>공통 사용 시 ['btn'] ClassName이 추가 됩니다.</h4>
                    <h4>'primary'타입 일 경우 'btn-search' ClassName이 추가 됩니다.</h4>
                    <h4>'link'타입 일 경우 ['btn', 'btn-search', 'signLW'] 없이 기본 class만 등록됩니다</h4>
                </Card>
                
                <Card title={'Input'} className={'mt-4'} >
                    <Input placeholder={'Placeholder Text'} className={'w200'}/>
                    <Password placeholder={'Password'} className={'w200 ml-3'}/>
                    <br/>
                    <br/>
                    <h4>Ant Design의 'Input'은 SignLW의 'TextField'로 대체 됩니다</h4>
                    <h4>'Input.Password'항목은 'Password'로 사용하시면 됩니다</h4>
                </Card>

                <Card title={'Checkbox'} className={'mt-4'} >
                    <Checkbox>Checkbox</Checkbox>
                    <Checkbox disabled={true}>Checkbox</Checkbox>
                </Card>
                
                <Card title={'Radio'} className={'mt-4'} >
                    <Radio.Group onChange={(e) => setSelectRadio(e.target.value)}>
                        <Radio value={'Y'}>사용</Radio>
                        <Radio value={'N'}>미사용</Radio>
                        <Radio value={'D'} disabled={true}>비활성화</Radio>
                    </Radio.Group>

                    <p className={'pl-2 mt-2'}> 라디오 선택 : {selectRadio}</p>
                </Card>
                
                <Card title={'TextArea'} className={'mt-4'} >
                    <TextArea rows={4} placeholder={'Text Area bla bla ~'}/>
                </Card>
                
                <Card title={'Select'} className={'mt-4'} >
                    <Select 
                        defaultValue={'1'}
                        options={selectOptions} 
                        placeholder={'Select'}
                        onChange={(value, option) => {
                            if (option && !Array.isArray(option)) {
                                console.log(value, option.label);
                                setSelectLabel(String(option.label));
                            }
                        }}
                    />
                    <b className={'ml-3'}>선택값 : {selectLabel}</b>
                  <br/>
                  
                  <Select
                    className={'w150'}
                    mode={'multiple'}
                    options={selectOptions2}
                    showSearch={true}
                    optionFilterProp={'label'}
                    onSearch={(value) => {
                      console.log(`search : ${value}`);
                    }}
                    onChange={(value, option) => {
                      console.log(`selected : ${value} ${typeof(value)}`);
                    }}                    
                    />
                </Card>
                
                <Card title={'DatePicker'} className={'mt-4'} >
                    <DatePicker></DatePicker>
                    <DatePicker picker={'week'}></DatePicker>
                    <DatePicker picker={'month'}></DatePicker>
                </Card>
                
                <Card title={'RangePicker'} className={'mt-4'} >
                    <RangePicker placeholder={['시작일', '종료일']}></RangePicker>
                </Card>
              
                <Card title={'Modal'} className={'mt-4'} >
                    <Button className={'mr3'} onClick={() => {
                      Alert.confirm('Confirm', 'Modal Content', {
                        onOk : () => {
                          console.log('Modal OK');
                        },
                        onCancel : () => {
                          console.log('Modal Cancel');
                        }
                      })
                    }}>confirm</Button>
                    <Button className={'mr3'} onClick={() => {
                      Alert.info('정보', 'Modal Content');
                    }}>info</Button>
                    <Button className={'mr3'} onClick={() => {
                      Alert.success('처리 완료', 'Modal Content');
                    }}>success</Button>
                    <Button className={'mr3'} onClick={() => {
                      Alert.warning('경고', 'Modal Content');
                    }}>warning</Button>
                    <Button className={'mr3'} onClick={() => {
                      // Alert.error('Modal Title', 'Modal Content');
                      Alert.error('오류', 'Modal Content');
                    }}>error</Button>

                  <br/><br/>
                </Card>
            </div>
        </div>
    )
}