# app.py

from flask import Flask, render_template
from db_connection import create_connection

app = Flask(__name__)

@app.route('/')
def index():
    """Página principal que renderiza o template HTML."""
    return render_template('index.html')

@app.route('/ver_leitura', methods=['GET'])
def ver_leitura():
    """Rota para mostrar o número de vezes que o QR Code foi lido."""
    conn = create_connection()
    if conn:
        cursor = conn.cursor()
        cursor.execute('SELECT count FROM qr_read_count WHERE id = 1')
        row = cursor.fetchone()
        if row:
            count = row[0]
            cursor.close()
            conn.close()
            return f'O QR code foi lido {count} vezes.'
        else:
            cursor.close()
            conn.close()
            return "QR Code não encontrado no banco de dados."
    else:
        return "Não foi possível conectar ao banco de dados."

@app.route('/foi_lido', methods=['GET'])
def foi_lido():
    """Rota para verificar se o QR Code foi lido pelo menos uma vez."""
    conn = create_connection()
    if conn:
        cursor = conn.cursor()
        cursor.execute('SELECT count FROM qr_read_count WHERE id = 1')
        row = cursor.fetchone()
        if row:
            count = row[0]
            cursor.close()
            conn.close()
            if count > 0:
                return "O QR Code já foi lido pelo menos uma vez."
            else:
                return "O QR Code ainda não foi lido."
        else:
            cursor.close()
            conn.close()
            return "QR Code não encontrado no banco de dados."
    else:
        return "Não foi possível conectar ao banco de dados."

if __name__ == "__main__":
    app.run(debug=True)
