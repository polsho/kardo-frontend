import React from "react";
import styles from "./modalOverlay.module.css";

type TModalOverlayProps = {
  closeModal?: () => void;
}

export const ModalOverlay = ({closeModal}: TModalOverlayProps): JSX.Element => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
    </div>
  )
}