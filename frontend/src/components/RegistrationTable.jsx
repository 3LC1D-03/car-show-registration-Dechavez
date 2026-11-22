import PaymentBadge from "./PaymentBadge.jsx";
import StatusBadge from "./StatusBadge.jsx";
import { formatDate, formatPeso } from "../utils/formatters.js";

export default function RegistrationTable({ items }) {
  return (
    <div className="overflow-x-auto" role="region" aria-label="Registrations table" tabIndex={0}>
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <caption className="sr-only">Car show registrations</caption>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
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
        <tbody className="divide-y divide-slate-200 bg-white">
          {items.map((registration) => (
            <tr key={registration.id} className="hover:bg-slate-50">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                {registration.registrationNumber}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                {formatDate(registration.registrationDate)}
              </td>
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900">{registration.participantName}</div>
                <div className="text-xs text-slate-500">
                  {registration.contactNumber || registration.email || "No contact information"}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900">{registration.carMakeModel}</div>
                <div className="text-xs text-slate-500">{registration.plateNumber}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                {registration.registrationType}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <StatusBadge status={registration.status} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-slate-700">
                {formatPeso(registration.registrationFee)} / {formatPeso(registration.amountPaid)}
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
