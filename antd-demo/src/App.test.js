import React from 'react';
import { render,getByPlaceholderText } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { container } = render(<App />);
  expect(getByPlaceholderText(container, 'Select month')).toBeInTheDocument()
});
