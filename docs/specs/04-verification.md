# Registration dashboard verification

The sample checks ran in Chrome with Vite in development mode and `VITE_USE_SAMPLE_DATA=true`.

| Spec | Check | Sample result | C# API |
| --- | --- | --- | --- |
| FR-K1–K3 | Summary values and peso formatting | Passed. 25 registrations, ₱48,750.00 paid, ₱29,750.00 uncollected, and a 62.1% collection rate. The status counts were 10 confirmed, 6 checked in, 6 pending, and 3 cancelled. | Pending |
| FR-T1–T8 | Registration table | Passed. All eight columns rendered. Checked a registration number, Manila date formatting, peso amounts, and text status labels. | Pending |
| FR-F1 | Debounced participant-name search | Passed. Typing `J` then `Juan` on page 3 made one sample-data call about 415 ms after the last input, using the complete name and page 1. | Pending Network check |
| FR-F2, FR-F3, FR-F6 | Type and status values | Passed. The sample module received `Exhibitor` and `CheckedIn`; the table reflected both. Clearing the filters restored empty values and all rows. | Pending query-string check |
| FR-F4, FR-F5 | Clear filters and reset page | Passed. Changing a filter on page 3 reset to page 1. Clear filters restored all 25 registrations. | Pending |
| FR-P1–P4 | Pagination | Passed. Checked Next, numbered navigation, first and last page limits, the active page, range text, and page-size changes from 10 to 5 to 20. Paging controls were disabled while loading. | Pending |
| FR-S1 | Loading | Passed. The dashboard displayed “Loading registrations…” while the sample request was pending. | Pending throttling check |
| FR-S2 | Empty result | Passed. Searching for `zzzz` displayed the empty message, “Showing 0 of 0”, and a working Clear filters action. | Pending |
| FR-S3 | Error and retry | Passed. A temporary failure injected into the sample request displayed the error. Try again recovered after the failure was removed. | Pending backend stop and restart |
| Spec §8 | Tablet and keyboard | Passed. At 768 px, cards wrapped and the table scrolled inside the page. Tab showed a visible focus outline. | Pending API-backed visual check |

Lint and the sample-mode production build passed. [Draft dashboard screenshot](../screenshots/draft-sample-dashboard.png)
