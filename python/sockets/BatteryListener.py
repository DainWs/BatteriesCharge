from webRequests.UpdatePostRequest import UpdatePostRequest

class BatteryListener:
    def actionPerformed(self, event, object):
        print(object)
        request = UpdatePostRequest()
        print(request.post(object))