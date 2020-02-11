import React from 'react';
import css from './Modal.module.css'

const Modal = ({onShowModal, closeModal, onHandleKeyPress}) => (
  <div className={css.Overlay} onClick={closeModal} onKeyPress={onHandleKeyPress}>
    <div className={css.Modal}>
      <img src={onShowModal} alt="" />
    </div>
  </div>
);

export default Modal;
