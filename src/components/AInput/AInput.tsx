/** @format */
import { StyledErrorMessage, StyledInput, StyledLabel, StyledWrapper } from './AInput.styles';
import { AInputProps } from './types';
import { useController } from 'react-hook-form';

export const AInput = ({ placeholder, label, type, className, name, dataTestId }: AInputProps) => {
  const {
    field,
    fieldState: { error },
    formState: { isValid, isDirty },
  } = useController({
    name,
    shouldUnregister: true,
    defaultValue: '',
    rules: { required: true },
  });

  return (
    <StyledWrapper className={className}>
      <StyledLabel aria-label={name}>{label}</StyledLabel>
      <StyledInput
        {...field}
        data-testid={dataTestId}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {!isValid && isDirty && <StyledErrorMessage> {error?.type}</StyledErrorMessage>}
    </StyledWrapper>
  );
};
