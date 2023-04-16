/** @format */
import { INPUT_COLORS, COLOR_PALETTE } from "../../constants/colors/colors";
import { AButton } from "../AButton/AButton";
import styled from "styled-components";

export const StyledWrapper = styled.div<{ isOptionsVisible: boolean }>`
  width: 100%;
  position: relative;

  filter: ${({ isOptionsVisible }) =>
    isOptionsVisible &&
    "drop-shadow(0px 5px 10px rgba(4, 67, 101, 0.08)) drop-shadow(0px 2px 6px rgba(130, 171, 188, 0.08))"};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 40px 12px 56px;
  border: 1px solid ${INPUT_COLORS.search};
  border-radius: 2px;
  color: ${COLOR_PALETTE.gray900};

  &:focus {
    outline: none;
    border-radius: 2px 2px 0 0;
    border-color: ${INPUT_COLORS.search};
  }
`;

export const StyledBoldSpan = styled.span`
  font-weight: 700;
  font-size: inherit;
  line-height: inherit;
`;

export const StyledSearchIcon = styled(AButton)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 19px;
  transform: translateY(-50%);

  & svg {
    fill: ${COLOR_PALETTE.gray900};
  }
`;

export const StyledClearIcon = styled(AButton)`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  & svg {
    fill: ${COLOR_PALETTE.gray900};
  }
`;
