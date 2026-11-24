# Car Show Registration Dashboard

## Run with the C# API

Start the [standalone C# API](../backend/README.md) first.

From the `frontend` directory:

```sh
npm install
npm run dev
```

Open `http://localhost:5173` or the localhost URL Vite prints. The dashboard loads registrations from the C# API.

## Data source

Set the following in `.env.development` for the dev server. If the file is missing, copy `.env.example` first.

```dotenv
VITE_USE_SAMPLE_DATA=false
VITE_API_BASE_URL=http://localhost:5205
```

For the local sample dataset, create `.env.development.local` with `VITE_USE_SAMPLE_DATA=true`. Set it to `false` or remove the override to return to the API. Restart Vite after changing environment settings.

`src/api/index.js` selects the data source. Both sources expose `getRegistrations(params)` and `getSummary()`.

## Verify and build

```sh
npm run lint
npm run build -- --mode development
npm run preview
```

Development mode applies the same data-source settings to the build. Keep the API running when previewing a live build. See the [verification checklist](../docs/specs/04-verification.md) for the tested dashboard flows.

## Project structure

- `src/api/` contains the sample data, HTTP client, and data-source switch.
- `src/components/` contains the dashboard controls, cards, and table.
- `src/pages/` contains the dashboard and owns its state.
- `src/hooks/` and `src/utils/` contain debounce and formatters.
