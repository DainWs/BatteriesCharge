import { ReactElement, useState } from "react";
import Battery from "../../domain/models/Battery";
import { SocketController } from "../../services/socket/SocketController";
import BatteryItemComponent from "./BatteryItemComponent";

const BatteriesListComponent = function () {
    const [batteryList, setBatteryList] = useState([]);

    return (
        <div className="col-md-12 row m-0 h-50">
            <div className="d-flex flex-row row m-0 p-0 ps-3">
                <h1 className="col-md-6 p-0 me-auto mb-0">Baterias</h1>
                <a className="btn btn-light b-0 hover-rotate d-flex align-items-center" style={{width: '3rem', height: '3rem'}} onClick={SocketController.update.bind(SocketController)}>
                    <img src={require('../../assets/images/rotate-solid.png')} style={{ height: '1.5rem' }} />
                </a>
            </div>
            <div className="row m-0 flex-grow-1">
                <div className="col-md-12 d-flex flex-wrap">
                    {getBatteryHTMLItems(batteryList)}
                </div>
            </div >
        </div >
    );
}

function getBatteryHTMLItems(batteryList: Array<Battery>) {
    return batteryList.map<ReactElement<any, any>>(
        (battery, i) => <BatteryItemComponent key={i} battery={battery} /> );
}

export default BatteriesListComponent;