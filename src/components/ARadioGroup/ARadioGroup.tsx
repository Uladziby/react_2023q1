/** @format */
import { StyledContainer } from "./ARadioGroup.styles";
import { Component } from "react";

export interface RadioGroupProps {
	options: { label: string; value: string }[];
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class ARadioGroup extends Component<RadioGroupProps> {
	state = {
		selectedValue: "",
	};

	handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ selectedValue: event.target.value });
	}

	render() {
		return (
			<StyledContainer>
				{this.props.options.map((option) => (
					<label key={option.label}>
						<input
							type="radio"
							name={option.value}
							value={option.value}
							checked={this.state.selectedValue === option.value}
							onChange={this.handleInputChange.bind(this)}
						/>
						{option.label}
					</label>
				))}
			</StyledContainer>
		);
	}
}

export default ARadioGroup;
