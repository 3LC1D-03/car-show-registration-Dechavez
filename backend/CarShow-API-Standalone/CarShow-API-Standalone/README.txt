CAR SHOW 2027 REGISTRATION API — STANDALONE VERSION (Windows)
==============================================================

The finished Car Show 2027 Registration API, compiled into one program that includes the .NET runtime.
Nothing needs to be installed: no .NET SDK, no .NET runtime, no database server.


WHAT YOU NEED
-------------
- Windows 10 or 11, 64-bit (x64). Windows on ARM also works through its built-in x64 emulation.
- About 150 MB of free disk space.


START THE API
-------------
1. Copy (or unzip) this whole folder anywhere, e.g. the Desktop or a USB drive.
   Keep the "app" folder next to the .cmd files.
2. Double-click  start-api.cmd
3. Wait until you see:   Now listening on: http://localhost:5205
4. Open in your browser:

       http://localhost:5205/scalar/v1      (interactive documentation: send requests here)

Keep the window open while you use the API. Press Ctrl+C in it to stop the API.

The first start may take a few seconds longer: Windows unpacks some files the first time.


THE DATA
--------
- The first start creates a database file (app\carshow.db) with 25 sample registrations.
- Everything you create, edit or delete is SAVED in that file, even after a restart.
- To start over with the original 25 registrations: stop the API, double-click  reset-database.cmd,
  then start the API again.
- To move your data to another PC, copy app\carshow.db along with the folder (with the API stopped).


USING IT WITH THE REACT DASHBOARD
---------------------------------
Start this API first, then the frontend (npm run dev in the frontend folder). The frontend's
.env.development must contain   VITE_API_BASE_URL=http://localhost:5205   (the default).
Any http://localhost port is allowed to call the API (CORS), so Vite's 5173 and preview's 4173 both work.


ENDPOINTS
---------
  GET     /api/registrations              list (filters: ?participantName= &type= &status= &page= &pageSize=)
  GET     /api/registrations/summary      totals for the dashboard
  GET     /api/registrations/{id}         one registration
  POST    /api/registrations              create
  PUT     /api/registrations/{id}         edit
  DELETE  /api/registrations/{id}         delete


IF SOMETHING GOES WRONG
-----------------------
"Windows protected your PC" (blue SmartScreen window)
    The program isn't signed. Click "More info", then "Run anyway".
    If the zip was downloaded: right-click the zip > Properties > tick "Unblock" > OK, then unzip it again.

The window opens and closes immediately
    Open a Command Prompt in this folder and run  start-api.cmd  to read the error message.

"Failed to bind to address http://localhost:5205: address already in use"
    Another API is already running on port 5205 (maybe another copy, or a project in Visual Studio).
    Stop it, then start this one again.

The browser says "This site can't be reached"
    The API is not running. Start it and wait for "Now listening on".

"Could not delete the database" when resetting
    The API is still running. Press Ctrl+C in its window first.

Different numbers than expected (not 25 registrations)
    The data has been changed. Reset the database (see THE DATA above).
