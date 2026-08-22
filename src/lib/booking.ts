/**
 * BOOKING SINK — placeholder.
 *
 * Right now submitted bookings are appended to localStorage so nothing is lost
 * while the real destination is decided.
 *
 * To send bookings to an Excel / Google Sheet later, replace the body of
 * `submitBooking` with a POST to your endpoint, e.g.:
 *
 *   await fetch(BOOKING_WEBHOOK_URL, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(booking),
 *   });
 *
 * (Microsoft Power Automate "When an HTTP request is received" -> "Add a row
 * into an Excel table", or a Google Apps Script web app, both work as the URL.)
 */

export type BookingRequest = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  timeline?: string;
  budget?: string;
  details: string;
};

export const BOOKING_WEBHOOK_URL = ""; // TODO: paste the Excel/Sheet webhook URL here

const STORAGE_KEY = "classic-finishes-bookings";

export async function submitBooking(booking: BookingRequest) {
  const record = { ...booking, submittedAt: new Date().toISOString() };

  if (BOOKING_WEBHOOK_URL) {
    await fetch(BOOKING_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    return record;
  }

  if (typeof window !== "undefined") {
    const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    existing.push(record);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  }
  return record;
}
