from flask import Blueprint, render_template, request, redirect, url_for
from .models import get_all_posts, get_post_by_id, add_post, update_post, delete_post

main_controller = Blueprint('main', __name__)

@main_controller.route('/')
def index():
    posts = get_all_posts()  
    return render_template('index.html', posts=posts)

@main_controller.route('/create', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        
        add_post(title, content)

        return redirect(url_for('main.index')) 

    return render_template('create.html')

@main_controller.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_post(id):
    post = get_post_by_id(id)

    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        
        
        update_post(id, title, content)

        return redirect(url_for('main.index'))  

    return render_template('edit.html', post=post)

@main_controller.route('/delete/<int:id>', methods=['POST'])
def delete_post_route(id):
    delete_post(id)  # Exclui o post
    return redirect(url_for('main.index'))  
