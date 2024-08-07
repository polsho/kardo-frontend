import React, {FC, useEffect} from "react";
import styles from "../modal/modal.module.css";
import {createPortal} from "react-dom";
import { ModalOverlay } from '../modalOverlay/modalOverlay'
import clsx from 'clsx'

type TModalProps = {
  closeModal: () => void;
  children?: React.ReactNode;
}

const modalElement = document.getElementById('modal') as HTMLElement;

export const Modal: FC<TModalProps> = ({children, closeModal}) => {

  useEffect(() => {
    function onEsc(evt: KeyboardEvent): void {
      if (evt.code === "Escape") {
        closeModal();
      }
    }

    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc)
  }, []);

  return createPortal(
    (
      <>
        <div className={styles.modal}>
          <div className={styles.children_container}>{children}</div>
          <div className={styles.button_container}>
            <button className={clsx(styles.button_close, "text_type_secondary_main")} form="login" type="submit" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
        <ModalOverlay/>
      </>
    ),
    modalElement
  )
}