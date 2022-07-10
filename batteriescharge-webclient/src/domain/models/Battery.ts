
export class Battery {
    private id: any;
    private nombre: any;
    private inputPin: any;
    private outputPin: any;
    private entries: Set<any>;

    constructor(generalObject = {id: -1, nombre: '', inputPin: -1, outputPin: -1, entries: []}) {
        this.id = generalObject.id;
        this.nombre = generalObject.nombre;
        this.inputPin = generalObject.inputPin;
        this.outputPin = generalObject.outputPin;

        this.entries = new Set();
        if (Array.isArray(generalObject.entries)) {
            var newEntries = new Set();
            Array.from(generalObject.entries).forEach(newEntries.add);
            this.entries = newEntries;
        }
    }

    public getId() {
        return this.id;
    }

    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: any) {
        this.nombre = nombre;
    }

    public getInputPin() {
        return this.inputPin;
    }

    public setInputPin(inputPin: any) {
        this.inputPin = inputPin;
    }

    public getOutputPin() {
        return this.outputPin;
    }

    public setOutputPin(outputPin: any) {
        this.outputPin = outputPin;
    }

    public getEntries() {
        return this.entries.values();
    }

    public addEntry(entry: any) {
        entry.id = this.entries.size;
        entry.batteryId = this.id;
        this.entries.add(entry);
    }

    public removeEntry(entry: any) {
        this.entries.delete(entry);
    }
}

export default Battery;