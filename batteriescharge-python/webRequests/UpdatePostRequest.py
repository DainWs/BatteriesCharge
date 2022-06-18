from .PostRequest import PostRequest

class UpdatePostRequest(PostRequest):
    def __init__(self):
        super().__init__('/update')