import ReactDOM from 'react-dom';
import { FC, ReactNode } from 'react';

import './modal.scss';

type ModalProps = {
  children: ReactNode
  isVisible: boolean
}

export const Modal: FC<ModalProps> = ({ isVisible, children }) => {
  if (!isVisible) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>,
    modalRoot
  );
};