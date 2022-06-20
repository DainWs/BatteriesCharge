class ClientsObserver {
    constructor() {
        this.subscribers = new Map();
    }

    subscribe(clientSocket) {
        this.subscribers.set(clientSocket.id, clientSocket);
    }

    unsubscribe(clientSocket) {
        this.subscribers.delete(clientSocket.id);
    }

    notifyAll(event, ...args) {
        this.subscribers.forEach(socket => socket.emit(event, ...args));
    }
}
const instance = new ClientsObserver();
module.exports = instance;