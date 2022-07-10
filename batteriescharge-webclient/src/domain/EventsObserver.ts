import { Events } from "./Events";

class EventsObserver {
    private listeners: Map<Events, Map<String, Function>>;

    constructor() {
        this.listeners = new Map();
    }

    public subscribe(event: Events, listenerId: String, callback: Function ) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Map());
        }

        let listenersOfEvent = this.listeners.get(event);
        listenersOfEvent?.set(listenerId, callback);
    }

    public unsubscribe(event: Events, listenerId: String) {
        this.listeners.get(event)?.delete(listenerId);
    }

    public notify(event: Events, ...args: any[]) {
        this.notifyListener.bind(this, ...args)
        this.listeners.get(event)?.forEach(this.notifyListener);
    }

    private notifyListener(callback: Function, ...args: any[]) {
        console.log(callback);
        console.log(args);
        callback();
    }
}

const instance = new EventsObserver();
export { instance as EventsObserver };