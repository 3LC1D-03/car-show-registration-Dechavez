const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

async function request(path, params = {}) {
  const queryString = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== "" && value !== null && value !== undefined) {
      queryString.append(key, value);
    }
  });

  const query = queryString.toString();
  const url = `${BASE_URL}${path}${query ? `?${query}` : ""}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  return response.json();
}

export function getRegistrations(params = {}) {
  return request("/api/registrations", params);
}

export function getSummary() {
  return request("/api/registrations/summary");
}