import React, {FC, useEffect} from "react";
import styles from "../modal/modal.module.css";
import clsx from "clsx";
import {createPortal} from "react-dom";
import { ModalOverlay } from '../modalOverlay/modalOverlay'
import CloseIcon from '../../assets/icons/close-icon.svg'

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
        <div className={clsx(styles.modal, 'pt-10 pr-10 pl-10 pb-15')}>
          <div className={styles.children_container}>{children}</div>
          <div className={styles.closeIcon} data-cy="close-modal" onClick={closeModal}>
            <img src={CloseIcon} alt="крестик для закрытия"/>
          </div>
        </div>
        <ModalOverlay/>
      </>
    ),
    modalElement
  )
}