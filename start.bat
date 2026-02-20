@echo off
cd /d %~dp0
set PATH=%~dp0node_modules\.bin;%PATH%
react-scripts start
