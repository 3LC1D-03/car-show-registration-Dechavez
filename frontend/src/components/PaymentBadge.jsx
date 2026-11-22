const paymentStyles = {
  Unpaid: "bg-red-100 text-red-800",
  Partial: "bg-amber-100 text-amber-800",
  Paid: "bg-green-100 text-green-800",
};

export default function PaymentBadge({ status }) {
  const label = status || "Unknown payment status";
  const style = Object.hasOwn(paymentStyles, status) ? paymentStyles[status] : "bg-slate-100 text-slate-700";

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}
