"use client";
import { useState } from "react";

const CONTACT_FORMSPREE_ENDPOINT = "https://formspree.io/f/yourEndpointHere"; // <-- replace me

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate bg-gradient-to-tl from-red-700/10 via-white to-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold">Get a free quote</h2>
          <p className="mt-2 text-slate-700">
            Tell us a bit about your roof and we’ll get back to you promptly.
          </p>

          {/* ✅ fixed: form now closes properly */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            <div className="col-span-1">
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Phone</label>
              <input
                name="phone"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Address</label>
              <input
                name="address"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Roof Type</label>
              <select
                name="roofType"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              >
                <option>Shingle</option>
                <option>Standing Seam Metal</option>
                <option>Other / Not Sure</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">
                Service Needed
              </label>
              <select
                name="service"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
              >
                <option>Repair</option>
                <option>Installation / Replacement</option>
                <option>Inspection</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
                placeholder="Tell us about your roof, preferred timing, etc."
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-xl bg-red-700 px-5 py-3 text-white font-semibold"
              >
                {status === "submitting" ? "Sending..." : "Request Quote"}
              </button>
              <a href="tel:+18285277287" className="font-semibold">
                Or call (828) 527-7287
              </a>
            </div>

            {status === "success" && (
              <p className="md:col-span-2 text-green-700">
                Thanks! We received your request and will reach out soon.
              </p>
            )}
            {status === "error" && (
              <p className="md:col-span-2 text-red-700">
                Something went wrong. Please call us directly or try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
