import { Modal as AntModal, ModalProps } from 'antd';

const Modal = (props: ModalProps) => {
    return <AntModal {...props} transitionName={''} maskTransitionName={''} />;
};

const MODAL_TRANSITION_CONFIG = {
  transitionName: '',
  maskTransitionName: ''
} as const;

// 정적 메서드 붙이기
Modal.confirm = (props : any) => {
  return AntModal.confirm({...props, ...MODAL_TRANSITION_CONFIG});
};
Modal.info = (props : any) => {
  return AntModal.info({...props, ...MODAL_TRANSITION_CONFIG});
};
Modal.success = (props : any) => {
  return AntModal.success({...props, ...MODAL_TRANSITION_CONFIG});
};
Modal.error = (props : any) => {
  return AntModal.error({...props, ...MODAL_TRANSITION_CONFIG});
};
Modal.warning = (props : any) => {
  return AntModal.warning({...props, ...MODAL_TRANSITION_CONFIG});
};

export default Modal;