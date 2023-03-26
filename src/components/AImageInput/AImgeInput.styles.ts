/** @format */
import styled from "styled-components";

export const StyledImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 40%;
`;

export const StyledContainer = styled.div`
	padding: 0 20px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 2%;

	& > img {
		justify-content: center;
		align-items: center;
		padding: 10px 50px;
	}
`;
