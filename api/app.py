from flask import Flask, request
from flask.ext import restful
from datetime import timedelta
from flask.ext.sqlalchemy import SQLAlchemy
from cors import crossdomain

# configure the application and the database
app = Flask(__name__)
api = restful.Api(app, decorators=[crossdomain('*')])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

# import the models and the views
import models
import views

# configure the routes
api.add_resource(views.HelloWorld, '/')
api.add_resource(views.TagList, '/tags')
api.add_resource(views.TagDetail, '/tags/<string:tag_id>')


# run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
