# Exemplo de modelo simples (não está conectando a um banco de dados real)
class Post:
    def __init__(self, id, title, content):
        self.id = id
        self.title = title
        self.content = content

    def __repr__(self):
        return f"<Post {self.id}: {self.title}>"

# Lista simulando um banco de dados
posts_db = [
    Post(1, "Primeiro Post", "Este é o conteúdo do primeiro post."),
    Post(2, "Segundo Post", "Conteúdo do segundo post."),
]
