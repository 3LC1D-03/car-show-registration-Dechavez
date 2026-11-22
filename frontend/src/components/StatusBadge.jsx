const statusStyles = {
  Pending: "bg-amber-100 text-amber-800",
  Confirmed: "bg-green-100 text-green-800",
  CheckedIn: "bg-blue-100 text-blue-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default function StatusBadge({ status }) {
  const label = status === "CheckedIn" ? "Checked In" : status || "Unknown status";
  const style = Object.hasOwn(statusStyles, status) ? statusStyles[status] : "bg-slate-100 text-slate-700";

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}
