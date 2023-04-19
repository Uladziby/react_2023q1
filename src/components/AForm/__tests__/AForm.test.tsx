/** @format */
import { AForm } from '../AForm';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

describe('AForm', () => {
  const { result } = renderHook(() => useForm());
  const form = result.current;

  const props = {
    form: form,
    onSubmit: jest.fn(),
    name: 'form',
  };

  render(
    <AForm {...props}>
      <input type="text" />
      <input type="submit" />
    </AForm>
  );

  it('should render correctly', () => {
    const element = screen.getByRole(/form/i);

    expect(element).toBeInTheDocument();
  });

  it('handles children property correctly', () => {
    const element = screen.getByRole(/group/i);

    expect(element.innerHTML).toBe('<input type="text"><input type="submit">');
  });

  it('after submit event property onSubmit should be invoked', async () => {
    const element = screen.getByRole(/form/i);

    fireEvent.submit(element);

    expect(props.onSubmit).toHaveBeenCalled();
  });
});
