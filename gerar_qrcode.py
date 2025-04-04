# generate_qrcode.py

import qrcode

def generate_qr_code(data, filename="qrcode.png"):
    """Gera um QR Code com os dados fornecidos e salva na pasta atual."""
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

# Gerar o QR Code com um link para o site de leitura
generate_qr_code("http://localhost:5000/foi_lido")
