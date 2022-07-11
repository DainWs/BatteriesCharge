from datetime import datetime

class BatteryEntry:
    def __init__(self, batteryId, voltage):
        self.batteryId = batteryId
        self.voltage = voltage
        self.fecha = datetime.timestamp(datetime.now())