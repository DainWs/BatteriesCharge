from webRequests.UpdatePostRequest import UpdatePostRequest

class BatteryUpdateListener:
    def actionPerformed(self, object):
        UpdatePostRequest().post(object)