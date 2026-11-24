@echo off
rem Starts the standalone Car Show 2027 API on http://localhost:5205 (Windows, no .NET install needed).
title Car Show 2027 API (standalone)

rem The API creates its database (carshow.db) in the current folder, so run it from the app folder.
cd /d "%~dp0app"

rem This mode turns on the Scalar documentation page and allows any localhost frontend port (CORS).
rem The URL fixes the port to 5205, the address the React frontend expects.
set ASPNETCORE_ENVIRONMENT=Development
set ASPNETCORE_URLS=http://localhost:5205

echo.
echo  Car Show 2027 API (standalone version)
echo  -------------------------------------
echo  API      http://localhost:5205
echo  Scalar   http://localhost:5205/scalar/v1
echo.
echo  Keep this window open while you test. Press Ctrl+C to stop the API.
echo.
rem Full path, so it also works on PCs that don't run programs from the current folder.
"%~dp0app\Api.exe"
pause
