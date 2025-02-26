import os

def criar_pastas_e_arquivos():
    for i in range(1, 11):  # Loop de 1 a 10
        pasta = f"aula_css{i}"
        os.makedirs(pasta, exist_ok=True)  # Cria a pasta se não existir
        
        # Criar index.html
        with open(os.path.join(pasta, "index.html"), "w") as html_file:
            html_file.write(
f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula {i}</title>
    <link rel='stylesheet' type='text/css' href='style.css'>
</head>
<body>
    <h1>Bem-vindo à Aula {i}</h1>
</body>
</html>""")
        
 # Criar style.css
        with open(os.path.join(pasta, "style.css"), "w") as css_file:
            css_file.write("""body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
}""")

if __name__ == "__main__":
    criar_pastas_e_arquivos()
    print("Pastas e arquivos criados com sucesso!")
