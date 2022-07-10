import NormalNavComponent from './nav/NormalNavComponent';
import HamburgerNavComponent from './nav/HamburgerNavComponent';

const HeaderComponent = function () {
  return (
    <header className='position-sticky top-0'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light py-0 px-3'>
        <NormalNavComponent/>
        <HamburgerNavComponent/>
      </nav>
    </header>
  );
}

export default HeaderComponent;
