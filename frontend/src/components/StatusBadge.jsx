const statusStyles = {
  Pending: "bg-signal/10 text-signal",
  Confirmed: "bg-emerald-400/10 text-emerald-300",
  CheckedIn: "bg-sky-400/10 text-sky-300",
  Cancelled: "bg-rose-400/10 text-rose-300",
};

export default function StatusBadge({ status }) {
  const label = status === "CheckedIn" ? "Checked In" : status || "Unknown status";
  const style = Object.hasOwn(statusStyles, status) ? statusStyles[status] : "bg-surface text-muted";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {label}
    </span>
  );
}
