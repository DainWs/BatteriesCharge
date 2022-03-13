# Raspberry Pi Power Supply measure
# Author : DainWs
import json
import requests
from models.Battery import Battery
from sockets.BatterySocketMock import BatterySocketMock

response = requests.get('http://localhost:8080/api/getBatteries');
batteries = []
for battery in json.loads(response.text):
    batterya = Battery(batteryModel = battery)
    batteries.append(Battery(batteryModel = battery))

socket = BatterySocketMock()
socket.batteries = batteries
socket.run()