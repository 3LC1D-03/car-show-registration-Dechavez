# Car Show 2027 C# API

The Windows standalone API is included in this repository and uses Git LFS for `Api.exe`. Install Git LFS and run `git lfs install` before cloning. If you already cloned without Git LFS, run `git lfs install` and `git lfs pull` from the repository root.

Start the API from the repository root in PowerShell.

```powershell
& '.\backend\CarShow-API-Standalone\CarShow-API-Standalone\start-api.cmd'
```

Keep that window open while using the dashboard. The API listens on `http://localhost:5205` and serves Scalar at `http://localhost:5205/scalar/v1`.

The executable includes its .NET runtime. On first start, the API creates a local SQLite database with 25 seed registrations. After the API starts, [run the frontend](../frontend/README.md#run-with-the-c-api) to display those registrations through the real API.
