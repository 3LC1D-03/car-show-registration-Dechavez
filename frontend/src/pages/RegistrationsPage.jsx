import { useEffect, useMemo, useState } from "react";
import { getRegistrations, getSummary } from "../api/index.js";
import KpiCards from "../components/KpiCards.jsx";
import Pagination from "../components/Pagination.jsx";
import RegistrationFilters from "../components/RegistrationFilters.jsx";
import RegistrationTable from "../components/RegistrationTable.jsx";
import useDebounce from "../hooks/useDebounce.js";

const emptyFilters = { participantName: "", type: "", status: "" };
const actionClass = "mt-3 rounded-md bg-indigo-700 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-800";

export default function RegistrationsPage() {
  const [filters, setFilters] = useState(emptyFilters);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [summaryResult, setSummaryResult] = useState(null);
  const [result, setResult] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const { participantName, type, status } = filters;
  const debouncedName = useDebounce(participantName);
  const searchPending = participantName !== debouncedName;
  const request = useMemo(
    () => ({ params: { participantName: debouncedName, type, status, page, pageSize }, reloadKey }),
    [debouncedName, type, status, page, pageSize, reloadKey],
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

  function changePageSize(size) {
    setPageSize(size);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 py-6 sm:px-6">
        <h1 className="text-2xl font-bold">Car Show 2027 Registrations</h1>
        <KpiCards summary={currentSummary?.data} />
        <div className="rounded-lg border border-slate-200 bg-white">
          <RegistrationFilters filters={filters} onChange={changeFilter} onClear={clearFilters} />
          {error ? (
            <div className="border-t border-slate-200 p-6">
              <p role="alert">Cannot reach the API. Please check that the backend is running.</p>
              <button type="button" className={actionClass} onClick={() => setReloadKey((key) => key + 1)}>
                Try again
              </button>
            </div>
          ) : loading ? (
            <p role="status" className="border-t border-slate-200 p-6 text-slate-600">Loading registrations…</p>
          ) : data.items.length === 0 ? (
            <div className="border-t border-slate-200 p-6">
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
              onPageSizeChange={changePageSize}
            />
          )}
        </div>
      </div>
    </main>
  );
}
