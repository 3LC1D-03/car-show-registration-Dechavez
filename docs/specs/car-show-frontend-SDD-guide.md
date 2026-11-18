# Car Show Registration System — Frontend (React + Vite + Tailwind)
## Spec-Driven Development (SDD) Step-by-Step Guide — Solo Developer Edition

**Course:** Integrative Programming 2 · **Instructor:** Elvin Manuel R. Luces, MIT (CCDI Sorsogon)
**Your role:** Frontend Developer (working **solo**) · **Deadline:** **November 25, 2026**
**Stack:** React JS (JavaScript, no TypeScript) · Vite · Tailwind CSS · Git/GitHub

> ### Solo-project status
> The PDF assumes a team of 2 (Backend + Frontend). You are working alone and will handle the frontend. **The C# API will be connected later.**
> So the plan is:
> 1. Build and finish the **entire UI against sample data** (this is exactly what the PDF's "sample data first" section is for).
> 2. Keep the API layer ready so connecting the real API later is a **one-line `.env` change**.
> 3. Do **Phase 4 (API connection)** and the API-dependent screenshots as soon as a backend is available.
>
> ⚠️ Some graded items **require the real API** (Screenshot 2 "data from the C# API", 8 "API stopped", 9 "Network tab", 11 "API + React running together", and the "Connect dashboard to the C# API" commit). Those stay open until the API exists. **Ask your instructor** how solo students should handle the backend (for example, whether the LMS C# template can be used as your `backend/`).

---

## How to use this guide

This guide turns the instructor's PDF into an **SDD workflow**: write down *what* to build (spec) and *how* (plan), break it into small *tasks*, implement one at a time, then *verify* against the spec.

**Legend**

| Symbol | Meaning |
|---|---|
| 🛑 **CHECKPOINT** | **You** must do this by hand before starting the next step (run, commit, push, screenshot). |
| 📸 **DRAFT** | Practice/backup screenshot (sample data). Fine to keep, but the final ones should use the real API. |
| 📸 **FINAL** | Graded screenshot from your running app with the **real C# API**. |
| ⏳ **LATER** | Waits until the backend/API is available. |
| 🤖 **PROMPT** | Copy-paste prompt for your AI coding assistant (or your own task brief). |

> **Academic-integrity note:** The PDF says every commit must be *your own work* under *your own GitHub account*, and reflection answers must be *in your own words* with examples from *your* project. Use AI to speed up, but read, run, and understand every file you commit. You will have to explain it.

---

## 0. Project at a glance

**What you are building:** a *Registration Dashboard* for event staff with:
1. **KPI cards** (from `GET /api/registrations/summary`)
2. **Filters** (name search, type, status, clear), sent to the API as query params
3. **Registrations table**
4. **Pagination** (prev/next, page numbers, "Showing x–y of N", page-size selector)
5. **Loading / empty / error states**
6. **Sample data first**, then the real API (later)

**Deliverables**
- GitHub repo `car-show-registration-<surname1>-<surname2>` (backend + frontend; `main` has final working code). *Solo: confirm the exact repo name with your instructor; this guide uses `car-show-registration-<surname>` as a placeholder.*
- ≥ **10 meaningful commits** under your own GitHub account
- Develop on the existing `frontend/setup` branch and merge it into `main` through **one final Pull Request**
- `frontend/README.md` explaining how to switch sample ↔ real API
- Root `README.md` with your role and how to run the apps
- 11 screenshots (12 files with 5a/5b) in `docs/screenshots/` **and** in one Google Doc
- 5 reflection answers (≥ 5 sentences each) in the same Google Doc
- Google Doc link submitted in the CCDI LMS Submission Bin

### Things in the PDF to clarify with your instructor

| Issue | Suggested handling |
|---|---|
| PDF is written for 2 people; you are solo | Tell the instructor; ask about the backend (template from LMS?) and whether PRs may be self-merged. |
| PDF says PRs must be **reviewed by your partner** | You have no partner. Create only the final PR from `frontend/setup` to `main`, self-review the full diff and commit history, and confirm that self-review is acceptable. Optionally ask a classmate or the instructor to review. |
| Doc name says `CarShow-Backend-Documentation-<Surname>` but the example says `CarShow-Frontend-Documentation-Reyes` | Use **`CarShow-Frontend-Documentation-<Surname>`** and confirm. |
| Screenshot rules mention "POST", "8a/8b/8c", "9a/9b", "section 3G" | Backend leftovers. Label images clearly (e.g. *5a – Filter by Type*) and explain correctness against **section 3C of the PDF**. |
| Instructor collaborator: `vhinle – vhinle@gmail.com` | Add this exact account as a collaborator and as Doc commenter. |

### Suggested schedule (7 days left)

| Date | Goal |
|---|---|
| Nov 18–19 | Phase 1–2: repo, Vite, Tailwind, specs; T01–T04 |
| Nov 20–21 | T05–T11: badges, table, filters, pagination, states, polish |
| Nov 22 | T12: frontend README; start Google Doc; draft screenshots/reflection notes |
| Nov 23–24 | **Phase 4: connect API** (if available), final screenshots, verification |
| Nov 25 | Final merge to `main`, check sharing in incognito, **submit** |

If the API is not ready by Nov 23, tell your instructor early and submit what you have (sample-data build, complete docs) rather than waiting.

---

## 1. The SDD loop

```
CONSTITUTION → SPEC → PLAN → TASKS → IMPLEMENT (1 task) → VERIFY → COMMIT / PUSH / 📸 → next task
   (rules)     (what)  (how)  (order)   (small change)     (vs spec)      (🛑 checkpoint)
```

**Rules**
1. Never implement something that isn't in the spec. If it's missing, **edit the spec first**.
2. One task = one focused change = one (or a few) commits.
3. After every task: run the app, tick the acceptance criteria, then commit.
4. Never rename API fields (the JSON contract is fixed by the PDF).

**SDD files (commit them):**
```
car-show-registration/
├── backend/            ← placeholder now; real C# API later
├── frontend/
│   └── README.md
├── docs/
│   ├── screenshots/
│   └── specs/
│       ├── 00-constitution.md
│       ├── 01-spec.md
│       ├── 02-plan.md
│       ├── 03-tasks.md
│       └── 04-verification.md
└── README.md
```

---

# PHASE 1 — Setup (Repo, React app, Tailwind, env)

### Step 1.1 — Verify the repository setup

The repository and initial Git history should already exist. If this step is complete, verify rather than recreating or overwriting it:

1. Confirm the repository layout includes `backend/`, `frontend/`, `docs/screenshots/`, `docs/specs/`, and a root `README.md`. The `backend/` folder is a placeholder until the API is connected.
2. Verify Git and the remote are configured:
   ```bash
   git status
   git remote -v
   git log --oneline
   ```
3. Keep the existing initial repository commit. Do not reinitialize the repository or create another initial commit.
4. Confirm the GitHub repository name with your instructor if needed. Use `car-show-registration-<surname>` as a placeholder.
5. **Add the instructor:** GitHub repo → **Settings → Collaborators → Add people** → `vhinle` (vhinle@gmail.com). Keep the repo accessible to them.

### Step 1.2 — Verify the existing setup branch

Your existing `frontend/setup` branch has already been created. Do not create another frontend branch.

```bash
git branch --show-current
git status
```

The first command must show `frontend/setup`, and the second command must show the expected working-tree state. Preserve the branch and all existing commits. Work directly on `frontend/setup` for every remaining phase.

### Step 1.3 — Scaffold React with Vite (from the **repo root**)

If the frontend is already scaffolded, verify it and skip recreating it. Do not remove or overwrite existing scaffold commits:

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
```
Open the URL shown (usually `http://localhost:5173`). Stop the server with `Ctrl+C`.

> If Vite asks about experimental options, choose the **standard/default** option.

### Step 1.4 — Remove Vite demo content

- Delete `src/App.css`
- Delete everything in `src/assets/`
- Replace `src/App.jsx` with:
  ```jsx
  export default function App() {
    return <h1 className="text-2xl font-bold p-6">Car Show 2027</h1>;
  }
  ```
- Make sure `src/main.jsx` no longer imports `App.css`.

### Step 1.5 — Install and configure Tailwind CSS (Vite plugin)

```bash
npm install tailwindcss @tailwindcss/vite
```

`vite.config.js`:
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

`src/index.css` (replace everything):
```css
@import "tailwindcss";
```

Ensure `src/main.jsx` has `import "./index.css";`. Run `npm run dev`; the `<h1>` should be styled. (If commands differ in your installed version, follow the Vite guide on tailwindcss.com/docs.)

### Step 1.6 — Environment files

Create `frontend/.env.development`:
```
# Real API (connect later; use the real port from the backend)
VITE_API_BASE_URL=http://localhost:5205

# true = use local sample data, false = call the real API
VITE_USE_SAMPLE_DATA=true
```
Also create `frontend/.env.example` with the same keys. Read values with `import.meta.env.VITE_...`. **Restart `npm run dev` whenever you change `.env` files.**

### Step 1.7 — .gitignore (do NOT commit `node_modules/` or `dist/`)

Vite already creates `frontend/.gitignore`. Verify it lists `node_modules` and `dist`:
```bash
cat .gitignore
git status      # node_modules must NOT appear
```

### Step 1.8 — Create the folder structure

```bash
mkdir -p src/api src/hooks src/components src/pages src/utils
touch src/api/registrationsApi.js src/api/sample-data.js src/api/index.js
touch src/hooks/useDebounce.js src/utils/formatters.js
touch src/components/{KpiCard,KpiCards,RegistrationFilters,RegistrationTable,Pagination,StatusBadge,PaymentBadge}.jsx
touch src/pages/RegistrationsPage.jsx
```
(On Windows PowerShell, use `New-Item -ItemType File ...` or create the files in your editor.)

### Step 1.9 — Root README (role + how to run)

```markdown
# Car Show Registration System

| MEMBER | ROLE |
|---|---|
| <Your Name> | Frontend Developer (solo project) |
| — | Backend API: to be connected soon |

## How to run
### Frontend
cd frontend && npm install && npm run dev

### Backend (when available)
cd backend && dotnet run --project Api
```

### 🛑 CHECKPOINT 1 — Setup done
- [x] `npm run dev` shows a Tailwind-styled page
- [x] `node_modules/` and `dist/` are **not** tracked (`git status`)
- [ ] Instructor `vhinle` appears under repo **Settings → Collaborators**
- [x] **Commit:** `git add . && git commit -m "Scaffold React app with Vite and Tailwind"`
- [x] **Commit:** `git commit -am "Add README role table and .env.example"` (stage the new files first)
- [x] `git push -u origin frontend/setup`
- [ ] 📸 **DRAFT:** `frontend/src` folder tree (retake as final **Screenshot 1** at the end)

---

# PHASE 2 — Write the SDD documents

Write these four files in `docs/specs/`.

### Step 2.1 — `00-constitution.md`

```markdown
# Constitution
1. Stack: React (JS), Vite, Tailwind. No other UI libraries.
2. Do not rename API fields. The contract in 01-spec.md section 6 is final.
3. Filtering, paging, and KPI totals come from the API (or the sample-data stand-in), never calculated from rows on screen.
4. One color palette (2–3 main + status colors), one font, consistent spacing.
5. Color is never the only cue: always show text labels.
6. Components are small and reusable; state lives in RegistrationsPage.
7. All UI code imports data functions only from src/api/index.js.
8. Each task ends with a commit, a push, and (when relevant) a screenshot.
9. No node_modules/ or dist/ in Git.
```

### Step 2.2 — `01-spec.md` (WHAT)

```markdown
# Spec — Registration Dashboard

## 1. KPI Cards (source: GET /api/registrations/summary)
- FR-K1 Cards: Total Registrations (totalRegistrations, number), Total Payments (totalPayments, ₱),
  Uncollected Payments (uncollectedPayments, ₱), Confirmed (confirmed), Checked In (checkedIn).
- FR-K2 (optional) Pending/Cancelled; Collection Rate = totalPayments ÷ totalFees × 100 (%).
- FR-K3 Values come from the summary endpoint, NOT from summing the table rows.

## 2. Table columns (minimum)
- FR-T1 Registration No. (e.g. CS27-0001)
- FR-T2 Date formatted "Feb 10, 2027 08:30 AM"
- FR-T3 Participant name; contactNumber or email smaller underneath
- FR-T4 Car: carMakeModel + plateNumber
- FR-T5 Type: Exhibitor / Competitor / VIP
- FR-T6 Status: colored badge (Pending / Confirmed / CheckedIn / Cancelled)
- FR-T7 Fee / Paid: "₱2,500.00 / ₱1,000.00", right-aligned
- FR-T8 Payment badge: Unpaid (red), Partial (amber), Paid (green), with text label

## 3. Filters (sent as query params)
- FR-F1 Name search, text input, debounced ~400 ms -> participantName
- FR-F2 Type dropdown (All, Exhibitor, Competitor, VIP) -> type
- FR-F3 Status dropdown (All, Pending, Confirmed, CheckedIn, Cancelled) -> status
- FR-F4 "Clear filters" button resets everything
- FR-F5 Any filter change returns to page 1
- FR-F6 "All" = param omitted (not sent as empty or "All")

## 4. Paging
- FR-P1 Prev / Next and numbered page buttons; current page highlighted
- FR-P2 Summary "Showing 1–10 of 25"
- FR-P3 Page-size selector (5, 10, 20); changing it goes to page 1
- FR-P4 Buttons disabled while loading and at first/last page

## 5. States
- FR-S1 Loading: "Loading registrations…" (or skeletons); page never blank
- FR-S2 Empty: "No registrations match your filters" + "Clear filters" button
- FR-S3 Error: "Cannot reach the API…" + "Try again" button

## 6. API contract (do not rename fields)
GET /api/registrations?participantName=&type=&status=&page=1&pageSize=10
-> { items:[{ id, registrationNumber, registrationDate, participantName, contactNumber, email,
   address, carMakeModel, plateNumber, registrationType, status, registrationFee,
   amountPaid, paymentStatus }], page, pageSize, totalCount, totalPages }
GET /api/registrations/summary
-> { totalRegistrations, confirmed, checkedIn, pending, cancelled,
   totalFees, totalPayments, uncollectedPayments }
Errors: ProblemDetails; 400 has { errors: { Field: ["msg"] } }.

## 7. Data source
- FR-D1 src/api/sample-data.js: >= 25 registrations following the contract
- FR-D2 getRegistrations(params) and getSummary() filter/page/total in the browser
- FR-D3 registrationsApi.js has the SAME function names and return shapes (real fetch)
- FR-D4 frontend/README.md explains how to switch
- FR-D5 The real API is connected later by changing .env only

## 8. UX principles
Visual hierarchy (KPIs -> filters -> table -> pagination); consistency; labeled controls with
action-word buttons; meaningful color + text; hover/focus/disabled/active feedback;
right-aligned amounts, consistent ₱ and date format; responsive (cards wrap, table scrolls horizontally).

## 9. Out of scope (unless bonus)
New Registration form (POST, 400/409 errors), details modal (GET /{id}), skeleton loading.
```

### Step 2.3 — `02-plan.md` (HOW)

```markdown
# Plan

## State ownership (all in pages/RegistrationsPage.jsx)
| State | Why here |
|---|---|
| filters {participantName, type, status} | Shared by Filters (inputs) and the fetch effect |
| page, pageSize | Shared by Pagination and the fetch effect |
| data {items, totalCount, totalPages, ...} | Shared by Table and Pagination |
| summary | Used by KpiCards |
| loading, error | Shared by Table/Pagination/messages |
Child components receive props + callbacks only.

## Data flow
User types -> onChange updates filters.participantName + page=1 -> useDebounce(400ms)
-> effect runs -> getRegistrations({...}) -> setData -> Table + Pagination re-render.

## API layer
src/api/index.js picks sample-data.js or registrationsApi.js using VITE_USE_SAMPLE_DATA.
Both export getRegistrations(params) and getSummary().

## Styling
Palette: slate (neutral) + indigo (primary). Status colors: red/amber/green (+ blue/slate).
One font (Tailwind default sans). Spacing: p-4/p-6, gap-4.
```

### Step 2.4 — `03-tasks.md`
Paste the task list (T01–T16 below) as a checklist and tick it off as you go.

### 🛑 CHECKPOINT 2
- [ ] Spec files committed: **Commit:** `Add SDD constitution, spec, plan and task list`
- [ ] `git push`
- [ ] Stay on `frontend/setup`; do not create or merge another branch
- [ ] Continue to Phase 3

---

# PHASE 3 — Implement, task by task (sample data)

### Standard 🤖 PROMPT prefix (use for every task)

```
I'm building the Car Show frontend (React + Vite + JavaScript + Tailwind) as a solo developer.
Read docs/specs/00-constitution.md, 01-spec.md and 02-plan.md first.
Implement ONLY task <T##> below. Don't change files outside the listed ones.
Don't rename any API fields. Keep code simple and commented so I can explain it.
When done, list which spec IDs (FR-xx) are satisfied and how I can test them.
```

### Branch workflow

Keep the existing `frontend/setup` branch as the only frontend development branch. Complete T01–T16 on this branch:

| Work area | Tasks |
|---|---|
| Setup and specifications | Phase 1–2 |
| Sample data and KPIs | T01–T04 |
| Table and filters | T05–T08 |
| Paging and states | T09–T12 |
| API integration | T13–T14 (later) |
| Documentation and final adjustments | T15–T16 |

Commit each meaningful completed piece of work separately, push regularly, and do not open any intermediate Pull Request. The only Pull Request will be created after all planned frontend work is complete, from `frontend/setup` into `main`.

---

## T01 — Sample data (FR-D1, FR-D2)

**File:** `src/api/sample-data.js`

- ≥ **25** registrations, numbers `CS27-0001` … `CS27-0025`
- Mix of types, statuses, and payments
- `paymentStatus` consistent: `Unpaid` if `amountPaid === 0`; `Partial` if `0 < amountPaid < registrationFee`; `Paid` if `amountPaid >= registrationFee`
- Tip: aim for 10 Confirmed / 6 CheckedIn / 6 Pending / 3 Cancelled (matches the PDF example)
- ISO dates like `"2027-02-10T08:30:00Z"`; Filipino-style names/places (Sorsogon, Legazpi, Naga…)

```js
export async function getRegistrations({ participantName = "", type = "", status = "", page = 1, pageSize = 10 } = {}) {
  await new Promise((r) => setTimeout(r, 400)); // simulate network so the loading state is visible
  const rows = REGISTRATIONS.filter((r) =>
    (!participantName || r.participantName.toLowerCase().includes(participantName.toLowerCase())) &&
    (!type || r.registrationType === type) &&
    (!status || r.status === status)
  );
  const totalCount = rows.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const start = (page - 1) * pageSize;
  return { items: rows.slice(start, start + pageSize), page, pageSize, totalCount, totalPages };
}

export async function getSummary() {
  await new Promise((r) => setTimeout(r, 300));
  const totalFees = REGISTRATIONS.reduce((s, r) => s + r.registrationFee, 0);
  const totalPayments = REGISTRATIONS.reduce((s, r) => s + r.amountPaid, 0);
  return {
    totalRegistrations: REGISTRATIONS.length,
    confirmed: REGISTRATIONS.filter((r) => r.status === "Confirmed").length,
    checkedIn: REGISTRATIONS.filter((r) => r.status === "CheckedIn").length,
    pending: REGISTRATIONS.filter((r) => r.status === "Pending").length,
    cancelled: REGISTRATIONS.filter((r) => r.status === "Cancelled").length,
    totalFees, totalPayments, uncollectedPayments: totalFees - totalPayments,
  };
}
```

### 🛑 CHECKPOINT T01
- [ ] Verify in the console: 25+ items, filters/paging math correct
- [ ] Verify `git branch --show-current` shows `frontend/setup`
- [ ] **Commit:** `Add sample registration data and local API functions`
- [ ] Push the existing branch

---

## T02 — API module + sample/real switch (FR-D3, FR-D5)

**Files:** `src/api/registrationsApi.js`, `src/api/index.js`

```js
// registrationsApi.js (real API; written now, used later)
const BASE = import.meta.env.VITE_API_BASE_URL;

async function request(path, params = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== "" && v !== null && v !== undefined) qs.append(k, v); // FR-F6
  });
  const url = `${BASE}${path}${qs.toString() ? `?${qs}` : ""}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const getRegistrations = (params) => request("/api/registrations", params);
export const getSummary = () => request("/api/registrations/summary");
```

```js
// index.js: the ONLY place that decides sample vs real
import * as sample from "./sample-data";
import * as real from "./registrationsApi";

const useSample = import.meta.env.VITE_USE_SAMPLE_DATA === "true";
export const { getRegistrations, getSummary } = useSample ? sample : real;
```

All UI code imports from `src/api/index.js` only.

### 🛑 CHECKPOINT T02
- [ ] **Commit:** `Add API module with sample/real data switch`
- [ ] push

---

## T03 — Formatters + useDebounce

**Files:** `src/utils/formatters.js`, `src/hooks/useDebounce.js`

```js
// formatters.js
const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" });
export const formatPeso = (n) => peso.format(n ?? 0);          // ₱2,500.00

const dt = new Intl.DateTimeFormat("en-US", {
  month: "short", day: "2-digit", year: "numeric",
  hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Manila",
});
export const formatDate = (iso) => dt.format(new Date(iso));   // Feb 10, 2027, 04:30 PM
```
> The API returns UTC (`...Z`). Use one fixed time zone everywhere. If you need the PDF's exact style (`Feb 10, 2027 08:30 AM`, no comma before the year's time), build the string from `formatToParts`. Keep the **same format everywhere**.

```js
// useDebounce.js
import { useEffect, useState } from "react";
export default function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
```

### 🛑 CHECKPOINT T03
- [ ] **Commit:** `Add currency/date formatters and useDebounce hook`
- [ ] push

---

## T04 — KPI cards (FR-K1–K3)

**Files:** `KpiCard.jsx`, `KpiCards.jsx`

- `KpiCard({ label, value, icon, tone })`: big bold value, small label, icon paired with text
- `KpiCards({ summary })`: Total Registrations, Total Payments (₱), Uncollected Payments (₱), Confirmed, Checked In; recommended extras: Pending, Cancelled, Collection Rate (guard divide-by-zero)
- Responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4`
- Values come **only** from `summary`

### 🛑 CHECKPOINT T04
- [ ] Numbers match what `getSummary()` returns
- [ ] **Commit:** `Add KPI cards from summary data`
- [ ] Push `frontend/setup`
- [ ] 📸 **DRAFT:** KPI row

---

## T05 — Badges (FR-T6, FR-T8)

**Files:** `StatusBadge.jsx`, `PaymentBadge.jsx`

- `StatusBadge`: Pending, Confirmed, CheckedIn (display text "Checked In"), Cancelled, each with a distinct color
- `PaymentBadge`: **Unpaid = red, Partial = amber, Paid = green**
- Always show text; keep contrast readable (e.g. `bg-red-100 text-red-800`); unknown value → neutral gray fallback

### 🛑 CHECKPOINT T05
- [ ] Verify `git branch --show-current` shows `frontend/setup`
- [ ] **Commit:** `Add StatusBadge and PaymentBadge components`

---

## T06 — Registrations table (FR-T1–T8)

**File:** `RegistrationTable.jsx` (prop: `items`)

Columns: Reg. No. · Date · Participant (name + contact/email in `text-xs text-slate-500`) · Car (model + plate) · Type · Status · Fee / Paid (right-aligned) · Payment
- Wrap in `<div className="overflow-x-auto">`
- `hover:bg-slate-50` on rows; `key={r.id}`; `formatPeso(fee) / formatPeso(paid)`

### 🛑 CHECKPOINT T06
- [ ] **Commit:** `Add registrations table with status and payment badges`
- [ ] push
- [ ] 📸 **DRAFT:** table

---

## T07 — Page container + wiring

**File:** `src/pages/RegistrationsPage.jsx`

```jsx
import { useEffect, useState } from "react";
import { getRegistrations, getSummary } from "../api";
import useDebounce from "../hooks/useDebounce";

export default function RegistrationsPage() {
  const [filters, setFilters] = useState({ participantName: "", type: "", status: "" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const debouncedName = useDebounce(filters.participantName, 400);

  useEffect(() => {
    getSummary().then(setSummary).catch(() => setSummary(null));
  }, [reloadKey]);

  useEffect(() => {
    let ignore = false; // prevents stale responses from overwriting newer ones
    setLoading(true); setError(null);
    getRegistrations({ participantName: debouncedName, type: filters.type, status: filters.status, page, pageSize })
      .then((res) => { if (!ignore) setData(res); })
      .catch((e) => { if (!ignore) setError(e); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [debouncedName, filters.type, filters.status, page, pageSize, reloadKey]);

  const changeFilter = (patch) => { setFilters((f) => ({ ...f, ...patch })); setPage(1); };      // FR-F5
  const clearFilters = () => { setFilters({ participantName: "", type: "", status: "" }); setPage(1); };
  const changePageSize = (n) => { setPageSize(n); setPage(1); };                                // FR-P3
  const retry = () => setReloadKey((k) => k + 1);

  // layout: header -> KpiCards -> card with Filters + (states | Table) + Pagination
}
```

### 🛑 CHECKPOINT T07
- [ ] KPI + table render from sample data
- [ ] **Commit:** `Add RegistrationsPage with data fetching and state`
- [ ] push

---

## T08 — Filters (FR-F1–F6)

**File:** `RegistrationFilters.jsx` (props: `filters`, `onChange(patch)`, `onClear`)

- Search input with label/placeholder **"Search participant name…"**
- Type and Status `<select>`s with visible `<label>`s; option values are the exact API strings; "All" has value `""`
- **Clear filters** button
- Text box updates immediately; only the **fetch** uses the debounced value

**Verify:** typing triggers one fetch ~400 ms after you stop; changing type/status returns to page 1; Clear resets all.

### 🛑 CHECKPOINT T08
- [ ] **Commit:** `Add participant name search and type/status filters`
- [ ] Push `frontend/setup`
- [ ] 📸 **DRAFT:** search result, type filter, status filter

---

## T09 — Pagination (FR-P1–P4)

**File:** `Pagination.jsx` (props: `page`, `pageSize`, `totalCount`, `totalPages`, `loading`, `onPageChange`, `onPageSizeChange`)

- Prev / numbered buttons / Next; **current page highlighted** (`aria-current="page"`)
- Clear disabled styling; disabled while `loading`, Prev at page 1, Next at the last page
- Summary: `Showing {from}–{to} of {totalCount}` with `from = (page-1)*pageSize + 1`, `to = Math.min(page*pageSize, totalCount)`; if `totalCount === 0` show "Showing 0 of 0"
- Page-size `<select>` (5, 10, 20) with label "Per page"

### 🛑 CHECKPOINT T09
- [ ] Verify `git branch --show-current` shows `frontend/setup`
- [ ] **Commit:** `Add pagination and page-size selector`
- [ ] push
- [ ] 📸 **DRAFT:** page 2 with "Showing 11–20 of 25"

---

## T10 — Loading, empty, error states (FR-S1–S3)

- **Loading:** "Loading registrations…"; never a blank page
- **Error:** "Cannot reach the API. Please check that the backend is running." + **Try again** → `retry()`
- **Empty:** "No registrations match your filters" + **Clear filters**
- Priority: error → loading → empty → table
- Test error in sample mode by temporarily making `getRegistrations` throw

### 🛑 CHECKPOINT T10
- [ ] **Commit:** `Add loading, empty and error states`
- [ ] push
- [ ] 📸 **DRAFT:** all three states

---

## T11 — Polish & UX audit (Spec §8)

- [ ] Consistent palette/font/spacing
- [ ] Labels/placeholders on all inputs; action-word buttons
- [ ] Hover + focus-visible styles
- [ ] Amounts right-aligned; ₱ and dates formatted the same everywhere
- [ ] Tablet width: cards wrap, table scrolls horizontally
- [ ] Color never the only cue

### 🛑 CHECKPOINT T11
- [ ] **Commit:** `Polish responsive layout and accessibility styles`
- [ ] push

---

## T12 — Verify the sample-data build + frontend README (FR-D4)

1. Create `docs/specs/04-verification.md` using the table in **T14** and fill in everything that works with sample data now.
2. Write `frontend/README.md`:

```markdown
# Frontend: Car Show Registration Dashboard
## Run
npm install
npm run dev      # http://localhost:5173

## Environment (.env.development)
VITE_API_BASE_URL=http://localhost:5205
VITE_USE_SAMPLE_DATA=true

## Switch between sample data and the real API
- Sample data: VITE_USE_SAMPLE_DATA=true, then restart `npm run dev`.
- Real API:    VITE_USE_SAMPLE_DATA=false, start the backend, set VITE_API_BASE_URL
               to its URL, then restart `npm run dev`.
All UI code imports from src/api/index.js, which picks src/api/sample-data.js or
src/api/registrationsApi.js. Both have the same function names and return shapes.

## Status
The UI is complete against sample data. The C# API will be connected soon.

## Project structure
(brief tree + one line per folder)
```

### 🛑 CHECKPOINT T12
- [ ] **Commit:** `Add frontend README and sample-data verification checklist`
- [ ] Push `frontend/setup`
- [ ] The branch now contains a complete, working sample-data dashboard (a safe fallback if the API is late)

---

# PHASE 4 — ⏳ Connect the real C# API (LATER)

Do this once a backend exists. Ways to get one (**ask your instructor**):
- **Option A:** the **C# template from the LMS**; extract it into `backend/` and run it
- **Option B:** a backend you or someone else builds later

### T13 — Switch to the real API

Remain on `frontend/setup`. Do not create a new branch.
1. Add the C# project to `backend/` (replace the placeholder README) and commit it if it's yours to commit.
2. Run it:
   ```bash
   cd backend
   dotnet run --project Api
   ```
   Note the printed URL (`Now listening on: http://localhost:XXXX`) or check `launchSettings.json`.
3. Confirm in Scalar/browser that `GET <base>/api/registrations/summary` works and the database holds ≥ 25 registrations (ideally the same distribution as your sample data so numbers are easy to compare).
4. Update `frontend/.env.development`:
   ```
   VITE_API_BASE_URL=http://localhost:<real port>
   VITE_USE_SAMPLE_DATA=false
   ```
5. Restart `npm run dev`.

### Integration troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Console: *blocked by CORS policy* | API doesn't allow the Vite origin | In the C# `Program.cs`, add a policy for `http://localhost:5173` (below). |
| `Failed to fetch` | API not running, wrong port, `https` vs `http` | Check the terminal URL and `.env.development`; restart Vite. |
| 404 | Wrong path | Must be `/api/registrations` and `/api/registrations/summary`. |
| Table empty but API returns data | Field/casing mismatch | Compare real JSON in DevTools → Network with the contract. |
| Badges show fallback | Enums come as numbers or different casing | Make the API return strings (`JsonStringEnumConverter`) or map the values in one place in `registrationsApi.js`. |
| Filter "doesn't work" | Wrong param names or sending `type=All` | Names must be `participantName`, `type`, `status`, `page`, `pageSize`; omit empty values. |
| Wrong "Showing x–y" | Using `items.length` | Use API `page`, `pageSize`, `totalCount`. |
| Date off by hours | UTC vs local | Format with a fixed time zone (Asia/Manila). |
| Page past the last page after filtering | Page not reset | `setPage(1)` on every filter change. |

CORS snippet for the C# API (if you control the backend code):
```csharp
builder.Services.AddCors(o => o.AddPolicy("Frontend", p =>
    p.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod()));
// ...after builder.Build():
app.UseCors("Frontend");
```

> Don't rename fields in your code. If the contract and the real API differ, fix the **API** or add a mapping in `registrationsApi.js`, and note it in `01-spec.md`.

### 🛑 CHECKPOINT T13
- [ ] KPI values **match** the API summary JSON
- [ ] Table, filters, and paging counts match the API
- [ ] **Commit:** `Connect dashboard to the C# API`
- [ ] push

### T14 — Verify against the spec (with the real API)

Update `docs/specs/04-verification.md`:

| Spec ID | Test | Sample ✔ | API ✔ |
|---|---|---|---|
| FR-K1/K3 | KPI numbers equal `/summary` JSON | ☐ | ☐ |
| FR-T1–T8 | Every column shown, formats correct | ☐ | ☐ |
| FR-F1 | One request ~400 ms after the last keystroke (Network tab) | ☐ | ☐ |
| FR-F2/F3 | Type/Status filters send correct query params | ☐ | ☐ |
| FR-F5 | Changing a filter from page 3 returns to page 1 | ☐ | ☐ |
| FR-F4 | Clear resets all | ☐ | ☐ |
| FR-P1–P4 | Page buttons, summary, page size, disabled states | ☐ | ☐ |
| FR-S1 | Loading visible (DevTools → Network → throttle "Slow 4G") | ☐ | ☐ |
| FR-S2 | Empty state with nonsense search ("zzzz") | ☐ | ☐ |
| FR-S3 | Error state with API stopped; Try again works after restart | ☐ | ☐ |
| §8 | Tablet width OK | ☐ | ☐ |

### 🛑 CHECKPOINT T14
- [ ] **Commit:** `Verify dashboard against spec with real API`
- [ ] Push `frontend/setup`

---

# PHASE 5 — FINAL screenshots

> Don't crop out URLs/status codes, don't edit images, don't reuse anyone else's. Save each in `docs/screenshots/` with the names below **and** paste into the Google Doc.

**Timing:** items marked ⏳ need the real API. You may capture sample-data versions of the others now as backups, but the graded set should come from your app running with the real API.

| # | What to capture | How | File name | API needed? |
|---|---|---|---|---|
| 1 | `frontend/src` structure (components, pages, api) | VS Code explorer or `tree` | `01-frontend-src-structure.png` | No |
| 2 | Full dashboard: KPI + table + pagination, **data from C# API** | Full browser window incl. address bar | `02-dashboard-full.png` | ⏳ Yes |
| 3 | Loading state | DevTools → Network → throttle "Slow 4G", reload | `03-loading-state.png` | Backup now |
| 4 | Search by participant name | Type a name | `04-search-filtered.png` | Backup now |
| 5a | Filter by **type** | Choose a type | `05a-filter-type.png` | Backup now |
| 5b | Filter by **status** | Choose a status | `05b-filter-status.png` | Backup now |
| 6 | Paging page 2+ with "Showing x–y of N" | Click page 2 | `06-paging-page2.png` | Backup now |
| 7 | Empty state | Search "zzzz" | `07-empty-state.png` | Backup now |
| 8 | Error state (API stopped) | **Stop the API**, reload | `08-error-state.png` | ⏳ Yes |
| 9 | DevTools → Network: `GET /api/registrations?...` + JSON response | F12 → Network → click request → show URL, status 200, Response | `09-devtools-network.png` | ⏳ Yes |
| 10 | GitHub commit history with your commits | `github.com/<you>/<repo>/commits/main` | `10-github-commits.png` | No (take last) |
| 11 | Full app running: API (Scalar/terminal) **and** React together | Split screen | `11-full-app-running.png` | ⏳ Yes |

For **each** screenshot, write in the Google Doc (3–5 sentences, your own words): what it shows, the request/action you performed, the result, and why it's correct per the requirements (cite spec IDs, e.g. "FR-F5: changing a filter returns to page 1…").

### 🛑 CHECKPOINT Phase 5
- [ ] All 12 files in `docs/screenshots/`
- [ ] **Commit:** `Add final screenshots`
- [ ] Push `frontend/setup` (so the commit history screenshot #10 includes the completed work)

---

# PHASE 6 — Documentation & submission

## T15 — Google Doc

1. Create **one** Google Doc: `CarShow-Frontend-Documentation-<Surname>`
2. **Share:** add `vhinle@gmail.com` as **Commenter**; General access → **Anyone with the link → Viewer**
3. **Cover page:** course (Integrative Programming 2), title *Car Show Registration System – Frontend Task*, team members and roles (**you: Frontend Developer, solo project**; backend: note how the API was provided), GitHub repo URL, submission date
4. **Table of contents** (Insert → Table of contents) right after the cover page
5. **Heading 1:** `Screenshots`; **Heading 2** per screenshot (e.g. `Screenshot 4 – Search by Participant Name`); under each: image + 3–5 sentence explanation
6. **Heading 1:** `Reflection Answers`; **Heading 2** = each question copied exactly; answer ≥ 5 sentences, own words, with an example from *your* project
7. Open the link in **incognito** to confirm it opens without requesting access
8. **Don't edit after the deadline** (version history is checked)

### Reflection answer prep (write the final text yourself)

| # | Question | Talking points from *your* project |
|---|---|---|
| 1 | Components & state | Which components you made; why `RegistrationsPage` owns `filters/page/pageSize/data/loading/error` (shared by siblings, single source of truth, children stay reusable); example: Pagination and Table both need `data` and `loading`. |
| 2 | Talking to the API | Keystroke → `changeFilter` sets name + page 1 → `useDebounce` waits 400 ms → effect fires → `getRegistrations` builds the query string → fetch → JSON → `setData` → table re-renders. Debounce avoids a request per keystroke, reduces server load/flicker/out-of-order responses. |
| 3 | User experience | Staff need to know whether it's loading, broken, or just empty. Say which state was hardest and why (e.g. error + retry, or priority among states). |
| 4 | Server vs browser | With 2,000 rows: huge payloads, slow render, memory; KPI totals wrong if computed from the current page (e.g. "Total Payments" of only 10 rows). Cite your `/summary` and `totalCount`. |
| 5 | Collaboration & integration | You worked solo: explain how `sample-data.js` let you build the full UI **before** an API existed and how the shared JSON contract kept the switch easy. Describe **one real problem** you hit when connecting the API (CORS, enum values, dates, field names) and your exact fix. Write this after Phase 4 so it's true. |

### 🛑 CHECKPOINT T15
- [ ] Doc named and shared correctly; tested in incognito
- [ ] 11 screenshot entries (with 5a/5b), each with title + image + 3–5 sentences
- [ ] 5 reflection answers, each ≥ 5 sentences with a project example

---

## T16 — Final merge & submission

1. Verify the final working frontend while still on `frontend/setup`:
   ```bash
   git branch --show-current
   git status
   cd frontend
   npm install
   npm run dev
   ```
2. Review progress before creating the final PR:
   ```bash
   git log --oneline
   git shortlog -sn
   git diff main...frontend/setup
   ```
3. Push the final state:
   ```bash
   git push
   ```
4. On GitHub, open one final Pull Request with base `main` and compare `frontend/setup`.
5. Review the full commit history and Files changed tab, confirm the acceptance criteria are satisfied, and add a concise PR description containing the changed areas and relevant spec IDs.
6. Because you are working alone, perform a self-review of your code and documentation. PDF-style partner review may not apply; confirm with the instructor whether this single-branch, self-reviewed PR is acceptable.
7. Merge the final PR into `main`.
8. After merging, verify `main` locally only to confirm the result:
   ```bash
   git checkout main
   git pull
   cd frontend
   npm install
   npm run dev
   ```
9. On GitHub, verify: `vhinle` is a collaborator; no `node_modules/` or `dist/` are tracked; the branch history contains ≥ 10 meaningful commits under **your** account (`git shortlog -sn`).
10. Submit the **Google Doc link** (and repo URL if asked) in the **CCDI LMS Submission Bin** before **Nov 25, 2026**.

### 🛑 FINAL CHECKLIST

**Repository**
- [ ] Repo named per instructor's instruction (placeholder: `car-show-registration-<surname>`)
- [ ] Layout: `backend/`, `frontend/`, `docs/screenshots/`, root `README.md`
- [ ] ≥ 10 meaningful commits under your own account
- [ ] All frontend work is completed on `frontend/setup`
- [ ] One final Pull Request merged `frontend/setup` into `main`
- [ ] No `node_modules/` or `dist/`
- [ ] `.env.development` has `VITE_API_BASE_URL` (and `VITE_USE_SAMPLE_DATA`)
- [ ] Root README has your role; `frontend/README.md` explains the sample ↔ API switch
- [ ] `main` runs (with the C# API connected, if available)

**App**
- [ ] 5+ KPI cards from `/summary`
- [ ] Table with all required columns; badges with text; right-aligned amounts
- [ ] Debounced name search, type, status, Clear; filter change → page 1
- [ ] Pagination (prev/next/numbers/current highlighted/summary/page-size/disabled)
- [ ] Loading, empty (+ Clear filters), error (+ Try again)
- [ ] Sample data ≥ 25 records; switch works
- [ ] Responsive (tablet)

**Documentation**
- [ ] Google Doc: cover, TOC, H1/H2 structure, screenshots with explanations, 5 reflections
- [ ] Sharing verified in incognito
- [ ] Screenshots also in `docs/screenshots/` with matching names
- [ ] Doc link submitted in LMS

---

# Appendix A — Commit plan (≥ 10 required)

The existing `frontend/setup` branch and its first commit are preserved. The following is a suggested commit checklist, not a requirement to repeat work already completed. All commits after the existing first commit should be made on `frontend/setup` with messages that accurately describe the actual changes. Do not split a small change merely to increase the commit count.

| # | Message | After |
|---|---|---|
| 1 | Initial repository layout with backend placeholder and docs folders | Step 1.1 |
| 2 | Scaffold React app with Vite and Tailwind | Phase 1 |
| 3 | Add README role table and .env.example | Phase 1 |
| 4 | Add SDD constitution, spec, plan and task list | Phase 2 |
| 5 | Add sample registration data and local API functions | T01 |
| 6 | Add API module with sample/real data switch | T02 |
| 7 | Add currency/date formatters and useDebounce hook | T03 |
| 8 | Add KPI cards from summary data | T04 |
| 9 | Add StatusBadge and PaymentBadge components | T05 |
| 10 | Add registrations table with status and payment badges | T06 |
| 11 | Add RegistrationsPage with data fetching and state | T07 |
| 12 | Add participant name search and type/status filters | T08 |
| 13 | Add pagination and page-size selector | T09 |
| 14 | Add loading, empty and error states | T10 |
| 15 | Polish responsive layout and accessibility styles | T11 |
| 16 | Add frontend README and sample-data verification checklist | T12 |
| 17 | Connect dashboard to the C# API | T13 ⏳ |
| 18 | Verify dashboard against spec with real API | T14 ⏳ |
| 19 | Add final screenshots | Phase 5 ⏳ |

If the existing first commit and the Phase 1–12 commits account for at least 10 meaningful commits, that is sufficient even if the API is not available. Add commits only for real, completed work.

# Appendix B — Git cheat sheet & solo Pull Request flow

```bash
git branch --show-current               # confirm frontend/setup is active
git status                              # inspect modified and untracked files
git add .                               # stage completed work
git commit -m "Describe actual change" # create a meaningful commit
git push -u origin frontend/setup       # push the existing branch for the first time
git push                                # subsequent pushes
git log --oneline                       # review commit history
git shortlog -sn                        # count meaningful commits by author
git diff main...frontend/setup          # review all branch changes against main
```

**One final solo PR flow:** GitHub → **Pull requests** → **New pull request** → base `main` ← compare `frontend/setup` → review the commit history and **Files changed** tab → add a description containing what changed and the relevant spec IDs → self-review the final result → merge only after all planned work passes verification.

Use `git diff main...frontend/setup` before opening the PR to inspect the complete branch-level change. After merging, use `git checkout main && git pull` only to update your local `main` branch.

Do not create another frontend branch and do not open intermediate Pull Requests. Regular pushes are remote backups and do not require a PR.

> The PDF expects a partner to review. Since you are solo, confirm with your instructor whether a self-review of the one final PR is acceptable. Optionally ask a classmate or the instructor for a review, but do not create additional branches or PRs.

# Appendix C — Quick debugging recipes

- **See what the browser sent/received:** F12 → Network → `Fetch/XHR` → click the request → *Headers* (URL, query string, status) and *Response* (JSON).
- **Env var not picked up:** restart Vite; variable names must start with `VITE_`.
- **Table doesn't update after typing:** the effect's dependency array must include the debounced value, `type`, `status`, `page`, `pageSize`.
- **Flicker/wrong rows after fast typing:** keep the `ignore` flag in the effect cleanup.
- **Next button enabled on the last page:** compare `page >= totalPages`.

# Appendix D — Optional bonus (after everything above is committed)

1. **Skeleton loading** (table rows + placeholder KPI cards with `animate-pulse bg-slate-200`)
2. **Details modal** using `GET /api/registrations/{id}`
3. **New Registration form** → `POST /api/registrations`; map 400 `errors.{Field}` (e.g. `PlateNumber`) to the matching input; show the 409 duplicate-plate message beside the plate field; readable messages, never raw JSON

Add any bonus to `01-spec.md` first (SDD), then implement and commit it separately.
