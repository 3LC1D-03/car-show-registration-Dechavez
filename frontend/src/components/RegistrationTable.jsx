import PaymentBadge from "./PaymentBadge.jsx";
import StatusBadge from "./StatusBadge.jsx";
import { formatDate, formatPeso } from "../utils/formatters.js";

export default function RegistrationTable({ items }) {
  return (
    <div className="overflow-x-auto border-t border-line focus-visible:-outline-offset-2" role="region" aria-label="Registrations table" tabIndex={0}>
      <table className="min-w-full divide-y divide-line text-left text-sm">
        <caption className="sr-only">Car show registrations</caption>
        <thead className="bg-surface text-xs tracking-wide text-muted uppercase">
          <tr>
            <th scope="col" className="px-4 py-3">Reg. No.</th>
            <th scope="col" className="px-4 py-3">Date</th>
            <th scope="col" className="px-4 py-3">Participant</th>
            <th scope="col" className="px-4 py-3">Car</th>
            <th scope="col" className="px-4 py-3">Type</th>
            <th scope="col" className="px-4 py-3">Status</th>
            <th scope="col" className="px-4 py-3 text-right">Fee / Paid</th>
            <th scope="col" className="px-4 py-3">Payment</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {items.map((registration) => (
            <tr key={registration.id} className="hover:bg-surface">
              <td className="whitespace-nowrap px-4 py-3 font-semibold">
                {registration.registrationNumber}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-muted">
                {formatDate(registration.registrationDate)}
              </td>
              <td className="px-4 py-3">
                <div className="font-semibold">{registration.participantName}</div>
                <div className="mt-0.5 text-xs text-muted">
                  {registration.contactNumber || registration.email || "No contact information"}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="font-semibold">{registration.carMakeModel}</div>
                <div className="mt-0.5 text-xs text-muted">{registration.plateNumber}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-muted">
                {registration.registrationType}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <StatusBadge status={registration.status} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums">
                <span className="text-muted">{formatPeso(registration.registrationFee)} / </span>
                <span className="font-semibold">{formatPeso(registration.amountPaid)}</span>
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <PaymentBadge status={registration.paymentStatus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
