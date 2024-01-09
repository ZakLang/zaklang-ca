import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('SHOULD render the site logo WHEN the app is loaded', () => {
  render(<App />, { wrapper: BrowserRouter });
  const logo = screen.getByText(/I'm Zak Lang/i);
  expect(logo).toBeInTheDocument();
});
