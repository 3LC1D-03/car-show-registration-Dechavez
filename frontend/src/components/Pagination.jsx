const buttonClass = "rounded-md border border-slate-300 px-3 py-2 text-sm enabled:hover:bg-slate-100 disabled:opacity-50";

export default function Pagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  loading,
  onPageChange,
  onPageSizeChange,
}) {
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  return (
    <nav aria-label="Registration pages" className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 p-4">
      <p className="text-sm text-slate-600">
        {!loading && (totalCount === 0 ? "Showing 0 of 0" : `Showing ${from}–${to} of ${totalCount}`)}
      </p>
      <div className="flex flex-wrap gap-1">
        <button type="button" className={buttonClass} disabled={loading || page <= 1} onClick={() => onPageChange(page - 1)}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const number = index + 1;
          const current = number === page;

          return (
            <button
              key={number}
              type="button"
              className={current ? "rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white" : buttonClass}
              aria-current={current ? "page" : undefined}
              disabled={loading || current}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          );
        })}
        <button type="button" className={buttonClass} disabled={loading || page >= totalPages} onClick={() => onPageChange(page + 1)}>
          Next
        </button>
      </div>
      <label className="flex items-center gap-2 text-sm">
        Per page
        <select
          className="rounded-md border border-slate-300 bg-white px-2 py-2 disabled:opacity-50"
          value={pageSize}
          disabled={loading}
          onChange={(event) => onPageSizeChange(Number(event.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>
    </nav>
  );
}
