import matplotlib
import matplotlib.pyplot as plt
import RPi.GPIO as GPIO
import time
import spidev
import datetime

from models import BatteryEntry
from . import BatteryListener

class BatterySocket:
    def __init__(self):
        self.spi = spidev.SpiDev()
        self.spi.open(0, 0)
        self.spi.max_speed_hz = 7629

        # Data for plotting
        self.tTime = []

    def readAnalogInput(self, channel):
        if 7 <= channel <= 0:
            raise Exception('MCP3208 channel must be 0-7: ' + str(channel))

        cmd = 128 # 1000 0000
        cmd += 64 # 1100 0000
        cmd += ((channel & 0x07) << 3)

        ret = self.spi.xfer2([cmd, 0x0, 0x0])
        val = (ret[0] & 0x01) << 11  # only B11 is here
        val |= ret[1] << 3           # B10:B3
        # MSB has B2:B0 ... need to move down to LSB
        val |= ret[2] >> 5

        return (val & 0x0FFF)

    def convertToVoltage(self, digitalNumber):
        return digitalNumber * 33.0 / 4095.0

    def run(self):
        counter = 0
        while counter < 60:
            counter+=1
            #time function
            self.tTime.append(datetime.datetime.now())

            for battery in self.batteries:
                #analog function
                analogInput = self.readAnalogInput(battery.outputPin)
                analogAsVoltage = round(self.convertToVoltage(analogInput), 2)
                print('Voltage at ' + datetime.now() + ' is ' + analogAsVoltage + ' (output)')

                analogBatteryInput = self.readAnalogInput(battery.inputPin)
                analogBatteryAsVoltage = round(self.convertToVoltage(analogBatteryInput), 2)
                print('Battery voltage at ' + datetime.now() + ' is ' + analogBatteryAsVoltage + ' (input)')

                battery.add(BatteryEntry(analogBatteryAsVoltage))
                BatteryListener().actionPerformed('battery', battery);

            time.sleep(10)
