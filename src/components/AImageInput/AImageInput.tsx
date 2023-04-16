/** @format */
import { ATitle } from "../ATitle/ATitle";
import { StyledContainer } from "./AImgeInput.styles";
import { AImageInputProps } from "./type";

export const AImageInput = ({ register, name }: AImageInputProps) => {
  return (
    <StyledContainer>
      <ATitle size={14} weight={400} lineHeight={32}>
        Choose a profile picture:
      </ATitle>
      <input
        name={name}
        {...register("image", { required: true })}
        type="file"
      />
    </StyledContainer>
  );
};
