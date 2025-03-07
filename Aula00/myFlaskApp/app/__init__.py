from flask import Flask
from .controllers import main_controller

def create_app():
    app = Flask(__name__)

    # Registrar blueprints
    app.register_blueprint(main_controller)

    return app
