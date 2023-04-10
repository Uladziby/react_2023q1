/** @format */
import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`
	padding: 20px;
`;

export const ProgressBarWrapper = styled.div`
	width: 100%;
	height: 20px;
	background-color: #e0e0de;
	border-radius: 10px;
`;

const animateProgressBar = keyframes`
  0% { width: 0; }
`;

export const ProgressBarInner = styled.div`
	height: 100%;
	background-color: #66999b;
	border-radius: 10px;
	animation: ${animateProgressBar} 1s ease-in-out;
`;
