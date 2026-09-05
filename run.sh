#!/bin/bash
echo "==================================================="
echo "  GDG Vibecoding 101 - MkDocs Documentation Server"
echo "==================================================="
echo ""

mkdir -p "docs/assets/images"
if [ -f "gdg-logo.png" ]; then
    cp -f "gdg-logo.png" "docs/assets/images/logo.png"
fi

if ! command -v python3 &> /dev/null; then
    echo "[!] Python3 not found. Please install Python 3.9+"
    exit 1
fi

if ! python3 -m mkdocs --version &> /dev/null; then
    echo "[*] Installing dependencies..."
    pip install -r requirements.txt
fi

echo "[+] Starting local documentation server at http://127.0.0.1:8000 ..."
python3 -m mkdocs serve -a 127.0.0.1:8000
