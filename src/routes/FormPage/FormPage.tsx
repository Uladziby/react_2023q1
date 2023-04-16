/** @format */
import { AForm } from "../../components/AForm/AForm";
import { AImageInput } from "../../components/AImageInput/AImageInput";
import { AInput } from "../../components/AInput/AInput";
import { ARadioGroup } from "../../components/ARadioGroup/ARadioGroup";
import { ASelect } from "../../components/ASelect/ASelect";
import { ATitle } from "../../components/ATitle/ATitle";
import { formPageSelector } from "../../redux/selectors/selectors";
import { addCard } from "../../redux/slices/formPageSlice";
import { AppDispatch } from "../../redux/store";
import { CardForm } from "./CardForm/CardForm ";
import {
  StyledButton,
  StyledCardContainer,
  StyledContainer,
  StyledDateAInput,
  StyledHeader,
} from "./FormPage.styles";
import { IFormPageState } from "./types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const countryOptions = ["Norway", "Sweden", "Estonia", "Finland", "Dennmark"];
const radioOptions = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
];
const initialState: IFormPageState = {
  firstName: "",
  lastName: "",
  birthDay: "",
  country: "",
  gender: "",
  image: "",
  errors: {
    firstName: "",
    lastName: "",
    birthDay: "",
    country: "",
    gender: "",
    image: "",
  },
};

export const FormPage = () => {
  const form = useForm<IFormPageState>({
    mode: "onSubmit",
  });
  const dispatch = useDispatch<AppDispatch>();

  const { reset, register } = form;

  const [stateForm] = useState<IFormPageState>({ ...initialState });
  const { userCards } = useSelector(formPageSelector);

  const onSubmit = (data: IFormPageState) => {
    dispatch(
      addCard({
        ...data,
        image: URL.createObjectURL(data.image[0] as unknown as Blob),
      })
    );
    reset();
  };

  return (
    <AForm onSubmit={onSubmit} form={form}>
      <StyledHeader>
        <ATitle size={40} weight={500} lineHeight={47}>
          Add new user
        </ATitle>
      </StyledHeader>
      <StyledContainer>
        <AInput
          type="text"
          name="firstName"
          placeholder="First name"
          label="First name"
        />
        <AInput
          type="text"
          name="lastName"
          label="Last name"
          placeholder="Last name"
        />
        <StyledDateAInput
          name="birthDay"
          label="Birth day*"
          dataTestId="input-date"
          type="date"
          value={stateForm.birthDay}
        />
        <ASelect
          name="country"
          value={stateForm.country}
          options={countryOptions}
        />
        <ARadioGroup name="gender" options={radioOptions} />
        <AImageInput register={register} name="image" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledContainer>
      <StyledCardContainer>
        {userCards.map((card, idx) => (
          <CardForm key={idx} datd-testid="cardForm" data={card} />
        ))}
      </StyledCardContainer>
    </AForm>
  );
};
