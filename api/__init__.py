# configure the application and the database
app = Flask(__name__)
api = restful.Api(app, decorators=[crossdomain('*')])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
