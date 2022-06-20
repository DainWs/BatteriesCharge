import { render } from '@testing-library/react';
import FooterComponent from './FooterComponent';

test('Renders footer element', () => {
  render(<FooterComponent />);
  expect(<footer/>).toBeInTheDocument();
});
