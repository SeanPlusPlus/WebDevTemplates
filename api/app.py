from flask import Flask, request
from flask.ext import restful
from datetime import timedelta
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_restful_swagger import swagger
from cors import crossdomain
import sanitize

# configure the application and the database
app = Flask(__name__)
api = swagger.docs(restful.Api(app, decorators=[crossdomain('*')]), apiVersion='0.1')
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
                'tags/:name',
                'tags',
            ]
        }


##############################################################################
class TagDetail(restful.Resource):
##############################################################################

    @swagger.operation(
        notes='some really good notes',
        responseClass=Tag.__name__,
        nickname='upload',
        parameters=[
            {
              "name": "body",
              "description": "blueprint object that needs to be added. YAML.",
              "required": True,
              "allowMultiple": False,
              "dataType": "",
              "paramType": "body"
            }
          ],
        responseMessages=[
            {
              "code": 201,
              "message": "Created. The URL of the created blueprint should be in the Location header"
            },
            {
              "code": 405,
              "message": "Invalid input"
            }
          ]
        )


    def get(self, tag_name):
        tag = Tag.query.filter_by(name=tag_name).first()
        return helpers.row2dict(name)


##############################################################################
class TagList(restful.Resource):
##############################################################################
    def get(self):
        tags = []
        for tag in Tag.query.all():
            tags.append({'name': tag.name, 'id': tag.id})
        return tags

    def post(self):
        req = sanitize.tag(request.json, Tag.query.all())
        if 'error' in req:
            return {'message': data['error']['message']}, data['error']['code']
        tag = Tag(req['name'])
        db.session.add(tag)
        try:
            db.session.commit()
        except IntegrityError:
            return {
                'message': 'tag exists',
                'tag': req['name']
            }, 302
        return {'name': tag.name, 'id': tag.id}


# configure the routes
api.add_resource(Main,      '/')
api.add_resource(TagList,   '/tags')
api.add_resource(TagDetail, '/tags/<string:tag_name>')


# run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=True)
