/** @format */
import { COLOR_PALETTE } from "../../../constants/colors/colors";
import styled from "styled-components";

export const StyledLine = styled.div``;

export const StyledRow = styled.li<{ index: number }>`
	display: flex;
	padding: 20px 24px;
	gap: 16px;
	justify-content: flex-start;
	border: 2px solid ${COLOR_PALETTE.lighten50};
	background-color: ${({ index }) =>
		index % 2 === 0 ? COLOR_PALETTE.lighten50 : COLOR_PALETTE.lighten60};

	:hover {
		border: 2px solid ${COLOR_PALETTE.base};
	}
`;

export const StyledList = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding: 0;
	background-color: ${COLOR_PALETTE.lighten50};
`;

export const StyledImg = styled.img`
	height: 100%;
	padding: 5px 30%;
`;
