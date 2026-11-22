# Car Show Registration Dashboard

## Run with sample data

From the `frontend` directory:

```sh
npm install
npm run dev
```

Open `http://localhost:5173` or the URL Vite prints. The dashboard starts with 25 sample registrations.

## Data source

Set the following in `.env.development` for the dev server. If the file is missing, copy `.env.example` first.

```dotenv
VITE_USE_SAMPLE_DATA=true
VITE_API_BASE_URL=http://localhost:5205
```

Restart Vite after editing the environment file. Set `VITE_USE_SAMPLE_DATA=true` for sample data. When the C# API is available, start it, set `VITE_USE_SAMPLE_DATA=false`, and set `VITE_API_BASE_URL` to its base URL.

`src/api/index.js` selects the data source. Both sources expose `getRegistrations(params)` and `getSummary()`.

## Verify and build

```sh
npm run lint
npm run build -- --mode development
npm run preview
```

The explicit development mode applies the sample-data environment above when building. See the [verification checklist](../docs/specs/04-verification.md) for the flows checked against sample data and the checks pending for the C# API.

## Project structure

- `src/api/` contains the sample data, HTTP client, and data-source switch.
- `src/components/` contains the dashboard controls, cards, and table.
- `src/pages/` contains the dashboard and owns its state.
- `src/hooks/` and `src/utils/` contain debounce and formatters.
