import {Tree as AntTree, TreeProps} from 'antd';

const Tree = <T extends object> (props : TreeProps<T>) => {
  return <AntTree {...props} />
}

export default Tree;