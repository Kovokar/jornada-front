#!/bin/bash

# Caminho para o arquivo JS
ARQUIVO_JS="now.js"

# Verifica se o arquivo existe
if [ -f "$ARQUIVO_JS" ]; then
    echo "Executando $ARQUIVO_JS com Node.js..."
    node "$ARQUIVO_JS"
    git add . && git commit -m "Atualização automática"
else
    echo "Arquivo $ARQUIVO_JS não encontrado!"
fi
