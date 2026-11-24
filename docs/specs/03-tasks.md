# Task Checklist

## Phase 1 - Setup

- [x] Verify the existing repository and initial Git history.
- [x] Verify the active `frontend/setup` branch and preserve existing commits.
- [x] Add the backend placeholder and documentation folders.
- [x] Scaffold React with Vite.
- [x] Replace the Vite demo page with the dashboard.
- [x] Install and configure Tailwind CSS.
- [x] Create environment files.
- [x] Verify `.gitignore`.
- [x] Create the source folder structure.
- [x] Create the root README.
- [x] Complete the setup checkpoint and push to `frontend/setup`.

## Phase 2 - SDD Documents

- [x] Create `00-constitution.md`.
- [x] Create `01-spec.md`.
- [x] Create `02-plan.md`.
- [x] Create this task list.
- [x] Commit and push the specification documents on `frontend/setup`.

## T01 - Sample Data

- [x] Create at least 25 registrations in `src/api/sample-data.js`.
- [x] Include the required fields and mixed types, statuses, and payment states.
- [x] Implement `getRegistrations(params)`.
- [x] Implement `getSummary()`.
- [x] Verify filtering and paging calculations.

## T02 - API Module and Data Switch

- [x] Implement `src/api/registrationsApi.js`.
- [x] Implement `src/api/index.js`.
- [x] Use `VITE_USE_SAMPLE_DATA` to switch data sources.
- [x] Keep one return shape across sample and real APIs.

## T03 - Formatters and Debounce

- [x] Create `src/utils/formatters.js`.
- [x] Format pesos with Philippine currency.
- [x] Format dates consistently in Asia/Manila.
- [x] Create `src/hooks/useDebounce.js`.

## T04 - KPI Cards

- [x] Create `KpiCard.jsx`.
- [x] Create `KpiCards.jsx`.
- [x] Display required summary values.
- [x] Add optional cards where feasible.
- [x] Verify values come only from `getSummary()`.

## T05 - Badges

- [x] Create `StatusBadge.jsx`.
- [x] Create `PaymentBadge.jsx`.
- [x] Use distinct colors and visible text labels.
- [x] Provide a neutral unknown-value fallback.

## T06 - Registrations Table

- [x] Create `RegistrationTable.jsx`.
- [x] Display all required columns.
- [x] Format dates and amounts.
- [x] Enable horizontal scrolling and row hover.

## T07 - Registrations Page

- [x] Create page state for filters, paging, data, summary, loading, and error.
- [x] Fetch summary and registrations.
- [x] Prevent stale async responses.
- [x] Wire filter, clear, paging, and retry callbacks.

## T08 - Filters

- [x] Create `RegistrationFilters.jsx`.
- [x] Add participant-name search.
- [x] Add type and status selects.
- [x] Add Clear filters.
- [x] Reset the page to 1 on filter changes.

## T09 - Pagination

- [x] Create `Pagination.jsx`.
- [x] Add Prev, Next, and numbered pages.
- [x] Highlight the current page.
- [x] Show the `Showing x-y of N` summary.
- [x] Add a page-size selector for 5, 10, and 20 rows.
- [x] Disable unavailable controls.

## T10 - Loading, Empty, and Error States

- [x] Add loading feedback.
- [x] Add empty-results feedback.
- [x] Add API-error feedback with Try again.
- [x] Verify error, loading, empty, and table priority.

## T11 - Polish and UX Audit

- [x] Audit palette, spacing, and typography.
- [x] Add visible labels and action-word buttons.
- [x] Add hover and keyboard focus styles.
- [x] Verify responsive tablet behavior.
- [x] Ensure text accompanies status colors.

## T12 - Verification and Frontend README

- [x] Create `docs/specs/04-verification.md`.
- [x] Record sample-data verification results.
- [x] Create `frontend/README.md`.
- [x] Document sample/real API switching.
- [x] Push `frontend/setup`.

## T13 - Connect the Real API

- [x] Obtain a working C# API.
- [x] Run the instructor’s standalone API bundle locally and document startup.
- [x] Set the real API URL.
- [x] Switch `VITE_USE_SAMPLE_DATA=false`.
- [x] Verify KPIs, table, filters, and paging against API responses.

## T14 - API Verification

- [x] Fill in API verification results in `04-verification.md`.
- [x] Test loading, empty, error, filters, paging, and Network behavior.
- [x] Commit and push the API integration work on `frontend/setup`.

## Phase 5 - Submission Screenshots

- [x] Collect the 12 screenshots listed in the SDD guide, including the `frontend/setup` commit history.
- [x] Track the PNGs in the `Add required screenshots` commit.
- [x] Push the amended `frontend/setup` commit.
- [x] Confirm whether the submission needs supplementary evidence for #2 (address bar), #9 (JSON response), or #10 (history on `main`).
