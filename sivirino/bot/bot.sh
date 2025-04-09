#!/bin/bash

ARQUIVO_JS="now.js"

# Verifica se o arquivo existe
if [ ! -f "$ARQUIVO_JS" ]; then
    echo "Arquivo $ARQUIVO_JS não encontrado!"
    exit 1
fi

for i in $(seq 1 $RANDOM_NUM)
do
    echo "Executando $ARQUIVO_JS - Volta $i"
    node "$ARQUIVO_JS" > now.txt
    git add .
    git commit -m "commit $i"
done