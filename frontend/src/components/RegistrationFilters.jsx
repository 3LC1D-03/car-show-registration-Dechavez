const controlClass = "min-h-11 w-full rounded-md border border-control bg-asphalt px-3 text-sm text-silver placeholder:text-muted hover:border-muted";

export default function RegistrationFilters({ filters, onChange, onClear }) {
  return (
    <div className="grid gap-3 p-4 text-muted sm:grid-cols-2 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end">
      <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
        Participant name
        <input
          className={controlClass}
          type="search"
          placeholder="Search participant name…"
          value={filters.participantName}
          onChange={(event) => onChange({ participantName: event.target.value })}
        />
      </label>
      <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
        Type
        <select
          className={controlClass}
          value={filters.type}
          onChange={(event) => onChange({ type: event.target.value })}
        >
          <option value="">All</option>
          <option>Exhibitor</option>
          <option>Competitor</option>
          <option>VIP</option>
        </select>
      </label>
      <label className="flex min-w-0 flex-col gap-2 text-xs font-semibold">
        Status
        <select
          className={controlClass}
          value={filters.status}
          onChange={(event) => onChange({ status: event.target.value })}
        >
          <option value="">All</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option value="CheckedIn">Checked In</option>
          <option>Cancelled</option>
        </select>
      </label>
      <button type="button" className="min-h-11 justify-self-start rounded-md border border-control px-4 text-sm font-semibold text-silver hover:border-muted hover:bg-surface sm:self-end" onClick={onClear}>
        Clear filters
      </button>
    </div>
  );
}
