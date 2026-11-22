const controlClass = "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900";

export default function RegistrationFilters({ filters, onChange, onClear }) {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] lg:items-end">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Participant name
        <input
          className={controlClass}
          type="search"
          placeholder="Search participant name…"
          value={filters.participantName}
          onChange={(event) => onChange({ participantName: event.target.value })}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
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
      <label className="flex flex-col gap-1 text-sm font-medium">
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
      <button type="button" className="justify-self-start rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50" onClick={onClear}>
        Clear filters
      </button>
    </div>
  );
}
