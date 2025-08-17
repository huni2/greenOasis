import Modal from "@/components/ui/Modal";

const Alert = {
  info : (title: string, content: React.ReactNode, okText? : string) => {
    Modal.info({
      title: title,
      content: content,
      okText: okText || '확인',
      centered: true,
      okButtonProps: {className: 'btn btn01'},
    });
  },
  success : (title: string, content: React.ReactNode, okText? : string) => {
    Modal.success({
      title: title,
      content: content,
      okText: okText || '확인',
      centered: true,
      okButtonProps: {className: 'btn btn01'},
    });
  },
  warning : (title: string, content: React.ReactNode, okText? : string, cancelText? : string) => {
    Modal.warning({
      title: title,
      content: content,
      okText: okText || '확인',
      cancelText: cancelText || '취소',
      centered: true,
      okButtonProps: {className: 'btn btn01'},
      cancelButtonProps: {className: 'btn btn02'}
    });
  },
  error : (title: string, content: React.ReactNode, okText? : string, cancelText? : string) => {
    Modal.error({
      title: title,
      content: content,
      okText: okText || '확인',
      cancelText: cancelText || '취소',
      centered: true,
      okButtonProps: {className: 'btn btn01'},
      cancelButtonProps: {className: 'btn btn02'}
    });
  },
  confirm : (title : string, content : React.ReactNode, props?: {
    okText?: string;
    cancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
  }) => {
    Modal.confirm({
      title: title,
      content: content,
      okText: props?.okText || '확인',
      cancelText: props?.cancelText || '취소',
      centered: true,
      okButtonProps: {className: 'btn btn01'},
      cancelButtonProps: {className: 'btn btn02'},
      onOk : props?.onOk,
      onCancel : props?.onCancel
    });
  }
}

export default Alert;