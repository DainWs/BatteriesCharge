from pickle import TRUE
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

        # listeners
        self.listener = BatteryListener()

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
        while TRUE:
            #time function
            self.tTime.append(datetime.datetime.now())

            for battery in self.batteries:
                self.interactWithBattery(battery)

            time.sleep(5)
    
    def interactWithBattery(self, battery): 
        #analog function
        self.getAnalogVoltage(battery.outputPin)
        batteryVoltage = self.getAnalogBatteryVoltage(battery.inputPin)

        batteryEntry = BatteryEntry(battery.id, batteryVoltage)
        self.listener.actionPerformed(batteryEntry)
        battery.add(batteryEntry)

    def getAnalogVoltage(self, outputPin):
        voltage = self.convertAnalogToVoltage(outputPin)
        print('Voltage at ' + str(datetime.now()) + ' is ' + str(voltage) + ' (output)')
        return voltage

    def getAnalogBatteryVoltage(self, inputPin):
        batteryVoltage = self.convertAnalogToVoltage(inputPin)
        print('Battery voltage at ' + str(datetime.now()) + ' is ' + str(batteryVoltage) + ' (input)')
        return batteryVoltage
    
    def convertAnalogToVoltage(self, pin):
        analogInput = self.readAnalogInput(pin)
        return round(self.convertToVoltage(analogInput), 2)
