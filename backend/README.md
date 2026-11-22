# Car Show 2027 C# API

Extract the instructor-provided Windows standalone bundle into this directory. With the package's original folder structure, run this from the repository root in PowerShell:

```powershell
& '.\backend\CarShow-API-Standalone\CarShow-API-Standalone\start-api.cmd'
```

Keep that window open while using the dashboard. The API listens on `http://localhost:5205` and serves Scalar at `http://localhost:5205/scalar/v1`.

The standalone executable includes its .NET runtime. The instructor's bundle and its SQLite database stay local. For a fresh checkout, obtain the bundle from the instructor.
