const buttonClass = "min-h-11 min-w-11 rounded-md border border-control px-3 text-sm font-semibold enabled:hover:border-muted enabled:hover:bg-surface disabled:opacity-50";

export default function Pagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  loading,
  onPageChange,
}) {
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  return (
    <nav aria-label="Registration pages" className="flex flex-wrap items-center justify-between gap-3 border-t border-line p-4 sm:px-6">
      <p className="text-sm text-muted">
        {!loading && (totalCount === 0 ? "Showing 0 of 0" : `Showing ${from}–${to} of ${totalCount}`)}
      </p>
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
    </nav>
  );
}
