import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { Events } from "../../domain/Events";
import { EventsObserver } from "../../domain/EventsObserver";
import Battery from "../../domain/models/Battery";

function getOptions(battery: Battery) {
    return {
        chart: {
            id: battery.getId(),
            type: 'area',
            zoom: {
                enabled: false
            }
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Voltage',
            align: 'left'
        },
        xaxis: {
            categories: ['5s ago', '10s ago', '15s ago', '20s ago', '25s ago']
        }
    };
};

function getSeries(battery: Battery) {
    var seriesData: Array<any> = [];
    let entries = battery.getEntries();

    console.log(entries);

    Array.from(entries)
        .sort((a, b) => a.fecha - b.fecha)
        .forEach((entry) => {
            seriesData.push(entry.voltage);
        });

    console.log(seriesData);

    if (seriesData.length < 5) {
        let remainings = 5 - seriesData.length;
        for (let i = 0; i < remainings; i++) {
            seriesData.push(0);
        }
    }

    console.log(seriesData);

    return [{
        name: 'Voltage',
        data: seriesData.slice(0, 5)
    }];
}

const BatteryItemComponent = function(props: any) {

    console.log(props);
    const [battery, setBattery] = useState(new Battery(props.battery));

    function updateBattery(data: any) {
        if (data.batteryId === battery.getId()) {
            setBattery(data);
        }
    }

    useEffect(() => {
        EventsObserver.subscribe(Events.UPDATE_BATTERIES, `BatteryItemComponent_${battery.getId()}`, updateBattery);
    });

    let options: any = getOptions(battery);
    let series: any = getSeries(battery);
    return (
        <div className="col-md-6">
            <h3 className="text-align-center">{battery.getNombre()}</h3>
            <Chart options={options} series={series} type="area"/>
        </div>
    );
}


export default BatteryItemComponent;