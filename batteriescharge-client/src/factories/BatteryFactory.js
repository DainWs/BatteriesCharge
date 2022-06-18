import Battery from "../models/Battery";

class BatteryFactory {
    parseBattery(generalObject) {
        return new Battery(generalObject);
    }

    parseBatteries(generalObjects) {
        var results = [];
        Array.from(generalObjects).forEach(
            function(generalObject) { 
                results.push(this.parseBattery(generalObject))
            }.bind(this)
        )
        return results;
    }
}

export default BatteryFactory;