/** @format */
import { StyledErrorMessage } from "../AInput/AInput.styles";
import { StyledContainer } from "./ARadioGroup.styles";
import { RadioGroupProps } from "./type";

export const ARadioGroup = ({ name, value, onChange, options, error }: RadioGroupProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange({ [name]: event.target.value });
	};

	return (
		<StyledContainer>
			{options.map((option) => (
				<label key={option.label}>
					<input
						aria-labelledby={name}
						type="radio"
						name={name}
						value={option.value}
						checked={value === option.value}
						onChange={handleInputChange}
					/>
					{option.label}
				</label>
			))}
			{error && <StyledErrorMessage> This field is requiered</StyledErrorMessage>}
		</StyledContainer>
	);
};
