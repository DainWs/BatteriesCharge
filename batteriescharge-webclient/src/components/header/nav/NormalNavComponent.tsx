import { Link } from "react-router-dom";
import HomeLinkComponent from "./HomeLinkComponent";

const NormalNavComponent = function () {
    return (
        <>
            <Link key='home-image-link' to='/' className='h-100 mr-3'>
                <img src={require('../assets/images/logo.png')} alt='logo' className='h-100' />
            </Link>
            <HomeLinkComponent />
        </>
    );
}

export default NormalNavComponent;