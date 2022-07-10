import { render } from '@testing-library/react';
import BatteryItemComponent from './BatteryItemComponent';

test('Renders home page, contains a list of batteries', () => {
  render(<BatteryItemComponent/>);
  expect("").toBeInTheDocument();
});
