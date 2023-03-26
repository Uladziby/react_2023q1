/** @format */
import { ATitle } from "../ATitle/ATitle";
import { StyledContainer, StyledImage } from "./AImgeInput.styles";
import { AImageInputProps } from "./type";
import { Component, ReactNode } from "react";

export class AImageInput extends Component<AImageInputProps> {
	handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files && event.target.files[0];
		if (file && event.target.files) {
			this.props.onChange({ image: URL.createObjectURL(event.target.files[0]) });
		}
	}

	render(): ReactNode {
		return (
			<StyledContainer>
				<ATitle size={14} weight={400} lineHeight={32}>
					Choose a profile picture:
				</ATitle>
				<input
					name={this.props.name}
					id="avatar"
					type="file"
					accept="image/png, image/jpeg"
					onChange={this.handleSelectChange.bind(this)}
				/>
				{this.props.value && <StyledImage src={this.props.value} alt={this.props.name} />}
			</StyledContainer>
		);
	}
}
