import qrcode
import psycopg2
from flask import Flask
from psycopg2 import sql

app = Flask(__name__)

# Configurações de conexão com o banco PostgreSQL
DB_HOST = "localhost"  # ou o IP do seu servidor PostgreSQL
DB_NAME = "qrcode_db"
DB_USER = "seu_usuario"  # substitua pelo seu usuário PostgreSQL
DB_PASSWORD = "sua_senha"  # substitua pela sua senha do PostgreSQL

# Conectar ao banco de dados PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn

# Função para gerar QR Code
def gerar_qr_code():
    url = "http://localhost:5000/ler/1"
    qr = qrcode.make(url)
    qr.save("qrcode.png")

# Rota para ler o QR Code e atualizar a contagem
@app.route('/ler/<int:id>', methods=['GET'])
def ler_qr(id):
    # Conectar ao banco de dados
    conn = get_db_connection()
    cursor = conn.cursor()

    # Atualizar a contagem de leituras
    cursor.execute('SELECT count FROM qr_read_count WHERE id = 1')
    row = cursor.fetchone()
    if row:
        count = row[0] + 1
        cursor.execute('UPDATE qr_read_count SET count = %s WHERE id = 1', (count,))
        conn.commit()
        return f'O QR code foi lido {count} vezes.'
    else:
        return "QR Code não encontrado."

    # Fechar a conexão
    cursor.close()
    conn.close()

if __name__ == "__main__":
    # Gerar o QR code
    gerar_qr_code()
    print("QR Code gerado e salvo como 'qrcode.png'!")
    # Rodar o servidor Flask
    app.run(debug=True)
