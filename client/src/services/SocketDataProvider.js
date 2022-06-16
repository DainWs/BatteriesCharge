import { SocketObserver } from "./SocketObserver";

class SocketDataProvider {
    constructor() {
        this.data = new Map();
    }

    supply(event, data) {
        console.log(event + " data: " + JSON.stringify(data));
        this.data.set(event, data);
        SocketObserver.notify(event, data);
    }

    provide(event) {
        return this.data.get(event);
    }
}
const instance = new SocketDataProvider();
export { instance as SocketDataProvider };