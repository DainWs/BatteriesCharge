from datetime import datetime

class BatteryEntry:
    def __init__(self, voltage):
        self.voltage = voltage
        self.fecha = datetime.timestamp(datetime.now())