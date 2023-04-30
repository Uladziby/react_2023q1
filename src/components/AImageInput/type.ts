/** @format */
import { IFormPageState } from '../../routes/FormPage/types';
import { IOption } from '../ASelect/type';
import { UseFormRegister } from 'react-hook-form';

export interface AImageInputProps {
  className?: string;
  name?: string;
  value?: string;
  register: UseFormRegister<IFormPageState>;
  onChange?: (option: IOption) => void;
}
