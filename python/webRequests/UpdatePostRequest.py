from .PostRequest import PostRequest

class UpdatePostRequest(PostRequest):
    def __init__(self):
        super().__init__('http://localhost:8080/api/update')