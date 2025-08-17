import React, { useState, useEffect } from 'react';
import {Modal, Button, Radio, Input, Select, Form, Table, TablePaginationConfig} from '@/components/ui';
import { useLocationSelect } from "@/hooks/useLocationSelect";
import { trackerService } from '@/services/trackerService';
// import type { TablePaginationConfig } from 'antd/es/table';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import Alert from "@/components/ui/Alert";

interface UpperTrackerSearchModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (tracker: { id: string; name: string }) => void;
  currentTrackerId?: string;
}

interface TrackerData {
  STATUS_NAME: string;
  TRACKER_ID: string;
  TRACKER_NAME: string;
  BATTERY_CAPA: string;
  TRACKER_LOCATION: string;
  INSTALL_DATE: string;
}

export const UpperTrackerSearchModal: React.FC<UpperTrackerSearchModalProps> = ({
  open,
  onClose,
  onSelect,
  currentTrackerId
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TrackerData[]>([]);
  const [searchForm] = Form.useForm();
  const [selectedTracker, setSelectedTracker] = useState<string>('');
  // const {
  //   siteId, setSiteId, siteList,
  //   campusId, setCampusId, campusList,
  //   buildId, setBuildId, buildList,
  //   floorId, setFloorId, floorList,
  //   sectionId, setSectionId, sectionList,
  //   subSectionId, setSubSectionId, subSectionList
  // } = useLocationSelect(searchForm);
  const searchLocation = useLocationSelect(searchForm); 

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  });

  useEffect(() => {
    if (open) {
      // 초기 검색 (전체 데이터)
      handleSearch({
        area: '',
        campus: '',
        building: '',
        floor: '',
        section: '',
        subSection: '',
        trackerId: ''
      });
    }
  }, [open]);

  const columns = [
    {
      title: '선택',
      dataIndex: 'TRACKER_ID',
      render: (text: string) => (
        <Radio 
          checked={selectedTracker === text}
          onChange={() => setSelectedTracker(text)}
        />
      )
    },
    {
      title: '상태',
      dataIndex: 'STATUS_NAME',
    },
    {
      title: 'Tracker ID',
      dataIndex: 'TRACKER_ID',
    },
    {
      title: 'Tracker 명',
      dataIndex: 'TRACKER_NAME',
    },
    {
      title: '배터리',
      dataIndex: 'BATTERY_CAPA',
    },
    {
      title: '위치',
      dataIndex: 'TRACKER_LOCATION',
    },
    {
      title: '설치일',
      dataIndex: 'INSTALL_DATE',
    }
  ];

  const handleSearch = async (values: any, page = 1) => {
    try {
      setLoading(true);
      const searchParams = {
        selectArea: values.siteId  || '',
        selectCampus: values.campusId  || '',
        selectBuilding: values.buildId || '',
        selectFloor: values.floorId  || '',
        selectSection: values.sectionId  || '',
        selectSubSection: values.subSectionId || '',
        inpTrackerId: values.trackerId || '',
        startRow: (page - 1) * pagination.pageSize,
        rowCnt: pagination.pageSize,
        excelDown: 0
      };
      console.log('검색 파라미터:', searchParams);
      const response = await trackerService.searchUpperTrackers(searchParams);
      console.log('검색 결과:', response);
      if (response.result) {
        setData(response.result);

        setPagination(prev => ({
          ...prev,
          current: page,
          total: response.paging[0].TOTAL
        }));

      } else {
        setData([]);
        Alert.error('오류', '데이터 형식이 올바르지 않습니다.');
      }

    } catch (error) {
      console.error('검색 중 오류:', error);
      Alert.error('오류', '검색 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = () => {
    if (!selectedTracker) {
      Alert.warning('경고', 'Tracker ID를 선택해야합니다.');
      return;
    }

    const selectedData = data.find(item => item.TRACKER_ID === selectedTracker);
    if (selectedData) {
      console.log('선택된 Tracker 데이터:', selectedData);
      Modal.confirm({
        title: 'Tracker 연결',
        content: `[${selectedData.TRACKER_ID}] 연결을 하시겠습니까?`,
        okText: '확인',
        cancelText: '취소',
        centered: true,
        okButtonProps: {
          className: 'btn btn01' 
        },
        cancelButtonProps: {
            className: 'btn btn02'
        },
        onOk: () => {
          console.log('Tracker 선택 확인:', {
            id: selectedData.TRACKER_ID,
            name: selectedData.TRACKER_NAME
          });

          // try {
          //     await trackerService.addTracker(selectedData.TRACKER_ID);
          //     Alert.success('성공', '삭제되었습니다');
          //     fetchData(currentPage);
          // } catch (error) {
          //     console.error("삭제실패", error);
          // }

          onSelect({
            id: selectedData.TRACKER_ID,
            name: selectedData.TRACKER_NAME
          });
          onClose();
        }
      });
    }
  };

  const handleClear = () => {
        searchForm.resetFields();
        searchLocation.setSiteId('');
        searchLocation.setCampusId('');
        searchLocation.setBuildId('');
        searchLocation.setFloorId('');
        searchLocation.setSectionId('');
        searchLocation.setSubSectionId('');
        setSelectedTracker('');
    };

  return (
    <Modal
      title="상위 Tracker 검색"
      open={open}
      onCancel={onClose}
      width={1000}
      className="popup_modal"
      footer={[
        <>
          <Button className="btn btn02" onClick={onClose}>취소</Button>
          <Button type="primary" className="btn btn01" onClick={handleSelect}>저장</Button>
        </>
      ]}
      centered
    >
    <div className="popTitle lineB"/>

      <div className="popCont">
        <div className="inner">
          <div className="top-search-area center p-0 m-0">
            <div className="left">
              <dl>
                <dt>Tracker ID</dt>
                <dd>
                  <Input
                    value={currentTrackerId}
                    placeholder="현재 Tracker ID"
                    readOnly
                    />
                </dd>
              </dl>
            </div>
          </div>
          <Form form={searchForm} layout="inline" colon={false} onFinish={handleSearch}>
          <div className="top-search-area mt-3 ml-0 mr-0" >
            <div className="left">
              <dl>
                <dt>사업장</dt>
                <dd>
                  <Form.Item name="siteId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.siteId}
                      onChange={searchLocation.setSiteId}
                      placeholder="사업장 전체"
                      options={searchLocation.siteList.map(s => ({ label: s.NAME, value: s.CODE }))}
                    />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>캠퍼스</dt>
                <dd>
                  <Form.Item name="campusId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.campusId}
                      onChange={searchLocation.setCampusId}
                      placeholder="캠퍼스 전체"
                      options={searchLocation.campusList.map(s => ({ label: s.NAME, value: s.CODE }))}
                      disabled={!searchLocation.siteId}
                    />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>건물</dt>
                <dd>
                  <Form.Item name="buildId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.buildId}
                      onChange={searchLocation.setBuildId}
                      placeholder="건물 전체"
                      options={searchLocation.buildList.map(s => ({ label: s.NAME, value: s.CODE }))}
                      disabled={!searchLocation.campusId}
                    />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>Floor</dt>
                <dd>
                  <Form.Item name="floorId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.floorId}
                      onChange={searchLocation.setFloorId}
                      placeholder="층 전체"
                      options={searchLocation.floorList.map(s => ({ label: s.NAME, value: s.CODE }))}
                      disabled={!searchLocation.buildId}
                    />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>Section</dt>
                <dd>
                  <Form.Item name="sectionId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.sectionId}
                      onChange={searchLocation.setSectionId}
                      placeholder="섹션 전체"
                      options={searchLocation.sectionList.map(s => ({ label: s.NAME, value: s.CODE }))}
                      disabled={!searchLocation.floorId}
                    />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>SubSection</dt>
                <dd>
                  <Form.Item name="subSectionId" initialValue="">
                    <Select
                      className="mw120"
                      value={searchLocation.subSectionId}
                      onChange={searchLocation.setSubSectionId}
                      placeholder="서브섹션 전체"
                      options={searchLocation.subSectionList.map(s => ({ label: s.NAME, value: s.CODE }))}
                      disabled={!searchLocation.sectionId}
                  />
                  </Form.Item>
                </dd>
              </dl>
              <dl>
                <dt>Tracker ID</dt>
                <dd>
                  <Form.Item name="trackerId">
                    <Input placeholder="검색어" className="w150" />
                  </Form.Item>
                </dd>
              </dl>
            </div>

            <div className="right">
              <div className="btns-wrap">
                <Button onClick={handleClear} className='btnReset' icon={<RedoOutlined />}>초기화</Button>
                <Form.Item>
                  <Button
                    type="primary" className="btn btn-search"
                    icon={<SearchOutlined />}
                    onClick={() => {
                      const values = searchForm.getFieldsValue();
                      handleSearch(values);
                    }}
                  >
                    조회
                  </Button>
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
        </div>

        <div className="tb_top">
          <p className="total">Total <em>{pagination.total}</em></p>
        </div>
        
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          rowKey="TRACKER_ID"
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total,
          }}
          onChange={(pagination: TablePaginationConfig) => {
            const values = searchForm.getFieldsValue();
            handleSearch(values, pagination.current);
          }}
          loading={loading}
        />
        </div>

        {/*<div className="tb_bottom lineT">*/}
        {/*  <Button className="btn btn02" onClick={onClose}>*/}
        {/*      취소*/}
        {/*  </Button>*/}
        {/*  <Button className="btn btn01" onClick={handleSelect}>*/}
        {/*      저장*/}
        {/*  </Button>*/}
        {/*</div>*/}
    </Modal>
  );
}; 