import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";

const LayoutPage = function () {
    return (
        <>
            <HeaderComponent />
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <FooterComponent />
        </>
    );
}

export default LayoutPage;