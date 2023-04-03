/** @format */
import { AButton } from "./../../components/AButton/AButton";
import { AInput } from "./../../components/AInput/AInput";
import { COLOR_PALETTE } from "./../../constants/colors/colors";
import styled from "styled-components";

export const StyledContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	max-width: 600px;
	min-width: 500px;
	padding: 0 68px;
`;
export const StyledCardContainer = styled.div`
	display: flex;
`;

export const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${COLOR_PALETTE.lighten100};
	background-color: ${COLOR_PALETTE.lighten40};
`;

export const StyledButton = styled(AButton)`
	justify-content: center;
	background-color: ${COLOR_PALETTE.lighten100};
	padding: 20px;
	margin: 0 20px;
	border-radius: 16px;

	&:hover {
		color: ${COLOR_PALETTE.lighten40};
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding-bottom: 40px;
	width: 100%;
	padding: 20px 0;
	background-color: ${COLOR_PALETTE.lighten60};
`;

export const StyledBlock = styled.div`
	display: flex;
	gap: 10px;
`;

export const StyledAInput = styled(AInput)`
	flex: 1;
`;
export const StyledDateAInput = styled(AInput)`
	flex: 1;
	& > input {
		width: 200px;
		cursor: pointer;
	}
	cursor: pointer;
`;
