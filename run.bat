@echo off
echo ===================================================
echo   GDG Vibecoding 101 - MkDocs Documentation Server
echo ===================================================
echo.

:: Ensure docs/assets/images directory exists
if not exist "docs\assets\images" mkdir "docs\assets\images"

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Python is not found in PATH. Please install Python 3.9+ from python.org
    pause
    exit /b 1
)

:: Check if mkdocs is installed
python -m mkdocs --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [*] Installing dependencies from requirements.txt...
    python -m pip install -r requirements.txt
    if %errorlevel% neq 0 (
        echo [!] Failed to install requirements. Please run 'pip install -r requirements.txt' manually.
        pause
        exit /b 1
    )
)

echo.
echo [+] Starting local documentation server at http://127.0.0.1:8000 ...
echo [+] Press Ctrl+C to stop the server.
echo.
python -m mkdocs serve -a 127.0.0.1:8000
pause
