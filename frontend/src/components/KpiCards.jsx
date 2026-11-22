import KpiCard from "./KpiCard.jsx";
import { formatPeso } from "../utils/formatters.js";

export default function KpiCards({ summary }) {
  if (!summary) return null;

  const {
    totalRegistrations,
    totalPayments,
    uncollectedPayments,
    confirmed,
    checkedIn,
    pending,
    cancelled,
    totalFees,
  } = summary;

  const collectionRate =
    totalFees === 0 ? "0.0%" : `${((totalPayments / totalFees) * 100).toFixed(1)}%`;

  return (
    <dl className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
      <KpiCard label="Total Registrations" value={totalRegistrations} icon="№" tone="featured" />
      <KpiCard label="Total Payments" value={formatPeso(totalPayments)} icon="₱" />
      <KpiCard label="Uncollected Payments" value={formatPeso(uncollectedPayments)} icon="−" />
      <KpiCard label="Collection Rate" value={collectionRate} icon="%" />
      <KpiCard label="Confirmed" value={confirmed} icon="✓" />
      <KpiCard label="Checked In" value={checkedIn} icon="↳" />
      <KpiCard label="Pending" value={pending} icon="…" />
      <KpiCard label="Cancelled" value={cancelled} icon="×" />
    </dl>
  );
}
