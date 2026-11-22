const toneClasses = {
  indigo: "border-indigo-500",
  green: "border-green-500",
  red: "border-red-500",
  amber: "border-amber-500",
  blue: "border-blue-500",
  slate: "border-slate-400",
};

export default function KpiCard({ label, value, icon, tone }) {
  const accent = toneClasses[tone] ?? toneClasses.slate;

  return (
    <div className={`rounded-lg border-l-4 bg-white p-4 shadow-sm ${accent}`}>
      <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-600">
        <span aria-hidden="true" className="text-xl">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold text-slate-800">{value}</dd>
    </div>
  );
}
