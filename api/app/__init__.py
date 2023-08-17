from flask import Flask
from .models import db
from .routes import api
from .seed import seed_data

def create_app():
    app = Flask(__name__, static_folder='../../client/build', static_url_path='/')
    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5432/dinnerpoker-dev'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(api)

    with app.app_context():
        db.create_all()
        seed_data()

    return app
