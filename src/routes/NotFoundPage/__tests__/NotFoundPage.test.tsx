/** @format */
import { store } from '../../../redux/store';
import NotFoundPage from '../NotFoundPage';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('NotFoundPage', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <NotFoundPage />
      </Provider>
    );
  });

  it('renders an image with a valid source and alt text', () => {
    render(<NotFoundPage />);
    const image = screen.getByAltText('notfound');
    expect(image).toHaveAttribute('src', expect.stringContaining('404.png'));
    expect(image).toHaveAttribute('alt', 'notfound');
  });

  it('renders the image with a width of 500', () => {
    render(<NotFoundPage />);
    const image = screen.getByAltText('notfound');
    expect(image).toHaveAttribute('width', '500');
  });
});
