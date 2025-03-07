from flask import Blueprint, render_template, request, redirect, url_for
from .models import get_all_posts, get_post_by_id, add_post, update_post, delete_post

main_controller = Blueprint('main', __name__)

# Rota para listar os posts
@main_controller.route('/')
def index():
    posts = get_all_posts()  # Buscar todos os posts simulando um banco de dados
    return render_template('index.html', posts=posts)

# Rota para criar um novo post
@main_controller.route('/create', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        
        # Adiciona o novo post na "base de dados"
        add_post(title, content)

        return redirect(url_for('main.index'))  # Redireciona para a lista de posts

    return render_template('create.html')

# Rota para editar um post
@main_controller.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_post(id):
    post = get_post_by_id(id)

    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        
        # Atualiza o post
        update_post(id, title, content)

        return redirect(url_for('main.index'))  # Redireciona para a lista de posts

    return render_template('edit.html', post=post)

# Rota para excluir um post
@main_controller.route('/delete/<int:id>', methods=['POST'])
def delete_post_route(id):
    delete_post(id)  # Exclui o post
    return redirect(url_for('main.index'))  # Redireciona para a lista de posts
