import { io } from "socket.io-client";
import { Events } from "../../domain/Events";
import { EventsObserver } from "../../domain/EventsObserver";
import { SocketDataProvider } from "./SocketDataProvider";

const socket = io();

class SocketController {
    private hasStarted: Boolean;

    constructor() {
        this.hasStarted = false;
        EventsObserver.subscribe(Events.ON_START, "SocketController", this.start.bind(this));
    }

    public start() {
        if (!this.hasStarted) {
            socket.on('update', this.updateResponse.bind(this));
            this.hasStarted = true;
        }
    }

    public update() {
        if (this.hasStarted) {
            socket.emit('update');
        }
    }

    private updateResponse(data: any) {
        if (!data) return;
        SocketDataProvider.supply(Events.UPDATE_BATTERIES, data);
    }
}
const instance = new SocketController();
export { instance as SocketController };