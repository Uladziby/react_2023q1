/** @format */
import { COLOR_PALETTE, INPUT_COLORS } from '../../constants/colors/colors';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 343px;
  color: ${COLOR_PALETTE.gray900};
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border: 1px solid ${COLOR_PALETTE.gray900};
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 12px;
  fill: ${COLOR_PALETTE.error};
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  text-align: left;
  color: ${INPUT_COLORS.default};
  font-size: 14px;
  margin-bottom: 5px;
`;
export const StyledErrorMessage = styled.div`
  text-align: start;
  font-size: 12px;
  color: ${COLOR_PALETTE.error};
`;
