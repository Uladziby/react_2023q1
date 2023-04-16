/** @format */
import { ReactComponent as IconCross } from "../../assets/icons/cross_icon.svg";
import {
  CloseButton,
  StyledContainer,
  StyledCover,
  StyledHeader,
} from "./ModalWindow.styles";
import { ModalWindowProps } from "./type";
import { MouseEvent } from "react";
import ReactDOM from "react-dom";

export const ModalWindow = ({
  children,
  onCloseHandler,
  withBackground,
  isShowModal,
}: ModalWindowProps) => {
  const onClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) onCloseHandler?.();
  };

  const createWrapper = () => (
    <StyledContainer>
      <StyledHeader>
        <CloseButton onClick={onClose} data-testId="modalCloseButton">
          <IconCross />
        </CloseButton>
      </StyledHeader>
      {children}
    </StyledContainer>
  );

  return (
    <>
      {withBackground && isShowModal
        ? ReactDOM.createPortal(
            <StyledCover onClick={onClose}>{createWrapper()}</StyledCover>,
            document.getElementById("root") as HTMLElement
          )
        : createWrapper()}
    </>
  );
};
