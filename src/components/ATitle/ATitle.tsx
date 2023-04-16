/** @format */
import { StyledTitle } from "./ATitle.styles";
import { IATitleProps } from "./type";

export const ATitle = ({
  size,
  weight,
  lineHeight,
  children,
  color,
  marginBottom,
  className,
}: IATitleProps) => (
  <StyledTitle
    size={size}
    weight={weight}
    lineHeight={lineHeight}
    color={color}
    marginBottom={marginBottom}
    className={className}
  >
    {children}
  </StyledTitle>
);
