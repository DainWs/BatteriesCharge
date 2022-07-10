import { Events } from "../../domain/Events";
import { EventsObserver } from "../../domain/EventsObserver";

class SocketDataProvider {
    private data: Map<Events, any>;

    constructor() {
        this.data = new Map();
    }

    supply(event: Events, data: any) {
        console.log(event + " data: " + JSON.stringify(data));
        this.data.set(event, data);
        EventsObserver.notify(event, data);
    }

    provide(event: Events) {
        return this.data.get(event);
    }
}
const instance = new SocketDataProvider();
export { instance as SocketDataProvider };