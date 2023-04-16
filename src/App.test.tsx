/** @format */
import App from './App';
import { store } from './redux/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

test('render app', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  const app = screen.getByTestId('App');

  expect(app).toBeInTheDocument();
});
