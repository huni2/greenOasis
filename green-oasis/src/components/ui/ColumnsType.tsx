import type {AnyObject} from "antd/es/_util/type";
import {ColumnType} from "antd/es/table/interface";

export interface ColumnGroupType<RecordType = AnyObject> extends Omit<ColumnType<RecordType>, 'dataIndex'> {
    children: ColumnsType<RecordType>;
}
export type ColumnsType<RecordType = AnyObject> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];