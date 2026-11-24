const pesoFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

export function formatPeso(value) {
  return pesoFormatter.format(value ?? 0);
}

export function formatDate(isoDate) {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
  const hour = value("hour").padStart(2, "0");
  const minute = value("minute").padStart(2, "0");
  const dayPeriod = value("dayPeriod").toUpperCase();

  return `${value("month")} ${value("day")}, ${value("year")} ${hour}:${minute} ${dayPeriod}`;
}