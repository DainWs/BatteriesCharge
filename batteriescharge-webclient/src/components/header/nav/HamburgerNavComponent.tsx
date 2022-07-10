import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HomeLinkComponent from './HomeLinkComponent';

const HamburgerNavComponent = function () {
    return (
        <div className='d-block d-sm-none w-100' style={{ zIndex: 3 }}>
            <nav className='navbar-light d-flex justify-content-start h-100'>
                <a id='hamburger-menu' href='#' className='nav-link nav-icon' type='button' data-toggle='collapse' data-target='#navbarToggleExternalContent' aria-controls='navbarToggleExternalContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </nav>
            <div className='collapse bg-secondary pb-1' id='navbarToggleExternalContent'>
                <HomeLinkComponent key='hamburger-home-link' onClick={closeHamburger} />
            </div>
        </div>
    )
}

function closeHamburger() {
    document.getElementById('hamburger-menu')?.click();
}

export default HamburgerNavComponent;