import requests
import json

class PostRequest:
    def __init__(self, url):
        self.url = url

    def post(self, object):
        jsonObject = json.dumps(object.__dict__)
        print(jsonObject)
        return requests.post(self.url, data = jsonObject, json = jsonObject, headers = {"content-type":"application/json"})

    def get(self, object):
        pass