import { MouseEvent, ReactNode } from "react";

export interface IAButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "primaryTransparent";
  isDisabled?: boolean;
  size?: "extraSmall" | "small" | "medium" | "large";
  children: string | ReactNode;
  isRounded?: boolean;
  type?: "button" | "submit" | "reset";
  link?: string;
  className?: string;
  isActive?: boolean;
  iconTitle?: string;
  dataTestId?: string;
}
