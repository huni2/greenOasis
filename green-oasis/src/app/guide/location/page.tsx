'use client'

import {Button, Form, Select} from "@/components/ui";
import React, {useCallback, useEffect} from "react";
import {useLocationSelect} from "@/hooks/useLocationSelect";
import Alert from "@/components/ui/Alert";

export default function LocationPage() {
  const [searchForm] = Form.useForm();

  const {
    siteId, setSiteId, siteList,
    campusId, setCampusId, campusList,
    buildId, setBuildId, buildList,
    floorId, setFloorId, floorList,
    sectionId, setSectionId, sectionList,
    subSectionId, setSubSectionId, subSectionList
  } = useLocationSelect();
  
  const handleSearch = (values: any) => {
    console.log("values", values);
    
    Alert.info('Search', JSON.stringify(values, null, 2));
  }
  
  const watchSite = Form.useWatch('siteId', searchForm);
  const watchCampus = Form.useWatch('campusId', searchForm);
  const watchBuild = Form.useWatch('buildId', searchForm);
  const watchFloor = Form.useWatch('floorId', searchForm);
  const watchSection = Form.useWatch('sectionId', searchForm);
  
  useEffect(() => {
    searchForm.setFieldsValue({ campusId: '' });
  }, [watchSite]);
  
  useEffect(() => {
    searchForm.setFieldsValue({ buildId: '' });
  }, [watchCampus]);
  
  useEffect(() => {
    searchForm.setFieldsValue({ floorId: '' });
  }, [watchBuild]);
  
  useEffect(() => {
    searchForm.setFieldsValue({ sectionId: '' });
  }, [watchFloor]);
  
  useEffect(() => {
    searchForm.setFieldsValue({ subSectionId: '' });
  }, [watchSection]);
  
  return (
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
        
        <Form
          form={searchForm}
          onFinish={handleSearch}
        >
          <div className={'top-search-area'}>
            <div className={'left'}>
              <dl>
                <dt>사업장</dt>
                <dd>
                  <Form.Item name={'siteId'} initialValue={''}>
                    <Select
                      key={'siteId'}
                      className={'mw100'}
                      value={siteId}
                      onChange={setSiteId}
                      options={siteList.map(item => ({ label: item.NAME, value: item.CODE}))}                      
                      />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>캠퍼스</dt>
                <dd>
                  <Form.Item name={'campusId'} initialValue={''}>
                    <Select
                      className={'mw100'}
                      value={campusId}
                      onChange={setCampusId}
                      options={campusList.map(item => ({ key: item.CODE, label: item.NAME, value: item.CODE}))}
                      >
                    </Select>
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>빌딩</dt>
                <dd>
                  <Form.Item name={'buildId'} initialValue={''}>
                    <Select
                      className={'mw100'}
                      value={buildId}
                      onChange={setBuildId}
                      options={buildList.map(item => ({ label: item.NAME, value: item.CODE}))}
                      />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>층</dt>
                <dd>
                  <Form.Item name={'floorId'} initialValue={''}>
                    <Select
                      className={'mw100'}
                      value={floorId}
                      onChange={setFloorId}
                      options={floorList.map(item => ({ label: item.NAME, value: item.CODE}))}
                      />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>섹션</dt>
                <dd>
                  <Form.Item name={'sectionId'} initialValue={''}>
                    <Select
                      className={'mw100'}
                      value={sectionId}
                      onChange={setSectionId}
                      options={sectionList.map(item => ({ label: item.NAME, value: item.CODE}))}
                      />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>서브섹션</dt>
                <dd>
                  <Form.Item name={'subSectionId'} initialValue={''}>
                    <Select
                      className={'mw100'}
                      value={subSectionId}
                      onChange={setSubSectionId}
                      options={subSectionList.map(item => ({ label: item.NAME, value: item.CODE}))}
                      />
                  </Form.Item>
                </dd>
              </dl>
            </div>
            <div className={'right'}>
              <Form.Item>
                <Button
                  type={'primary'}
                  htmlType={'submit'}
                >
                  조회
                </Button>
              </Form.Item>
            </div>
          </div>
          
        </Form>

        <div className={'top-search-area'} style={{marginTop: '100px'}}>

          <div className={'left'}>
            <dl>
              <dt>사업장</dt>
              <dd className={'mw100'}>{siteId}</dd>
            </dl>
            <dl>
              <dt>캠퍼스</dt>
              <dd className={'mw100'}>{campusId}</dd>
            </dl>
            <dl>
              <dt>빌딩</dt>
              <dd className={'mw100'}>{buildId}</dd>
            </dl>
            <dl>
              <dt>층</dt>
              <dd className={'mw100'}>{floorId}</dd>
            </dl>
            <dl>
              <dt>섹션</dt>
              <dd className={'mw100'}>{sectionId}</dd>
            </dl>
            <dl>
              <dt>서브섹션</dt>
              <dd className={'mw100'}>{subSectionId}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
