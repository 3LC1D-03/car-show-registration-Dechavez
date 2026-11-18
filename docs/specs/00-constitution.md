# Constitution

1. Stack: React (JavaScript), Vite, and Tailwind CSS. Do not add another UI library.
2. Do not rename API fields. The contract in `01-spec.md` section 6 is final.
3. Filtering, paging, and KPI totals come from the API or the sample-data stand-in, never by summing the visible table rows.
4. Use one visual palette, one font, and consistent spacing.
5. Color is never the only cue; status and payment values always show text labels.
6. Components are small and reusable. State lives in `RegistrationsPage.jsx`.
7. All UI code imports data functions only from `src/api/index.js`.
8. Complete each task with verification, a meaningful commit, and a push to the existing `frontend/setup` branch.
9. Do not commit `node_modules/` or `dist/`.
10. Do not create another frontend branch or open an intermediate Pull Request. Complete all frontend work on `frontend/setup` and create one final PR from `frontend/setup` into `main`.
