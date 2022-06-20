import { io } from "socket.io-client";
import { SocketDataProvider } from "./SocketDataProvider";
import { UPDATE_BATTERIES } from "./SocketEvents";

const socket = io();

class SocketController {
    start() {
        socket.on('update', this.update.bind(this));
    }

    update(data) {
        if (!data) return;
        SocketDataProvider.supply(UPDATE_BATTERIES, data);
    }
}
const instance = new SocketController();
export { instance as SocketController };