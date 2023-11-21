@echo off
setlocal enabledelayedexpansion
TITLE \,,/(-.-)\,,/ HERRAMIENTAS BASICAS NPM
MODE con:cols=75 lines=30

set "pathVS[1]=C:\Program Files\Microsoft Visual Studio\2022\Preview\Common7\IDE\devenv.exe"
set "pathVS[2]=C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\devenv.exe"
set "pathVS[3]=C:\Program Files\Microsoft Visual Studio\2022\Enterprise\Common7\IDE\devenv.exe"
set "pathVS[4]=C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\devenv.exe"
set "pathVS[5]=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\devenv.exe"
set "pathVS[6]=C:\Program Files (x86)\Microsoft Visual Studio\2019\Preview\Common7\IDE\devenv.exe"

:menu
MODE con:cols=75 lines=30
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
echo                    [F] Instalar Validator
echo                    [S] ng serve [angular]
echo                    [R] npm start [react]
echo                    [V] Abrir Proyecto [VS]
echo                    [X] Salir

echo.
SET /P TYPE=[N, B, M, S, R - X]? 

if /i "%TYPE%" == "n" call :npmInstall
if /i "%TYPE%" == "f" call :npmInstall validator
if /i "%TYPE%" == "b" call :npmInstall bootstrap@latest
if /i "%TYPE%" == "m" call :ngInstall @angular/material@latest
if /i "%TYPE%" == "r" call npm start
if /i "%TYPE%" == "s" call ng s -o
if /i "%TYPE%" == "v" call :vsMenu
if /i "%TYPE%" == "x" call :salir

goto :menu

:vsMenu
MODE con:cols=85 lines=30
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
echo                    Abrir Proyecto [Visual Studio]
echo                    -------------------------------
echo.

set "x=0"
 
for /l %%i in (1,1,6) do (
    if exist "!pathVS[%%i]!" (
        set /a "x+=1"
        set "optVS[!x!]=!pathVS[%%i]!"
        echo  [!x!] !pathVS[%%i]!
    )
)
echo  [X] Cancelar

if %x% LSS 1 (
	echo "No se encuentra ninguna ruta de Visual Studio"
	pause
	call :menu
)
echo.
SET /P TYPE=[1-%x%, X]? 
if /i "%TYPE%" == "x" call :menu
set /a "x+=1"
if /i !TYPE! geq !x! call :vsMenu 
call :visualStudio "!optVS[%TYPE%]!"

goto :vsMenu

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
set "VSlaucher=%~1"
echo !VSlaucher!

REM echo %1
start "" "!VSlaucher!" "!CD!"
call :Salir
exit /b

:Salir
echo Culpar a: Juan Carlos Linaje 2023
timeout /t 2 >nul
exit
endlocal