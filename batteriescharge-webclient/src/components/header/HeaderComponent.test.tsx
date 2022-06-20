import { render } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';
import HamburgerNavComponent from './nav/HamburgerNavComponent';
import NormalNavComponent from './nav/NormalNavComponent';

test('Renders nav contains normal nav component', () => {
  render(<HeaderComponent />);
  expect(<NormalNavComponent/>).toBeInTheDocument();
});

test('Renders nav contains hamburger nav component', () => {
  render(<HeaderComponent />);
  expect(<HamburgerNavComponent/>).toBeInTheDocument();
});