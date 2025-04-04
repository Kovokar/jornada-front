# app.py

from flask import Flask
from db_connection import create_connection

app = Flask(__name__)

@app.route('/')
def index():
    # Tentar se conectar ao banco de dados
    conn = create_connection()

    if conn:
        # Aqui você pode usar o banco de dados para executar operações
        conn.close()
        return "Conexão com o banco de dados bem-sucedida!"
    else:
        return "Não foi possível conectar ao banco de dados."

if __name__ == "__main__":
    app.run(debug=True)
