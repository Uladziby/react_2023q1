/** @format */
import { StyledErrorMessage, StyledLabel } from "../AInput/AInput.styles";
import { Select, SelectWrapper } from "./ASelect.styles";
import { ASelectProps } from "./type";

export const ASelect = ({name, value, onChange, options, error}:ASelectProps) => {

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>)=> {
		onChange({ [name]: event.target.value });
	}

		return (
			<SelectWrapper>
				<StyledLabel aria-label={name}>Select a country:</StyledLabel>
				<Select
					data-testid="select"
					id="country-select"
					value={value}
					onChange={handleSelectChange}
				>
					<option>Choose your country</option>
					{options.map((country) => {
						return (
							<option key={country} value={country}>
								{country}
							</option>
						);
					})}
				</Select>
				{error && <StyledErrorMessage> This field is requiered</StyledErrorMessage>}
			</SelectWrapper>
		);
	
}
