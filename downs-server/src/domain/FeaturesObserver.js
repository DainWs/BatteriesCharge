const ALL = 'all';
const BATTERIES = 'batteriescharge';

const FEATURES = [
    ALL,
    BATTERIES
]

class FeaturesObserver {
    constructor() {
        this.features = {
            all: ALL,
            batteries: BATTERIES
        };

        this.subscribers = new Map();
        FEATURES.forEach(
            feature => this.subscribers.set(feature, new Map())
        );
    }

    subscribe(clientSocket, feature = ALL) {
        this.subscribers.get(feature).set(clientSocket.id, clientSocket);
    }

    unsubscribe(clientSocket, feature = ALL) {
        this.subscribers.get(feature).delete(clientSocket.id);
    }

    notify(feature, event, ...args) {
        this.subscribers
            .get(feature)
            .forEach(socket => socket.emit(event, ...args));
    }
}
const instance = new FeaturesObserver();
module.exports = instance;