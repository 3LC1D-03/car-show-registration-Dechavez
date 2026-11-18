# Plan

## State Ownership

State owned by `src/pages/RegistrationsPage.jsx`:

| State | Purpose |
|---|---|
| `filters` | Share participant name, type, and status with filters and the fetch effect |
| `page`, `pageSize` | Share pagination with the fetch effect |
| `data` | Supply table rows and pagination totals |
| `summary` | Supply KPI values |
| `loading`, `error` | Control loading, error, empty, and table states |

Child components receive props and callbacks only.

## Data Flow

1. The user changes a filter.
2. `RegistrationsPage` updates the filter state and resets the page.
3. `useDebounce` waits approximately 400 ms for the participant name.
4. The fetch effect calls `getRegistrations`.
5. The result updates `data`, then the table and pagination re-render.

## API Layer

- `src/api/index.js` is the only place that chooses sample or real data.
- `VITE_USE_SAMPLE_DATA=true` selects `sample-data.js`.
- `VITE_USE_SAMPLE_DATA=false` selects `registrationsApi.js`.
- Both modules export `getRegistrations(params)` and `getSummary()`.
- UI components do not import `sample-data.js` or `registrationsApi.js` directly.

## Git Workflow

- The existing `frontend/setup` branch is the only frontend development branch.
- Preserve all existing commits on `frontend/setup`.
- Commit meaningful completed work separately and push regularly.
- Do not create feature branches or open intermediate Pull Requests.
- When all planned frontend work is complete, create one final PR from `frontend/setup` into `main`.
- Use `git log --oneline`, `git shortlog -sn`, and `git diff main...frontend/setup` to review progress before the final PR.

## Styling

- Palette: slate for neutral UI and indigo for primary actions.
- Status colors: red, amber, green, blue, and slate as appropriate.
- Font: Tailwind default sans-serif.
- Spacing: primarily Tailwind `p-4`, `p-6`, and `gap-4`.
