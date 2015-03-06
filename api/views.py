from flask.ext import restful
from app import db
import models

##############################################################################
class HelloWorld(restful.Resource):
##############################################################################
    def get(self):
        return {'message': 'hello world'}


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
        for tag in models.Tag.query.all():
            tags.append({'name': tag.name, 'id': tag.id})
        return tags

    def post(self):
        tag = models.Tag(request.json['name'])
        db.session.add(tag)
        db.session.commit()
        return {'name': tag.name, 'id': tag.id}
