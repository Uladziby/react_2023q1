/** @format */
import { ATitle } from "../ATitle/ATitle";
import { StyledContainer, StyledImage } from "./AImgeInput.styles";
import { AImageInputProps } from "./type";

export const AImageInput = ({ name, value, onChange }: AImageInputProps) => {
	const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file && event.target.files) {
			onChange({ image: URL.createObjectURL(event.target.files[0]) });
		}
	};

	return (
		<StyledContainer>
			<ATitle size={14} weight={400} lineHeight={32}>
				Choose a profile picture:
			</ATitle>
			<input
				name={name}
				id="avatar"
				type="file"
				accept="image/png, image/jpeg"
				onChange={handleSelectChange}
			/>
			{value && <StyledImage src={value} alt={name} />}
		</StyledContainer>
	);
};
