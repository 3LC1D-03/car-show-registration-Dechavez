# Spec - Registration Dashboard

## 1. KPI Cards

- FR-K1: Display Total Registrations from `totalRegistrations`, Total Payments from `totalPayments`, Uncollected Payments from `uncollectedPayments`, Confirmed from `confirmed`, and Checked In from `checkedIn`.
- FR-K2: Optionally display Pending, Cancelled, and Collection Rate. Collection Rate is `totalPayments / totalFees * 100`; guard against a zero total fee.
- FR-K3: KPI values come only from `GET /api/registrations/summary`, not by summing the table rows.

## 2. Table

- FR-T1: Registration No., for example `CS27-0001`.
- FR-T2: Registration date formatted consistently.
- FR-T3: Participant name, with `contactNumber` or `email` displayed below in smaller text.
- FR-T4: Car make/model and plate number.
- FR-T5: Registration type: Exhibitor, Competitor, or VIP.
- FR-T6: Status badge: Pending, Confirmed, Checked In, or Cancelled.
- FR-T7: Registration fee and amount paid, for example `₱2,500.00 / ₱1,000.00`, aligned right.
- FR-T8: Payment badge: Unpaid, Partial, or Paid.

## 3. Filters

- FR-F1: Participant-name search debounced for approximately 400 ms and sent as `participantName`.
- FR-F2: Type filter for All, Exhibitor, Competitor, or VIP and sent as `type`.
- FR-F3: Status filter for All, Pending, Confirmed, CheckedIn, or Cancelled and sent as `status`.
- FR-F4: Clear filters resets the search, type, status, and page.
- FR-F5: Every filter or page-size change returns to page 1.
- FR-F6: An All option has value `""` and is omitted from query parameters.

## 4. Paging

- FR-P1: Prev, Next, and numbered page buttons; highlight the current page.
- FR-P2: Show `Showing x-y of N`.
- FR-P3: Page-size selector offers 5, 10, and 20 rows and returns to page 1.
- FR-P4: Disable buttons while loading and disable Prev on page 1 and Next on the last page.

## 5. States

- FR-S1: While loading, show `Loading registrations…` and never leave the page blank.
- FR-S2: For no matches, show `No registrations match your filters` and a Clear filters action.
- FR-S3: For API failures, show `Cannot reach the API…` and a Try again action.

## 6. API Contract

Do not rename fields in this contract.

`GET /api/registrations?participantName=&type=&status=&page=1&pageSize=10`

```json
{
  "items": [
    {
      "id": 1,
      "registrationNumber": "CS27-0001",
      "registrationDate": "2027-02-10T08:30:00Z",
      "participantName": "Participant Name",
      "contactNumber": "09123456789",
      "email": "participant@example.com",
      "address": "Sorsogon",
      "carMakeModel": "Toyota Supra",
      "plateNumber": "ABC 1234",
      "registrationType": "Exhibitor",
      "status": "Confirmed",
      "registrationFee": 2500,
      "amountPaid": 1000,
      "paymentStatus": "Partial"
    }
  ],
  "page": 1,
  "pageSize": 10,
  "totalCount": 25,
  "totalPages": 3
}
```

`GET /api/registrations/summary`

```json
{
  "totalRegistrations": 25,
  "confirmed": 10,
  "checkedIn": 6,
  "pending": 6,
  "cancelled": 3,
  "totalFees": 62500,
  "totalPayments": 40000,
  "uncollectedPayments": 22500
}
```

Errors use ASP.NET ProblemDetails. A 400 response may contain `errors: { Field: ["message"] }`.

## 7. Data Source

- FR-D1: `src/api/sample-data.js` contains at least 25 registrations that follow the contract.
- FR-D2: Sample functions filter, page, and calculate totals in the browser.
- FR-D3: `registrationsApi.js` exports the same function names and return shapes as the sample module.
- FR-D4: `frontend/README.md` explains how to switch between sample and real data.
- FR-D5: The real API is connected later by changing environment variables only.

## 8. UX Principles

- Visual hierarchy: KPIs, filters, table, then pagination.
- Use a consistent slate-neutral and indigo-primary palette, one font, and consistent spacing.
- Label controls and use action-word button labels.
- Provide hover, keyboard focus, active, and disabled feedback.
- Right-align amounts and format pesos and dates consistently.
- Support responsive cards and horizontally scrollable tables.
- Never use color as the only indication of status or payment.

## 9. Out of Scope

New Registration form, details modal, skeleton loading, and other bonus features are out of scope unless added explicitly to this spec first.

## 10. Git Workflow

- Use the existing `frontend/setup` branch as the only frontend development branch.
- Preserve its existing commit history and do not create another frontend branch.
- Make meaningful commits on `frontend/setup` and push them regularly.
- Do not open intermediate Pull Requests.
- After all frontend, verification, screenshot, and documentation work is complete, create one final PR from `frontend/setup` into `main`.
- The PR requires a full diff and commit-history review. Because the project is solo, the developer performs a self-review; any requirement for partner review must be confirmed with the instructor.
