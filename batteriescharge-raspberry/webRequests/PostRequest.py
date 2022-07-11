import os, requests, json

API_URL = os.environ['API_URL']

class PostRequest:
    def __init__(self, urlPath):
        self.url = API_URL + urlPath

    def post(self, object):
        jsonObject = json.dumps(object.__dict__)
        response = requests.post(
            self.url,
            data = jsonObject,
            json = jsonObject,
            headers = {"content-type":"application/json"}
        );
        return response;