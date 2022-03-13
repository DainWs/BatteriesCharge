import json
import requests
from .PostRequest import PostRequest

class BatteryPostRequest(PostRequest):
    def __init__(self):
        super().__init__('http://localhost:8080/api/addBattery')

    def get(self, object):
        jsonObject = json.dumps(object.__dict__)
        requests.get('http://localhost:8080/api/getBattery', data = jsonObject);