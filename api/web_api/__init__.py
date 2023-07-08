from flask import Flask
from .models import db
from .routes import api

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5432/dinnerpoker-dev'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(api)

    with app.app_context():
        db.create_all()

    return app
