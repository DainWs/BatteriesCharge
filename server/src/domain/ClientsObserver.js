const CLIENTS = new Map();

class ClientsObserver {
    subscribe(clientSocket) {
        CLIENTS.set(clientSocket.id, clientSocket);
    }

    unsubscribe(clientSocket) {
        CLIENTS.delete(clientSocket.id);
    }

    notifyAll(event, ...args) {
        CLIENTS.forEach(socket => socket.emit(event, ...args));
    }
}
const instance = new ClientsObserver();
module.exports = instance;