import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { strings_en } from './strings-en';

test('SHOULD render the site logo WHEN the app is loaded', () => {
  render(<App />, { wrapper: BrowserRouter });
  const logo = screen.getByText(strings_en.header_slogan);
  expect(logo).toBeInTheDocument();
});
