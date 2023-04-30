/** @format */
import { ASelect } from '../ASelect';
import { render, fireEvent, screen, renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FormProvider, useForm } from 'react-hook-form';

describe('ASelect', () => {
  const { result } = renderHook(() => useForm());
  const form = result.current;

  const props = {
    name: 'test-name',
    onChange: jest.fn(),
    value: 'Test value',
    options: ['Option 1', 'Option 2', 'Option 3'],
    error: '',
  };

  it('renders the label', () => {
    render(
      <FormProvider {...form}>
        <ASelect {...props} />
      </FormProvider>
    );

    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('renders the select with the correct props', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <ASelect {...props} />
        </FormProvider>
      )
    );
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  it('calls the onChange function when the select value changes', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <ASelect {...props} />
        </FormProvider>
      )
    );
    const select = screen.getByTestId('select');

    act(() => {
      fireEvent.change(select, { target: { value: 'Option 2' } });
    });

    waitFor(() => expect(props.onChange).toHaveBeenCalledWith({ 'test-name': 'Option 2' }));
  });

  it('renders the options correctly', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <ASelect {...props} />
        </FormProvider>
      )
    );
    expect(screen.getByText('Select a country:')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('does not render the error message when there is no error', async () => {
    await act(async () =>
      render(
        <FormProvider {...form}>
          <ASelect {...props} />
        </FormProvider>
      )
    );

    expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
  });
});
