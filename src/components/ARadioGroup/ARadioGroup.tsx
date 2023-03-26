/** @format */
import { StyledErrorMessage } from "../AInput/AInput.styles";
import { StyledContainer } from "./ARadioGroup.styles";
import { RadioGroupProps } from "./type";
import { Component } from "react";

export class ARadioGroup extends Component<RadioGroupProps> {
	handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.onChange({ [this.props.name]: event.target.value });
	}

	render() {
		return (
			<StyledContainer>
				{this.props.options.map((option) => (
					<label key={option.label}>
						<input
							type="radio"
							name={this.props.name}
							value={option.value}
							checked={this.props.value === option.value}
							onChange={this.handleInputChange.bind(this)}
						/>
						{option.label}
					</label>
				))}
				{this.props.error && <StyledErrorMessage> This field is requiered</StyledErrorMessage>}
			</StyledContainer>
		);
	}
}

export default ARadioGroup;
