/** @format */
import { AInput } from '../AInput';
import { render, fireEvent, screen, renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FormProvider, useForm } from 'react-hook-form';

describe('AInput', () => {
  const props = {
    placeholder: 'Test placeholder',
    label: 'Test label',
    isDisabled: false,
    type: 'text',
    className: 'test-class',
    name: 'test-name',
    onChange: jest.fn(),
    value: 'Test value',
    error: '',
  };

  const { result } = renderHook(() => useForm());
  const form = result.current;

  it('renders the input with the correct props', () => {
    render(
      <FormProvider {...form}>
        <AInput {...props} />
      </FormProvider>
    );
    const input = screen.getByPlaceholderText('Test placeholder');
    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveValue('Test value');
  });

  it('calls the onChange function when the input value changes', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <AInput {...props} />
        </FormProvider>
      )
    );

    const input = screen.getByPlaceholderText('Test placeholder');

    act(() => {
      fireEvent.change(input, { target: { value: 'New value' } });
    });
    expect(props.onChange).toHaveBeenCalledWith({ 'test-name': 'New value' });
  });

  it('renders the error message when there is an error', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <AInput {...props} error="This field is required" />{' '}
        </FormProvider>
      )
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('does not render the error message when there is no error', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <AInput {...props} />
        </FormProvider>
      )
    );
    expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
  });
});
