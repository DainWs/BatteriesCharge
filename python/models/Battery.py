
lastID = -1;

class Battery:
    def __init__(self, batteryModel = ''):
        if (batteryModel == ''):
            self.id = ++lastID
            self.nombre = 'battery_' + self.id
            self.entries = []
        else:
            self.id = batteryModel['id'];
            self.nombre = batteryModel['nombre']
            self.inputPin = batteryModel['inputPin']
            self.outputPin = batteryModel['outputPin']
            self.entries = []

    def setInputPin(self, pinNum):
        self.inputPin = pinNum

    def setOutputPin(self, pinNum):
        self.outputPin = pinNum

    def add(self, entry):
        entry.id = self.entries.__len__()
        entry.batteryId = self.id
        self.entries.append(entry)
