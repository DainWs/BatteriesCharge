import json
import requests
from .PostRequest import PostRequest

class BatteryEntryPostRequest(PostRequest):
    def __init__(self):
        super().__init__('http://localhost:8080/api/addBatteryEntry')

    def get(self, object):
        jsonObject = json.dumps(object.__dict__)
        requests.get('http://localhost:8080/api/getBatteryEntry', data = jsonObject);