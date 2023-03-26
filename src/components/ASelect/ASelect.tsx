/** @format */
import { StyledLabel } from "../AInput/AInput.styles";
import { Select, SelectWrapper } from "./ASelect.styles";
import { ASelectProps } from "./type";
import { Component, ReactNode } from "react";

export class ASelect extends Component<ASelectProps> {
	state = {
		selectedCountry: "",
	};

	handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		this.setState({ selectedCountry: event.target.value });
	}

	render(): ReactNode {
		return (
			<SelectWrapper>
				<StyledLabel htmlFor="country-select">Select a country:</StyledLabel>
				<Select
					id="country-select"
					value={this.state.selectedCountry}
					onChange={this.handleSelectChange.bind(this)}
				>
					<option value="">Select your country</option>
					{this.props.options.map((country) => {
						return (
							<option key={country} value={country}>
								{country}
							</option>
						);
					})}
				</Select>
			</SelectWrapper>
		);
	}
}
