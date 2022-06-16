import { EVENTS } from "./SocketEvents";

class SocketObserver {
    constructor() {
        this.subscribers = new Map();
        for (const event of EVENTS) {
            this.subscribers.set(`${event}`, new Map());
        }
    }

    subscribe(event, className, callback) {
        this.subscribers.get(`${event}`)
            .set(className, callback);
    }

    unsubscribe(event, className) {
        this.subscribers.get(`${event}`)
            .delete(className);
    }

    notify(event, ...args) {
        this.subscribers.get(`${event}`).forEach(callback => callback(...args));
    }
}
const instance = new SocketObserver();
export { instance as SocketObserver };
