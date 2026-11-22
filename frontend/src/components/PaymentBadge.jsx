const paymentStyles = {
  Unpaid: "bg-rose-400/10 text-rose-300",
  Partial: "bg-signal/10 text-signal",
  Paid: "bg-emerald-400/10 text-emerald-300",
};

export default function PaymentBadge({ status }) {
  const label = status || "Unknown payment status";
  const style = Object.hasOwn(paymentStyles, status) ? paymentStyles[status] : "bg-surface text-muted";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {label}
    </span>
  );
}
