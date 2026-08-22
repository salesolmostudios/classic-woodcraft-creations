import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import { submitBooking, type BookingRequest } from "@/lib/booking";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Custom Project — Classic Finishes, Inc." },
      {
        name: "description",
        content:
          "Request a custom woodworking, cabinet, rail or laser engraving project from Classic Finishes in Bothell, WA. Tell us the scope, timeline and budget and we'll follow up.",
      },
      { property: "og:title", content: "Book a Custom Project — Classic Finishes, Inc." },
      {
        property: "og:description",
        content:
          "Send Classic Finishes the details of your custom woodworking or engraving project.",
      },
    ],
  }),
  component: Booking,
});

const projectTypes = [
  "Finish carpentry",
  "Cabinet installation",
  "Open-rail system",
  "Custom woodwork / design",
  "Laser engraving",
  "Repair or restoration",
  "Something else",
];

function Booking() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as unknown as BookingRequest;
    await submitBooking(payload);
    setBusy(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl text-primary">Book a project</h1>
        <p className="mt-4 text-muted-foreground">
          Tell us what you have in mind. Glenn or his son will get back to you to talk
          through scope, materials and a real estimate. Prefer to talk first? Call{" "}
          <a className="text-accent hover:underline" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>

        {sent ? (
          <div className="mt-10 rounded-sm border border-accent/40 bg-card p-8">
            <h2 className="font-display text-2xl text-primary">Request recorded</h2>
            <p className="mt-3 text-muted-foreground">
              Thanks — your details are saved on this device. Until the spreadsheet
              connection is switched on, please also send a quick note to{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              so nothing gets missed.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
            <label className="grid gap-2 text-sm">
              <span className="font-display text-primary">Project type</span>
              <select
                name="projectType"
                className="rounded-sm border border-input bg-card px-3 py-2 text-sm outline-hidden focus:border-accent"
              >
                {projectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <Field label="Ideal timeline" name="timeline" placeholder="e.g. next 2 months" />
            <Field label="Budget range" name="budget" placeholder="Optional" className="sm:col-span-2" />
            <label className="grid gap-2 text-sm sm:col-span-2">
              <span className="font-display text-primary">Project details</span>
              <textarea
                name="details"
                rows={6}
                required
                placeholder="Room, dimensions, wood species, engraving text, anything you've already got drawn up."
                className="rounded-sm border border-input bg-card px-3 py-2 text-sm outline-hidden focus:border-accent"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={busy}
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
              >
                {busy ? "Sending…" : "Send request"}
              </button>
            </div>
          </form>
        )}

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          Note: bookings are currently stored locally as a placeholder. See{" "}
          <code>src/lib/booking.ts</code> to connect this form to an Excel/Google Sheet or
          a database later — the submit handler is already wired to a single function.
        </p>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm ${className}`}>
      <span className="font-display text-primary">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-sm border border-input bg-card px-3 py-2 text-sm outline-hidden focus:border-accent"
      />
    </label>
  );
}
