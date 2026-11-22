import { useEffect, useMemo, useState } from "react";
import { getRegistrations, getSummary } from "../api/index.js";
import KpiCards from "../components/KpiCards.jsx";
import RegistrationTable from "../components/RegistrationTable.jsx";

const emptyFilters = { participantName: "", type: "", status: "" };

export default function RegistrationsPage() {
  const [filters] = useState(emptyFilters);
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [summary, setSummary] = useState(null);
  const [result, setResult] = useState(null);
  const request = useMemo(() => ({ ...filters, page, pageSize }), [filters, page, pageSize]);

  useEffect(() => {
    let ignore = false;

    getSummary().then(
      (summary) => { if (!ignore) setSummary(summary); },
      () => { if (!ignore) setSummary(null); },
    );

    return () => { ignore = true; };
  }, []);

  useEffect(() => {
    let ignore = false;

    getRegistrations(request).then(
      (data) => { if (!ignore) setResult({ request, data }); },
      (error) => { if (!ignore) setResult({ request, error }); },
    );

    return () => { ignore = true; };
  }, [request]);

  const data = result?.request === request ? result.data : null;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 py-6 sm:px-6">
        <h1 className="text-2xl font-bold">Car Show 2027 Registrations</h1>
        <KpiCards summary={summary} />
        <div className="rounded-lg border border-slate-200 bg-white">
          {data && <RegistrationTable items={data.items} />}
        </div>
      </div>
    </main>
  );
}
