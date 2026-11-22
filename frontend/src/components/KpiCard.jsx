export default function KpiCard({ label, value, icon, tone }) {
  const featured = tone === "featured";

  return (
    <div className={`min-w-0 rounded-lg border px-3 py-3.5 sm:px-4 ${featured ? "border-signal bg-signal text-asphalt" : "border-line bg-panel text-silver"}`}>
      <dt className={`flex min-h-8 items-center gap-2 text-xs leading-tight font-semibold ${featured ? "text-asphalt" : "text-muted"}`}>
        <span
          aria-hidden="true"
          className={`grid size-7 shrink-0 place-items-center rounded text-sm font-medium ${featured ? "bg-asphalt/10" : "bg-surface text-signal"}`}
        >
          {icon}
        </span>
        {label}
      </dt>
      <dd className="mt-2 text-[clamp(1.2rem,3.15vw,2rem)] leading-none font-bold tracking-tight tabular-nums">
        {value}
      </dd>
    </div>
  );
}
