import { useEffect, useMemo, useState } from "react";
import { getRegistrations, getSummary } from "../api/index.js";
import KpiCards from "../components/KpiCards.jsx";
import Pagination from "../components/Pagination.jsx";
import RegistrationFilters from "../components/RegistrationFilters.jsx";
import RegistrationTable from "../components/RegistrationTable.jsx";
import useDebounce from "../hooks/useDebounce.js";

const emptyFilters = { participantName: "", type: "", status: "" };
const pageSize = 10;
const actionClass = "mt-4 min-h-11 rounded-md bg-signal px-4 text-sm font-bold text-asphalt hover:bg-signal-hover";

export default function RegistrationsPage() {
  const [filters, setFilters] = useState(emptyFilters);
  const [page, setPage] = useState(1);
  const [summaryResult, setSummaryResult] = useState(null);
  const [result, setResult] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const { participantName, type, status } = filters;
  const debouncedName = useDebounce(participantName);
  const searchPending = participantName !== debouncedName;
  const request = useMemo(
    () => ({ params: { participantName: debouncedName, type, status, page, pageSize }, reloadKey }),
    [debouncedName, type, status, page, reloadKey],
  );

  useEffect(() => {
    let ignore = false;

    getSummary().then(
      (data) => { if (!ignore) setSummaryResult({ reloadKey, data }); },
      () => { if (!ignore) setSummaryResult({ reloadKey, failed: true }); },
    );

    return () => { ignore = true; };
  }, [reloadKey]);

  useEffect(() => {
    if (searchPending) return;

    let ignore = false;

    getRegistrations(request.params).then(
      (data) => { if (!ignore) setResult({ request, data }); },
      () => { if (!ignore) setResult({ request, failed: true }); },
    );

    return () => { ignore = true; };
  }, [request, searchPending]);

  const currentResult = !searchPending && result?.request === request ? result : null;
  const currentSummary = summaryResult?.reloadKey === reloadKey ? summaryResult : null;
  const data = currentResult?.data;
  const error = currentResult?.failed || currentSummary?.failed;
  const loading = !currentResult || !currentSummary;

  function changeFilter(patch) {
    setFilters((current) => ({ ...current, ...patch }));
    setPage(1);
  }

  function clearFilters() {
    setFilters(emptyFilters);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-asphalt text-silver">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-5 px-4 py-4 sm:gap-6 sm:px-8 sm:py-6">
        <header className="show-header flex min-h-52 items-end rounded-xl border border-line p-5 sm:min-h-64 sm:p-8 lg:p-10">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-bold tracking-[0.23em] text-signal uppercase">
              <span className="show-mark" aria-hidden="true" />
              Car Show 2027
            </p>
            <h1 className="max-w-[12ch] text-[clamp(2.35rem,5.5vw,4.5rem)] leading-[0.98] font-extrabold tracking-[-0.065em]">
              Registration dashboard
            </h1>
          </div>
        </header>
        {currentSummary?.data && (
          <section aria-label="Registration overview">
            <KpiCards summary={currentSummary.data} />
          </section>
        )}
        <section aria-labelledby="registration-list-title" className="min-w-0 rounded-xl border border-line bg-panel">
          <h2 id="registration-list-title" className="px-4 pt-5 text-xl font-bold tracking-tight sm:px-6">
            Registrations
          </h2>
          <RegistrationFilters filters={filters} onChange={changeFilter} onClear={clearFilters} />
          {error ? (
            <div className="border-t border-line px-4 py-7 sm:px-6">
              <p role="alert">Cannot reach the API. Please check that the backend is running.</p>
              <button type="button" className={actionClass} onClick={() => setReloadKey((key) => key + 1)}>
                Try again
              </button>
            </div>
          ) : loading ? (
            <p role="status" className="flex items-center gap-3 border-t border-line px-4 py-7 text-muted sm:px-6">
              <span className="size-2 rounded-full bg-signal motion-safe:animate-pulse" aria-hidden="true" />
              Loading registrations…
            </p>
          ) : data.items.length === 0 ? (
            <div className="border-t border-line px-4 py-7 sm:px-6">
              <p role="status">No registrations match your filters</p>
              <button type="button" className={actionClass} onClick={clearFilters}>Clear filters</button>
            </div>
          ) : (
            <RegistrationTable items={data.items} />
          )}
          {!error && (
            <Pagination
              page={page}
              pageSize={pageSize}
              totalCount={data?.totalCount ?? 0}
              totalPages={data?.totalPages ?? result?.data?.totalPages ?? 0}
              loading={loading}
              onPageChange={setPage}
            />
          )}
        </section>
      </div>
    </main>
  );
}
