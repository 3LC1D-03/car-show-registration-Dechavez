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
    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <KpiCard label="Total Registrations" value={totalRegistrations} icon="📋" tone="indigo" />
      <KpiCard label="Total Payments" value={formatPeso(totalPayments)} icon="💰" tone="green" />
      <KpiCard
        label="Uncollected Payments"
        value={formatPeso(uncollectedPayments)}
        icon="💸"
        tone="red"
      />
      <KpiCard label="Confirmed" value={confirmed} icon="✅" tone="green" />
      <KpiCard label="Checked In" value={checkedIn} icon="🏁" tone="blue" />
      <KpiCard label="Pending" value={pending} icon="⏳" tone="amber" />
      <KpiCard label="Cancelled" value={cancelled} icon="🚫" tone="red" />
      <KpiCard label="Collection Rate" value={collectionRate} icon="📊" tone="slate" />
    </dl>
  );
}
