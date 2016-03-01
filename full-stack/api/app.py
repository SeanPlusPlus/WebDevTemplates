from flask import Flask
from flask_restful import Resource, Api
from cors import crossdomain

app = Flask(__name__)
api = Api(app, decorators=[crossdomain('*')])


class HelloWorld(Resource):
    def get(self):
        return {
          "message": "home",
          "detail": "stoked"
        }

api.add_resource(HelloWorld, '/api/home')


class SessionDetail(Resource):
    def get(self):
        return {
          "name": "Sean",
          "login": "seanplusplus",
          "role": "site admin"
        }

api.add_resource(SessionDetail, '/api/session')


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
