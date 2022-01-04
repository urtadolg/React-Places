import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./Modal.module.scss";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div className={`${styles.modal_container} ${props.className}`}>
      <header>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`${styles.content} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${styles.footer_container} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onClose} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
