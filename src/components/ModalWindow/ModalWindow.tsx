/** @format */
import { ReactComponent as IconBack } from "../../assets/icons/back_icon.svg";
import { ReactComponent as IconCross } from "../../assets/icons/cross_icon.svg";
import {
	BackButton,
	CloseButton,
	StyledContainer,
	StyledCover,
	StyledHeader,
	StyledText,
} from "./ModalWindow.styles";
import { ModalWindowProps } from "./type";
import { MouseEvent } from "react";
import ReactDOM from "react-dom";

export const ModalWindow = ({
	children,
	onCloseHandler,
	onBackHandler,
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
				{onBackHandler && (
					<BackButton onClick={onBackHandler} data-testid="modalBackButton">
						<IconBack />
						<StyledText>Back</StyledText>
					</BackButton>
				)}
				<CloseButton onClick={onClose} data-testid="modalCloseButton">
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
