from flask import Flask, request
from flask.ext import restful
from datetime import timedelta
from flask.ext.sqlalchemy import SQLAlchemy
from cors import crossdomain


app = Flask(__name__)
api = restful.Api(app, decorators=[crossdomain('*')])

##############################################################################
# database stuff START
##############################################################################

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), unique=True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Tag %r>' % self.name


##############################################################################
# API
##############################################################################

class HelloWorld(restful.Resource):
    def get(self):
        return {'message': 'hello world'}

api.add_resource(HelloWorld, '/')

class TagList(restful.Resource):
    def get(self):
        tags = []
        for tag in Tag.query.all():
            tags.append({'name': tag.name, 'id': tag.id})
        return tags

    def post(self):
        tag = Tag(request.json['name'])
        db.session.add(tag)
        db.session.commit()
        return {'name': tag.name, 'id': tag.id}


api.add_resource(TagList, '/tags')

class TagDetail(restful.Resource):
    def get(self, tag_id):
        return {'lookup': tag_id},

api.add_resource(TagDetail, '/tags/<string:tag_id>')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
