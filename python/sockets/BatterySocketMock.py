from datetime import datetime

import time
from models.BatteryEntry import BatteryEntry
from .BatteryListener import BatteryListener

class BatterySocketMock:
    def __init__(self):
        self.tTime = []

    def readAnalogInput(self, channel):
        if 7 <= channel <= 0:
            raise Exception('MCP3208 channel must be 0-7: ' + str(channel))
        return (3700 & 0x0FFF)

    def convertToVoltage(self, digitalNumber):
        return digitalNumber * 33.0 / 4095.0

    def run(self):
        print('running')
        counter = 0
        while counter < 60:
            counter+=1
            #time function
            self.tTime.append(datetime.now())

            for battery in self.batteries:
                #analog function
                analogInput = self.readAnalogInput(battery.outputPin)
                analogAsVoltage = round(self.convertToVoltage(analogInput), 2)
                print('Voltage at ' + str(datetime.now()) + ' is ' + str(analogAsVoltage) + ' (output)')

                analogBatteryInput = self.readAnalogInput(battery.inputPin)
                analogBatteryAsVoltage = round(self.convertToVoltage(analogBatteryInput), 2)
                print('Battery voltage at ' + str(datetime.now()) + ' is ' + str(analogBatteryAsVoltage) + ' (input)')

                batteryEntry = BatteryEntry(analogBatteryAsVoltage)
                battery.add(batteryEntry)
                BatteryListener().actionPerformed('batteryEntry', batteryEntry);

            time.sleep(10)