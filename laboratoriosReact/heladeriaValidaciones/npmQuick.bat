@echo off
setlocal enabledelayedexpansion
TITLE \,,/(-.-)\,,/ HERRAMIENTAS BASICAS NPM
MODE con:cols=75 lines=30

:menu
color B
cls
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo                    BASIC ANGULAR / REACT TOOLS
echo.
echo                    Opc. Angular -- Instalar paquetes
echo                    -------------------------------
echo.
echo                    [N] Instalar dependencias
echo                    [B] Instalar Bootstrap
echo                    [M] Instalar Material
echo                    [V] Instalar Validator
echo                    [S] ng serve [angular]
echo                    [R] npm start [react]
echo                    [Q] Abrir Proyecto [VS]
echo                    [X] Volver

echo.
SET /P TYPE=[N, B, M, S, R - X]? 

if /i "%TYPE%" == "n" call :npmInstall
if /i "%TYPE%" == "b" call :npmInstall bootstrap@latest
if /i "%TYPE%" == "v" call :npmInstall validator
if /i "%TYPE%" == "m" call :ngInstall @angular/material@latest
if /i "%TYPE%" == "r" call npm start
if /i "%TYPE%" == "s" call ng s -o
if /i "%TYPE%" == "q" call :visualStudio
if /i "%TYPE%" == "x" call :salir

goto :menu



:npmInstall
set "custom=%~1"
call npm install !custom!
pause
exit /b

:ngInstall
set "custom=%~1"
call ng add !custom!
pause
exit /b

:visualStudio

set "pathVs=C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\devenv.exe"

if exist "!pathVs!" (
    start "" "!pathVs!" !CD!
) else (
    echo El ejecutable de Visual Studio no se encuentra.
)
exit /b

:Salir
echo Cupable: Juan Carlos Linaje 2023
timeout /t 2 >nul
exit
endlocal