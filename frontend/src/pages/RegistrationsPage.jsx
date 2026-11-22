import { useEffect, useMemo, useState } from "react";
import { getRegistrations, getSummary } from "../api/index.js";
import KpiCards from "../components/KpiCards.jsx";
import Pagination from "../components/Pagination.jsx";
import RegistrationFilters from "../components/RegistrationFilters.jsx";
import RegistrationTable from "../components/RegistrationTable.jsx";
import useDebounce from "../hooks/useDebounce.js";

const emptyFilters = { participantName: "", type: "", status: "" };

export default function RegistrationsPage() {
  const [filters, setFilters] = useState(emptyFilters);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [summary, setSummary] = useState(null);
  const [result, setResult] = useState(null);
  const { participantName, type, status } = filters;
  const debouncedName = useDebounce(participantName);
  const searchPending = participantName !== debouncedName;
  const request = useMemo(
    () => ({ participantName: debouncedName, type, status, page, pageSize }),
    [debouncedName, type, status, page, pageSize],
  );

  useEffect(() => {
    let ignore = false;

    getSummary().then(
      (summary) => { if (!ignore) setSummary(summary); },
      () => { if (!ignore) setSummary(null); },
    );

    return () => { ignore = true; };
  }, []);

  useEffect(() => {
    if (searchPending) return;

    let ignore = false;

    getRegistrations(request).then(
      (data) => { if (!ignore) setResult({ request, data }); },
      (error) => { if (!ignore) setResult({ request, error }); },
    );

    return () => { ignore = true; };
  }, [request, searchPending]);

  const currentResult = !searchPending && result?.request === request ? result : null;
  const data = currentResult?.data;
  const loading = !currentResult;

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
        <KpiCards summary={summary} />
        <div className="rounded-lg border border-slate-200 bg-white">
          <RegistrationFilters filters={filters} onChange={changeFilter} onClear={clearFilters} />
          {data && <RegistrationTable items={data.items} />}
          <Pagination
            page={page}
            pageSize={pageSize}
            totalCount={data?.totalCount ?? 0}
            totalPages={data?.totalPages ?? result?.data?.totalPages ?? 0}
            loading={loading}
            onPageChange={setPage}
            onPageSizeChange={changePageSize}
          />
        </div>
      </div>
    </main>
  );
}
