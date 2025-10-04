import Link from "next/link";

export default function AshevilleServicePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/service-area">Service Area</Link> / Asheville, NC
      </nav>

      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
        Roofing in Asheville, NC
      </h1>
      <p className="mt-3 text-slate-700">
        Pedro&apos;s Professional Roofing serves Asheville with shingle and
        standing seam metal roof installation and repairs. Fully insured, 25+
        years of hands-on experience.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Shingle Roofing</h2>
          <p className="mt-2 text-slate-700">
            Architectural shingles with proper underlayment, flashing, and
            ventilation.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Standing Seam Metal</h2>
          <p className="mt-2 text-slate-700">
            Clean lines, energy efficiency, and durability—ideal for mountain
            weather.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Roof Repair</h2>
          <p className="mt-2 text-slate-700">
            Leaks, storm damage, and ventilation issues fixed quickly and
            correctly.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/#contact"
          className="rounded-xl bg-red-700 px-5 py-3 text-white font-semibold"
        >
          Get a Free Quote
        </Link>
      </div>
    </main>
  );
}
