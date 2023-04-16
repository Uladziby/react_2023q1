/** @format */
import { BUTTON_COLORS, COLOR_PALETTE } from "../../constants/colors/colors";
import styled, { css } from "styled-components";

const {
  secondaryDisabled,
  primaryHover,
  disabled,
  primaryDefault,
  primaryDisabled,
  secondaryDefault,
  secondaryHover,
  basicWhite,
  defaultFill,
} = BUTTON_COLORS;

const VARIANT = {
  primary: css`
    background: ${primaryDefault};
    :hover {
      background: ${primaryHover};
    }
    :disabled {
      background: ${primaryDisabled};
      color: ${disabled};
      fill: ${disabled};
    }
  `,
  secondary: css`
    background: ${secondaryDefault};
    :hover {
      background: ${secondaryHover};
    }
    :disabled {
      background: ${secondaryDisabled};
      color: ${disabled};
      fill: ${disabled};
    }
  `,
  primaryTransparent: css`
    background-color: transparent;
    border: 1px solid ${COLOR_PALETTE.yellow700};
    border-radius: 2px;
    :hover {
      filter: drop-shadow(-2px -2px 6px rgba(202, 169, 0, 0.35))
        drop-shadow(2px 2px 6px rgba(202, 169, 0, 0.35));
    }
    :disabled {
      border: 1px solid ${COLOR_PALETTE.gray300};
      color: ${disabled};
      filter: none;
    }
  `,
};

const SIZE = {
  extraSmall: css`
    width: 48px;
    height: 48px;
  `,
  small: css`
    height: 48px;
    width: 143px;
  `,
  medium: css`
    height: 56px;
    width: 171px;
  `,
  large: css`
    height: 56px;
    width: 343px;
  `,
};

export const StyledButton = styled.button<{
  variant?: "primary" | "secondary" | "primaryTransparent";
  size?: "extraSmall" | "small" | "medium" | "large";
  isRounded?: boolean;
  isActive?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  ${({ variant }) => variant && VARIANT[variant]};
  ${({ size }) => size && SIZE[size]};
  border-radius: ${({ isRounded }) => (isRounded ? "2px" : 0)};
  fill: ${({ isActive }) => (isActive ? basicWhite : defaultFill)};
  ${({ variant }) => variant && VARIANT[variant]};
`;
