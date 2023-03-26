/** @format */
import { ATitle } from "../ATitle/ATitle";
import { StyledContainer, StyledImage } from "./AImgeInput.styles";
import { Component, ReactNode } from "react";

export class AImageInput extends Component {
	state = {
		uploadedImage: "",
	};

	handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files && event.target.files[0];
		if (file) {
			this.setState({ uploadedImage: file });
		}
	}

	render(): ReactNode {
		return (
			<StyledContainer>
				<ATitle size={14} weight={400} lineHeight={32}>
					Choose a profile picture:
				</ATitle>
				<input
					id="avatar"
					type="file"
					placeholder="Your Avatar"
					accept="image/png, image/jpeg"
					onChange={this.handleSelectChange.bind(this)}
				/>
				{this.state.uploadedImage && (
					<StyledImage
						src={URL.createObjectURL(this.state.uploadedImage as unknown as MediaSource)}
						alt="Selected"
					/>
				)}
			</StyledContainer>
		);
	}
}
