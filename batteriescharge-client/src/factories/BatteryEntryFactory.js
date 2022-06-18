import BatteryEntry from "../models/BatteryEntry";

class BatteryEntryFactory {
    parseBatteryEntry(generalObject) {
        return new BatteryEntry(generalObject);
    }
}

export default BatteryEntryFactory;