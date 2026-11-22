# Registration dashboard verification

The sample checks ran in Chrome with Vite in development mode and `VITE_USE_SAMPLE_DATA=true`.

The live checks ran in Chrome against the instructor’s standalone C# API at `http://localhost:5205`, with `VITE_USE_SAMPLE_DATA=false`. The API contained 25 registrations.

| Spec | Check | Sample result | C# API |
| --- | --- | --- | --- |
| FR-K1–K3 | Summary values and peso formatting | Passed. 25 registrations, ₱48,750.00 paid, ₱29,750.00 uncollected, and a 62.1% collection rate. The status counts were 10 confirmed, 6 checked in, 6 pending, and 3 cancelled. | Passed. All eight cards matched the live summary, including ₱42,000.00 paid, ₱19,500.00 uncollected, and a 68.3% collection rate. |
| FR-T1–T8 | Registration table | Passed. All eight columns rendered. Checked a registration number, Manila date formatting, peso amounts, and text status labels. | Passed. Compared all eight columns in the first displayed row with the live JSON and checked the Manila date and peso formatting. |
| FR-F1 | Debounced participant-name search | Passed. Typing `J` then `Juan` on page 3 made one sample-data call about 415 ms after the last input, using the complete name and page 1. | Passed. Typing a participant name on page 3 produced one HTTP request with the complete name and page 1 about 405 ms after the last input. |
| FR-F2, FR-F3, FR-F6 | Type and status values | Passed. The sample module received `Exhibitor` and `CheckedIn`. The table reflected both. Clearing the filters restored empty values and all rows. | Passed. The browser sent `type=Exhibitor` and `status=CheckedIn`, and the displayed rows matched. Empty filters were omitted. |
| FR-F4, FR-F5 | Clear filters and reset page | Passed. Changing a filter on page 3 reset to page 1. Clear filters restored all 25 registrations. | Passed. Changing the type on page 3 requested page 1. Clear filters reset all three controls and restored all 25 registrations. |
| FR-P1–P4 | Pagination | Passed. Checked Next, numbered navigation, first and last page limits, the active page, range text, and page-size changes from 10 to 5 to 20. Paging controls were disabled while loading. | Passed. Checked pages 1 through 3, the current page, boundary buttons, range text, page sizes 5/10/20, and disabled navigation during loading. |
| FR-S1 | Loading | Passed. The dashboard displayed “Loading registrations…” while the sample request was pending. | Passed. The loading message appeared while Chrome throttled the live request. |
| FR-S2 | Empty result | Passed. Searching for `zzzz` displayed the empty message, “Showing 0 of 0”, and a working Clear filters action. | Passed. The live query for `zzzz` returned no rows, and Clear filters restored the table. |
| FR-S3 | Error and retry | Passed. A temporary failure injected into the sample request displayed the error. Try again recovered after the failure was removed. | Passed. Stopping the API and reloading displayed the error. Starting it again and clicking Try again restored the dashboard. |
| Spec §8 | Tablet and keyboard | Passed. At 768 px, cards wrapped and the table scrolled inside the page. Tab showed a visible focus outline. | Passed. Repeated the 768 px layout and keyboard checks with live data. |

Lint and the Vite build passed in both data modes during their respective checkpoints. [Sample dashboard draft](../screenshots/draft-sample-dashboard.png)
