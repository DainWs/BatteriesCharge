import { Link } from "react-router-dom";
import HomeLinkComponent from "./HomeLinkComponent";

const NormalNavComponent = function () {
    return (
        <>
            <Link key='home-image-link' id="home-image-link" to='/' className='navbar-brand d-flex align-items-center m-0 p-0' draggable={false}>
                <img src={require('../../../assets/images/logo.png')} width="40" height="40" alt='logo' draggable={false}/>
            </Link>
            <div className="flex-grow-1">
                <ul className="navbar-nav flex-row-reverse">
                    <li className="nav-item active p-2 ">
                        <HomeLinkComponent />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NormalNavComponent;