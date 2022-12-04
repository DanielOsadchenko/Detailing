import { Backdrop, Container } from "./Modal.styled"
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector('#modalRoot');
export const Modal =({ onClose, children }) => {

  const hadleKeyDown = e => {
    if (e.code === 'Escape') {
        onClose()
      }
  }
  
  useEffect(() => {
    window.addEventListener("keydown", hadleKeyDown);

    return () => {
      window.removeEventListener("keydown", hadleKeyDown);
    };
  });
  

  

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  };

  return createPortal(<Backdrop onClick={handleBackdropClick}>
    <Container>{children}</Container>
  </Backdrop>, modalRoot);
  }



