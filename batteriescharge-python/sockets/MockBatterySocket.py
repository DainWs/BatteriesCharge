from .BatteryListener import BatteryListener
from .BatterySocket import BatterySocket

class MockBatterySocket(BatterySocket):
    def __init__(self):
        self.tTime = []

    def readAnalogInput(self, channel):
        if 7 <= channel <= 0:
            raise Exception('MCP3208 channel must be 0-7: ' + str(channel))
        return (3700 & 0x0FFF)

    def convertToVoltage(self, digitalNumber):
        return digitalNumber * 33.0 / 4095.0