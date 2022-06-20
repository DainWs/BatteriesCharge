import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('Renders home page, contains a list of batteries', () => {
  render(<HomePage/>);
  expect("").toBeInTheDocument();
});
