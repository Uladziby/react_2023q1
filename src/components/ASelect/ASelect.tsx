/** @format */
import { StyledErrorMessage, StyledLabel } from "../AInput/AInput.styles";
import { Select, SelectWrapper } from "./ASelect.styles";
import { ASelectProps } from "./type";
import { useController } from "react-hook-form";

export const ASelect = ({ name, options }: ASelectProps) => {
	const {
		field,
		fieldState: { error },
		formState: { isValid, isDirty },
	} = useController({ name, shouldUnregister: true, defaultValue: "" });

	return (
		<SelectWrapper>
			<StyledLabel aria-label={name}>Select a country:</StyledLabel>
			<Select {...field} data-testid="select" id="country-select" name={name}>
				{options.map((country) => {
					return <option key={country}>{country}</option>;
				})}
			</Select>
			{!isValid && isDirty && <StyledErrorMessage> {error?.type}</StyledErrorMessage>}
		</SelectWrapper>
	);
};
