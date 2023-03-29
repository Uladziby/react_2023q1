/** @format */
import { StyledErrorMessage, StyledLabel } from "../AInput/AInput.styles";
import { Select, SelectWrapper } from "./ASelect.styles";
import { ASelectProps } from "./type";
import { Component, ReactNode } from "react";

export class ASelect extends Component<ASelectProps> {
	handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		this.props.onChange({ [this.props.name]: event.target.value });
	}

	render(): ReactNode {
		return (
			<SelectWrapper>
				<StyledLabel aria-label={this.props.name}>Select a country:</StyledLabel>
				<Select
					data-testid="select"
					id="country-select"
					value={this.props.value}
					onChange={this.handleSelectChange.bind(this)}
				>
					<option>Choose your country</option>
					{this.props.options.map((country) => {
						return (
							<option key={country} value={country}>
								{country}
							</option>
						);
					})}
				</Select>
				{this.props.error && <StyledErrorMessage> This field is requiered</StyledErrorMessage>}
			</SelectWrapper>
		);
	}
}
