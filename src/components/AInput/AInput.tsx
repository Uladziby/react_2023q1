/** @format */
import { StyledInput, StyledLabel, StyledWrapper } from "./AInput.styles";
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
}: AInputProps) => {
	return (
		<StyledWrapper className={className}>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput
				name={name}
				placeholder={placeholder}
				disabled={isDisabled}
				type={type}
				onChange={onChange}
				value={value}
			/>
		</StyledWrapper>
	);
};
