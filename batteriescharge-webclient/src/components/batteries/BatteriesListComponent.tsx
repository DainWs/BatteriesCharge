import { useState } from "react";

const BatteriesListComponent = function () {
    const [batteryList, setBatteryList] = useState([]);

    return (
        <div className="container col-md-12">
            <div className="row">
                <h1 className="col-md-6 mr-auto">Baterias</h1>
                <a className="btn btn-light b-0 d-flex align-items-center hover-rotate" onClick={ }>
                    <img src="../../assets/images/rotate-solid.svg" style={{ height: '1.5rem' }} />
                </a>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap">
                    {getBatteryHTMLItems(batteryList)}
                </div>
            </div >
        </div >
    );
}

function getBatteryHTMLItems(batteryList: Array<Object>) {
    return batteryList.map<BatteryItem>(
        (v, i) => <BatteryItem key={i} battery={v} /> );
}

export default BatteriesListComponent;