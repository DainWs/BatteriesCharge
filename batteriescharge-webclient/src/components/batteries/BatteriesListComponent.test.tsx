import { render } from '@testing-library/react';
import HomePage from './BatteriesListComponent';

test('Renders home page, contains a list of batteries', () => {
  render(<BatteriesListComponent/>);
  expect("").toBeInTheDocument();
});
