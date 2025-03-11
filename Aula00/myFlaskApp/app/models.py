
posts_db = [
    {'id': 1, 'title': 'Primeiro Post', 'content': 'Este é o conteúdo do primeiro post.'},
    {'id': 2, 'title': 'Segundo Post', 'content': 'Conteúdo do segundo post.'}
]

def get_all_posts():
    return posts_db

def get_post_by_id(post_id):
    return next((post for post in posts_db if post['id'] == post_id), None)

def add_post(title, content):
    post_id = len(posts_db) + 1
    posts_db.append({'id': post_id, 'title': title, 'content': content})

def update_post(post_id, title, content):
    post = get_post_by_id(post_id)
    if post:
        post['title'] = title
        post['content'] = content

def delete_post(post_id):
    global posts_db
    posts_db = [post for post in posts_db if post['id'] != post_id]
