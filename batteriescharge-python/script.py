# Raspberry Pi Power Supply measure
# Author : DainWs
# Project ID: batteriescharge-python
import os, json, requests
from dotenv import load_dotenv
from models.Battery import Battery
from sockets.BatterySocket import BatterySocket
from sockets.MockBatterySocket import MockBatterySocket

# Loads .env inside os.environ array
load_dotenv()
enviroment = os.environ['ENVIROMENT']
apiUrl = os.environ['API_URL']

# Request batteries
response = requests.get(apiUrl + '/getBatteries')
batteries = []
for battery in json.loads(response.text):
    batterya = Battery(batteryModel = battery)
    batteries.append(Battery(batteryModel = battery))

# Start BatterySocket instance.
socket = MockBatterySocket()
if (enviroment == 'PRODUCTION'):
    socket = BatterySocket();

socket.batteries = batteries
socket.run()