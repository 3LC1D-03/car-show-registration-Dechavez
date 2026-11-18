# Task Checklist

## Phase 1 - Setup

- [ ] Verify the existing repository and initial Git history.
- [ ] Verify the active `frontend/setup` branch and preserve existing commits.
- [ ] Add the backend placeholder and documentation folders.
- [ ] Scaffold React with Vite.
- [ ] Remove Vite demo content.
- [ ] Install and configure Tailwind CSS.
- [ ] Create environment files.
- [ ] Verify `.gitignore`.
- [ ] Create the source folder structure.
- [ ] Create the root README.
- [ ] Complete the setup checkpoint and push to `frontend/setup`.

## Phase 2 - SDD Documents

- [ ] Create `00-constitution.md`.
- [ ] Create `01-spec.md`.
- [ ] Create `02-plan.md`.
- [ ] Create this task list.
- [ ] Commit and push the specification documents on `frontend/setup`.

## T01 - Sample Data

- [ ] Create at least 25 registrations in `src/api/sample-data.js`.
- [ ] Include the required fields and mixed types, statuses, and payment states.
- [ ] Implement `getRegistrations(params)`.
- [ ] Implement `getSummary()`.
- [ ] Verify filtering and paging calculations.

## T02 - API Module and Data Switch

- [ ] Implement `src/api/registrationsApi.js`.
- [ ] Implement `src/api/index.js`.
- [ ] Use `VITE_USE_SAMPLE_DATA` to switch data sources.
- [ ] Keep one return shape across sample and real APIs.

## T03 - Formatters and Debounce

- [ ] Create `src/utils/formatters.js`.
- [ ] Format pesos with Philippine currency.
- [ ] Format dates consistently in Asia/Manila.
- [ ] Create `src/hooks/useDebounce.js`.

## T04 - KPI Cards

- [ ] Create `KpiCard.jsx`.
- [ ] Create `KpiCards.jsx`.
- [ ] Display required summary values.
- [ ] Add optional cards where feasible.
- [ ] Verify values come only from `getSummary()`.

## T05 - Badges

- [ ] Create `StatusBadge.jsx`.
- [ ] Create `PaymentBadge.jsx`.
- [ ] Use distinct colors and visible text labels.
- [ ] Provide a neutral unknown-value fallback.

## T06 - Registrations Table

- [ ] Create `RegistrationTable.jsx`.
- [ ] Display all required columns.
- [ ] Format dates and amounts.
- [ ] Enable horizontal scrolling and row hover.

## T07 - Registrations Page

- [ ] Create page state for filters, paging, data, summary, loading, and error.
- [ ] Fetch summary and registrations.
- [ ] Prevent stale async responses.
- [ ] Wire filter, clear, paging, and retry callbacks.

## T08 - Filters

- [ ] Create `RegistrationFilters.jsx`.
- [ ] Add participant-name search.
- [ ] Add type and status selects.
- [ ] Add Clear filters.
- [ ] Reset the page to 1 on filter changes.

## T09 - Pagination

- [ ] Create `Pagination.jsx`.
- [ ] Add Prev, Next, and numbered pages.
- [ ] Highlight the current page.
- [ ] Show the `Showing x-y of N` summary.
- [ ] Add the page-size selector.
- [ ] Disable unavailable controls.

## T10 - Loading, Empty, and Error States

- [ ] Add loading feedback.
- [ ] Add empty-results feedback.
- [ ] Add API-error feedback with Try again.
- [ ] Verify error, loading, empty, and table priority.

## T11 - Polish and UX Audit

- [ ] Audit palette, spacing, and typography.
- [ ] Add visible labels and action-word buttons.
- [ ] Add hover and keyboard focus styles.
- [ ] Verify responsive tablet behavior.
- [ ] Ensure text accompanies status colors.

## T12 - Verification and Frontend README

- [ ] Create `docs/specs/04-verification.md`.
- [ ] Record sample-data verification results.
- [ ] Create `frontend/README.md`.
- [ ] Document sample/real API switching.
- [ ] Push `frontend/setup`.

## T13 - Connect the Real API (Later)

- [ ] Obtain a working C# API.
- [ ] Add the backend project if the instructor provides one.
- [ ] Set the real API URL.
- [ ] Switch `VITE_USE_SAMPLE_DATA=false`.
- [ ] Verify KPIs, table, filters, and paging against API responses.

## T14 - API Verification (Later)

- [ ] Fill in API verification results in `04-verification.md`.
- [ ] Test loading, empty, error, filters, paging, and Network behavior.
- [ ] Commit and push the API integration work on `frontend/setup`.

## T15 - Google Doc

- [ ] Create the Google Doc with cover and table of contents.
- [ ] Add all screenshot entries and explanations.
- [ ] Add five own-written reflection answers.
- [ ] Share with `vhinle@gmail.com` and set viewer access.
- [ ] Verify access in incognito mode.

## T16 - Final Merge and Submission

- [ ] Review `git log --oneline`, `git shortlog -sn`, and `git diff main...frontend/setup`.
- [ ] Push the completed `frontend/setup` branch.
- [ ] Create one final PR from `frontend/setup` into `main`.
- [ ] Review and self-review the final PR, then merge it into `main`.
- [ ] Verify the merged app runs from `main`.
- [ ] Verify repository history and ignored generated folders.
- [ ] Verify all required screenshots and documentation.
- [ ] Submit the Google Doc link in the LMS before November 25, 2026.
