import { render } from '@testing-library/react';
import LayoutPage from './LayoutPage';
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';

test('Renders header component', () => {
  render(<LayoutPage />);
  const headerComponent = <HeaderComponent/>;
  expect(headerComponent).toBeInTheDocument();
});

test('Renders footer component', () => {
  render(<LayoutPage />);
  const footerComponent = <FooterComponent/>;
  expect(footerComponent).toBeInTheDocument();
});
