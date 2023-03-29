/** @format */
import { StyledErrorMessage, StyledInput, StyledLabel, StyledWrapper } from "./AInput.styles";
import { AInputProps } from "./types";

export const AInput = ({
	placeholder,
	label,
	isDisabled,
	type,
	className,
	name,
	onChange,
	value,
	error,
	dataTestId,
}: AInputProps) => {
	const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		onChange({ [name]: value });
	};

	return (
		<StyledWrapper className={className}>
			<StyledLabel aria-label={name}>{label}</StyledLabel>
			<StyledInput
				data-testid={dataTestId}
				name={name}
				placeholder={placeholder}
				disabled={isDisabled}
				type={type}
				onChange={handleSelectChange}
				value={value}
			/>
			{error && <StyledErrorMessage> This field is required</StyledErrorMessage>}
		</StyledWrapper>
	);
};
