import { StyledFieldset } from './AForm.styles';
import { ChangeEvent, ComponentProps } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface FormProps<T extends FieldValues> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLFormElement>) => void;
}

export const AForm = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  name,
  onChange,
  ...props
}: FormProps<T>) => (
  <FormProvider {...form}>
    <form
      onSubmit={onSubmit && form.handleSubmit(onSubmit)}
      onChange={onChange}
      name={name}
      {...props}
    >
      <StyledFieldset disabled={form.formState.isSubmitting}>{children}</StyledFieldset>
    </form>
  </FormProvider>
);
