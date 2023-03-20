import { StyledButton } from './AButton.styles';
import { IAButtonProps } from './type';

export const AButton = ({
  onClick,
  children,
  variant,
  isDisabled,
  size,
  isActive,
  link,
  isRounded,
  iconTitle,
  type = 'button',
  className,
  dataTestId,
}: IAButtonProps) => (
  <StyledButton
    as={link ? 'a' : 'button'}
    onClick={onClick}
    title={iconTitle}
    data-testid={dataTestId}
    variant={variant}
    href={link}
    disabled={isDisabled}
    size={size}
    isRounded={isRounded}
    type={type}
    className={className}
    isActive={isActive}
  >
    {children}
  </StyledButton>
);
