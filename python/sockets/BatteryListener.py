from webRequests.BatteryEntryPostRequest import BatteryEntryPostRequest
from webRequests.BatteryPostRequest import BatteryPostRequest

class BatteryListener:
    def actionPerformed(self, type, object):
        print(object)
        request = ''
        if (type == 'battery'):
            request = BatteryPostRequest()
        else:
            request = BatteryEntryPostRequest()
        
        print(request.post(object).json())