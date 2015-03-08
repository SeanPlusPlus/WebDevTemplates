from flask import Flask, request
from flask.ext import restful
from datetime import timedelta
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from cors import crossdomain
import sanitize

# configure the application and the database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)


##############################################################################
class Tag(db.Model):
##############################################################################

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), unique=True)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Tag %r>' % self.name


##############################################################################
class Main(restful.Resource):
##############################################################################
    def get(self):
        return {
            'resources': [
                'tags/:id',
                'tags',
            ]
        }


##############################################################################
class TagDetail(restful.Resource):
##############################################################################
    def get(self, tag_id):
        return {'lookup': tag_id},


##############################################################################
class TagList(restful.Resource):
##############################################################################
    def get(self):
        tags = []
        for tag in Tag.query.all():
            tags.append({'name': tag.name, 'id': tag.id})
        return tags

    def post(self):
        req = sanitize.tag(request.json)
        if 'error' in req:
            return {'message': data['error']['message']}, data['error']['code']
        tag = Tag(req['name'])
        db.session.add(tag)
        try:
            db.session.commit()
        except IntegrityError:
            return {'message': 'duplicate key exists'}, 302
        return {'name': tag.name, 'id': tag.id}


# configure the routes
api = restful.Api(app, decorators=[crossdomain('*')])
api.add_resource(Main,      '/')
api.add_resource(TagList,   '/tags')
api.add_resource(TagDetail, '/tags/<string:tag_id>')


# run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
