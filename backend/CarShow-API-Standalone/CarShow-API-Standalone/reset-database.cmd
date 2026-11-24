@echo off
rem Deletes the API's database. The next start creates it again with the 25 sample registrations.
rem Stop the API first (Ctrl+C in its window).
cd /d "%~dp0app"
if exist carshow.db (
  del /q carshow.db carshow.db-shm carshow.db-wal 2>nul
  if exist carshow.db (
    echo Could not delete the database. Stop the API first ^(Ctrl+C in its window^), then try again.
  ) else (
    echo Database deleted. Start the API again to get the original 25 registrations.
  )
) else (
  echo There is no database yet. It is created the first time you start the API.
)
pause
