import NormalNavComponent from './nav/NormalNavComponent';
import HamburgerNavComponent from './nav/HamburgerNavComponent';

const HeaderComponent = function () {
  return (
    <header className='position-fixed w-100' style={{ zIndex: 900 }}>
      <nav className='nav d-flex justify-content-between bg-secondary'>
        <NormalNavComponent/>
        <HamburgerNavComponent/>
      </nav>
    </header>
  );
}

export default HeaderComponent;
