const buttonClass = "min-h-11 min-w-11 rounded-md border border-control px-3 text-sm font-semibold enabled:hover:border-muted enabled:hover:bg-surface disabled:opacity-50";

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
    <nav aria-label="Registration pages" className="flex flex-wrap items-center justify-between gap-3 border-t border-line p-4 sm:px-6">
      <p className="text-sm text-muted">
        {!loading && (totalCount === 0 ? "Showing 0 of 0" : `Showing ${from}–${to} of ${totalCount}`)}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2">
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
                className={current ? "min-h-11 min-w-11 rounded-md bg-signal px-3 text-sm font-bold text-asphalt" : buttonClass}
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
        <label className="ml-1 flex min-h-11 items-center gap-2 text-sm text-muted">
          <span>Rows</span>
          <select
            value={pageSize}
            disabled={loading}
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            className="min-h-11 rounded-md border border-control bg-surface px-3 text-silver enabled:hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            aria-label="Rows per page"
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </label>
      </div>
    </nav>
  );
}
