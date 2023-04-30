/** @format */
import { AImageInput } from '../AImageInput';
import { render, screen } from '@testing-library/react';

describe('AImageInput', () => {
  const onChangeMock = jest.fn();

  afterEach(() => {
    onChangeMock.mockReset();
  });

  it('renders the component with the correct title', () => {
    render(<AImageInput register={onChangeMock} value="test" onChange={onChangeMock} />);

    expect(screen.getByText('Choose a profile picture:')).toBeInTheDocument();
  });
});
