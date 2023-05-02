import { useEffect } from "react";
import { BackDrop, CloseBtn, ModalBox, TitleModal } from "./Modal.styled";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { TfiClose } from "react-icons/tfi";

export const Modal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyClose);

    // body noscroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyClose);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <BackDrop onClick={handleOverlayClick}>
      <ModalBox>
        <TitleModal>Зарегистрируйтесь</TitleModal>
        <RegistrationForm />
        <CloseBtn type="button" onClick={onClose}>
          <TfiClose />
        </CloseBtn>
      </ModalBox>
    </BackDrop>
  );
};
