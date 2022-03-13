
lastID = -1;

class Battery:
    def __init__(self, batteryModel = ''):
        if (batteryModel == ''):
            self.id = ++lastID
            self.nombre = 'battery_' + self.id
            self.entries = []
        else:
            self.id = batteryModel['ID']
            self.nombre = batteryModel['NOMBRE']
            self.inputPin = batteryModel['INPUTPIN']
            self.outputPin = batteryModel['OUTPUTPIN']
            self.entries = []

    def setInputPin(self, pinNum):
        self.inputPin = pinNum

    def setOutputPin(self, pinNum):
        self.outputPin = pinNum

    def add(self, entry):
        entry.id = self.entries.__len__()
        entry.batteryId = self.id
        self.entries.append(entry)
