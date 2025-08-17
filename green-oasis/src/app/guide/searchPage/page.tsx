'use client';

import {Button, Form, Table, ColumnsType} from "@/components/ui";
import SearchContainer from "@/container/search/SearchContainer";
import React, {useCallback, useState} from "react";
import {SearchField} from "@/types/search";
import {SearchOutlined} from "@ant-design/icons";
import {TrackerData, TrackerListParams} from "@/types/tracker";
import {trackerService} from "@/services/trackerService";
import Alert from "@/components/ui/Alert";

export default function SearchPage() {
    const SearchFields: SearchField[] = [
        {
            name: 'status',
            label: '상태',
            type: 'select',
            options: [
                { label: '선택', value: '' },
                { label: '운영', value: 'ACTIVE' },
                { label: '이동', value: 'MOVE' },
                { label: '기타', value: 'ERRO' },
                { label: '낙하', value: 'FALL' },
                { label: '응답없음', value: 'NORESPONSE' }
            ],
            initialValue: '',
            area: 'search',
            order: 1
        },
        {
            name: 'trackerType',
            label: '트래커 종류',
            type: 'select',
            options: [
                { label: '선택', value: '' },
                { label: '마스터', value: 'M' },
                { label: '슬레이브', value: 'S' }
            ],
            initialValue: '',
            area: 'search',
            order: 2
        },
        {
            name: 'manager',
            label: '담당자',
            type: 'input',
            placeholder: '담당자명을 입력하세요',
            area: 'search',
            order: 3
        },
        {
            name: 'trackerId',
            label: '트래커 ID',
            type: 'input',
            placeholder: '트래커 ID를 입력하세요',
            area: 'search',
            order: 4
        },
        {
            name: 'trackerName',
            label: '트래커명',
            type: 'input',
            placeholder: '트래커명을 입력하세요',
            area: 'search',
            order: 5
        },
        {
            name: 'macAddress',
            label: 'MAC',
            type: 'input',
            placeholder: 'MAC을 입력하세요',
            area: 'search',
            order: 6
        },
        {
            name: 'trackerYn',
            label: 'MDM장비 연결여부',
            type: 'select',
            options: [
                { label: '전체', value: '' },
                { label: '연결', value: 'Y' },
                { label: '미연결', value: 'N' }
            ],
            initialValue: '',
            area: 'search',
            order: 7,
            spanSize: 5 // 항목 사이즈 (총 24 cols)
        },
        {
            name: 'dateRange',
            label: '기간',
            type: 'dateRange',
            area: 'search',
            order: 8,
            spanSize : 12 // 항목 사이즈
        },
        {
            name: 'search',
            label: '조회',
            type: 'button',
            icon: <SearchOutlined />,
            area: 'button',
            order: 9
        }
    ];

    const columns: ColumnsType<TrackerData> = [
        {
            title: '번호',
            dataIndex: 'ROWNUM',
            key: 'ROWNUM',
            align: 'center'
        },
        {
            title: '상태',
            dataIndex: 'STATUS_NAME',
            key: 'STATUS_NAME',
            align: 'center',
            // render: (text: string) => {
            //   const color = text === '준비' ? 'green' : 
            //                text === '미사용' ? 'blue' : 
            //                text === '폐기' ? 'red' : 'orange';
            //   return <Tag color={color}>{text}</Tag>;
            // }
        },
        {
            title: '상위 Tracker ID',
            dataIndex: 'UPPER_TRACKER_ID',
            key: 'UPPER_TRACKER_ID',
            align: 'center'
        },
        {
            title: 'Tracker ID',
            dataIndex: 'TRACKER_ID',
            key: 'TRACKER_ID',
            align: 'center',
            render: (text: string) => (
                <Button
                    type="link"
                    href={`/tracker/trackerDetail/${text}`}
                    // style={{ color: '#5c51d6', textDecoration: 'none' }}
                >
                    {text}
                </Button>
            )
        },
        {
            title: 'Tracker 명',
            dataIndex: 'TRACKER_NAME',
            key: 'TRACKER_NAME',
            align: 'center'
        },
        {
            title: 'Tracker 종류',
            dataIndex: 'TRACKER_TYPE_NAME',
            key: 'TRACKER_TYPE_NAME',
            align: 'center'
        },
        {
            title: 'Mac',
            dataIndex: 'MAC_ADDRESS',
            key: 'MAC_ADDRESS',
            align: 'center'
        },
        {
            title: '배터리용량',
            dataIndex: 'BATTERY_CAPA',
            key: 'BATTERY_CAPA',
            align: 'center'
        },
        {
            title: '연결마스터자산',
            dataIndex: 'EQP_MST_ID',
            key: 'EQP_MST_ID',
            align: 'center'
        },
        {
            title: '연결자산',
            dataIndex: 'EQP_ID',
            key: 'EQP_ID',
            align: 'center'
        },
        {
            title: '자산모델',
            dataIndex: 'EQP_MODEL_NM',
            key: 'EQP_MODEL_NM',
            align: 'center'
        },
        {
            title: '위치',
            dataIndex: 'TRACKER_LOCATION',
            key: 'TRACKER_LOCATION',
            align: 'center'
        },
        {
            title: '측위위치',
            dataIndex: 'BATTERY_CAPA',
            key: 'BATTERY_CAPA',
            align: 'center'
        },
        {
            title: 'WIFI전송주기(분)',
            dataIndex: 'WIFI_TX_INTERVAL',
            key: 'SERIAL_NO',
            align: 'center'
        },
        {
            title: 'BLE전송주기(분)',
            dataIndex: 'BLE_TX_INTERVAL',
            key: 'SERIAL_NO',
            align: 'center'
        },
        {
            title: '최초설치일',
            dataIndex: 'FIRST_INSTALL_DATE',
            key: 'MGMT_USER_ID',
            align: 'center'
        },
        {
            title: '자산연결일',
            dataIndex: 'CONN_DT',
            key: 'CONN_DT',
            align: 'center' as const,
            render: (text: string, record: TrackerData) => (
                <Button
                    type="link"
                    onClick={() => console.log(record.TRACKER_ID, record.TRACKER_NAME)}
                    // style={{ color: '#5c51d6', textDecoration: 'none' }}
                >
                    {text}
                </Button>
            )
        }
    ];

    const [searchForm] = Form.useForm();
    const [tableData, setTableData] = useState<TrackerData[]>([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 15,
        total: 0
    });


    const fetchData = useCallback(async (params: TrackerListParams) => {
        try {
            setLoading(true);
            const response = await trackerService.getTrackerList(params);

            // API 조회 실패
            if (!response) {
                console.error('No response from API');
                throw new Error('데이터를 가져오는데 실패했습니다.');
            }

            // 결과 목록 여부
            if (response.result) {
                /***************
                 * 결과가 있을경우
                 **************/
                setTableData(response.result);

                if (response.paging && response.paging.length > 0) {
                    const total = response.paging[0].TOTAL;
                    setPagination(prev => ({ ...prev, total }));
                }
            } else {
                /***************
                 * 결과가 없을경우
                 **************/
                setTableData([]);
                Alert.error('오류', '데이터 형식이 올바르지 않습니다.');
            }
        } catch (error) {
            setTableData([]);
            Alert.error('오류', '데이터 조회 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }, []);

    const handleTableChange = useCallback((newPagination: any, filters : any, sorter : any) => {
        setPagination(newPagination);
        const values = searchForm.getFieldsValue();
        const searchParams: TrackerListParams = {
            stDate: values.dateRange?.[0]?.format('YYYYMMDD') || "",
            endDate: values.dateRange?.[1]?.format('YYYYMMDD') || "",
            excelDown: 0,
            startRow: (newPagination.current - 1) * newPagination.pageSize,
            rowCnt: newPagination.pageSize,
            selectStatus: values.status || "",
            selectMgmtStatus: "OUTPUT",
            selectType: values.trackerType || "",
            trackerType: values.trackerType || "",
            inpMgmt: values.manager || "",
            inpTrackerId: values.trackerId || "",
            inpTrackerName: values.trackerName || "",
            inpMac: values.serialNo || "",
            selectTrackerYn: values.selectTrackerYn || "",
        };

        console.log('Table change params:', searchParams);
        fetchData(searchParams);
    }, [fetchData, searchForm]);

    const handleSearch = useCallback((values: any) => {
        console.log('Search form values:', values);
        const searchParams: TrackerListParams = {
            stDate: values.dateRange?.[0]?.format('YYYYMMDD') || "",
            endDate: values.dateRange?.[1]?.format('YYYYMMDD') || "",
            excelDown: 0,
            startRow: 0,
            rowCnt: pagination.pageSize,
            selectStatus: values.status || "",
            selectMgmtStatus: "OUTPUT",
            selectType: "",
            trackerType: values.trackerType || "",
            inpMgmt: values.manager || "",
            inpTrackerId: values.trackerId || "",
            inpTrackerName: values.trackerName || "",
            inpMac: values.serialNo || "",
            selectTrackerYn: values.selectTrackerYn || "",
        };
        console.log('Search params:', searchParams);

        setPagination(prev => ({ ...prev, current: 1 }));
        fetchData(searchParams);
    }, [fetchData, pagination.pageSize]);

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

                <SearchContainer
                    // initialValues={initialParams}
                    onSearch={handleSearch}
                    searchFields={SearchFields}
                />

                <p className="total">Total <em>{pagination.total}</em></p>

                <Table
                    columns={columns}
                    dataSource={tableData}
                    loading={loading}
                    size="small"
                    pagination={pagination}
                    // scroll={{ y: 'calc(100vh - 350px)' }}
                    className="compact-table"
                    onChange={handleTableChange}
                    rowKey={(row) => row.ROWNUM}
                >
                </Table>
            </div>
        </div>
    )
}