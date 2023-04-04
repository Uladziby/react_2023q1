/** @format */
import { StyledErrorMessage } from "../AInput/AInput.styles";
import { StyledContainer } from "./ARadioGroup.styles";
import { RadioGroupProps } from "./type";
import { useController } from "react-hook-form";

export const ARadioGroup = ({ name, options }: RadioGroupProps) => {
	const {
		field,
		fieldState: { error },
		formState: { isValid, isDirty },
	} = useController({ name, shouldUnregister: true });

	return (
		<StyledContainer>
			{options.map((option) => (
				<label key={option.label}>
					<input
						{...field}
						checked={field.value === option.value}
						aria-labelledby={name}
						type="radio"
						value={option.value}
					/>
					{option.label}
				</label>
			))}
			{!isValid && isDirty && <StyledErrorMessage> {error?.type}</StyledErrorMessage>}
		</StyledContainer>
	);
};
