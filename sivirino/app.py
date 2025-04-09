# app.py

from flask import Flask, render_template, redirect, url_for
from db_connection import create_connection
import qrcode
import os

app = Flask(__name__)

# Função para gerar o QR Code
def generate_qr_code(data, filename="static/qrcode.png"):
    """Gera um QR Code com os dados fornecidos e salva na pasta 'static'."""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill="black", back_color="white")
    img.save(filename)
    print(f"QR Code gerado e salvo como {filename}")

@app.route('/')
def index():
    """Página principal que renderiza o template HTML."""
    # Gerar o QR Code para a rota /foi_lido
    generate_qr_code("http://localhost:5000/foi_lido")
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
    """Rota para incrementar a leitura do QR Code."""
    conn = create_connection()
    if conn:
        cursor = conn.cursor()
        # Incrementar o contador de leituras
        cursor.execute('UPDATE qr_read_count SET count = count + 1 WHERE id = 1')
        conn.commit()

        # Verificar a nova contagem
        cursor.execute('SELECT count FROM qr_read_count WHERE id = 1')
        row = cursor.fetchone()
        if row:
            count = row[0]
            cursor.close()
            conn.close()
            return f'O QR Code foi lido {count} vezes.'
        else:
            cursor.close()
            conn.close()
            return "QR Code não encontrado no banco de dados."
    else:
        return "Não foi possível conectar ao banco de dados."

if __name__ == "__main__":
    app.run(debug=True)
