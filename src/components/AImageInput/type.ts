/** @format */
import { IOption } from "../ASelect/type";

export interface AImageInputProps {
  className?: string;
  name?: string;
  value?: string;
  register: unknown;
  onChange?: (option: IOption) => void;
}
