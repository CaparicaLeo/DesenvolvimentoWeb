from flask import Blueprint, render_template
from .models import posts_db

# Criando o Blueprint
main_controller = Blueprint('main', __name__)

# Rota principal
@main_controller.route('/')
def index():
    return render_template('index.html', posts=posts_db)
