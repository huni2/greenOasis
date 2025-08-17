import { Table as AntTable, TableProps } from 'antd';

const Table = <T extends object>({pagination, ...props}: TableProps<T>) => {
    const DEV_CLASS = props.className === 'subSectionTable' ? '' : 'tableSignLW';
    if (pagination) {
      pagination = {...pagination, position: ['bottomCenter'], showSizeChanger: false };
    }
    const newProps = {...props, className : props.className ? `${props.className} ${DEV_CLASS}` : DEV_CLASS};
    return ( 
        <AntTable
                pagination={pagination}
                loading={false}
                {...newProps} 
        />
    )
};

export default Table;
