import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Roofing in Asheville, NC | Pedro's Professional Roofing",
  description:
    "Shingle and standing seam metal roofing in Asheville, NC. Repairs, replacements, and installs by an insured roofer with 25+ years of experience.",
};

export default function AshevilleServicePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/service-area">Service Area</Link> / Asheville, NC
      </nav>

      <header className="mt-4 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Roofing in Asheville, NC
          </h1>
          <p className="mt-3 text-slate-700">
            Asheville’s mountain weather demands durable roofing. We install
            architectural shingles and standing seam metal roofs that handle
            heavy rain, occasional snow, and summer heat. With 25+ years of
            experience, we’re trusted by Asheville homeowners for lasting
            results.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/#contact"
              className="rounded-xl bg-red-700 px-5 py-3 text-white font-semibold"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+18285277287"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold bg-white"
            >
              Call (828) 527-7287
            </a>
          </div>
        </div>
        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
          <Image
            src="/images/img_12.jpeg"
            alt="Asheville, NC roofing"
            fill
            sizes="(max-width:768px)100vw,50vw"
            className="object-cover"
          />
        </div>
      </header>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Roofing that fits Asheville’s climate
        </h2>
        <p className="mt-2 text-slate-700">
          We recommend architectural shingles for value and appearance, and
          standing seam metal for longevity and energy efficiency—ideal for the
          Blue Ridge climate’s rain and temperature swings.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Our services in Asheville</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Shingle Roofing</h3>
            <p className="mt-2 text-slate-700">
              Architectural shingles with quality underlayment, flashing, and
              ridge ventilation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Standing Seam Metal</h3>
            <p className="mt-2 text-slate-700">
              Clean lines, long life, and efficiency—great for mountain
              conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Roof Repair</h3>
            <p className="mt-2 text-slate-700">
              Leaks, storm damage, flashing and ventilation fixes—done right.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">What Asheville homeowners say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Fast, professional, and the new roof looks great!”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Homeowner, Asheville
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Metal roof install handled perfectly. Highly recommend.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Business owner, Asheville
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Asheville FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Do you work in city limits?</h3>
            <p className="mt-2 text-slate-700">
              Yes—across Asheville and nearby neighborhoods and towns.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Shingle or metal for Asheville?</h3>
            <p className="mt-2 text-slate-700">
              Both perform well; metal excels for long life and efficiency,
              shingles for budget and curb appeal.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Serving Asheville & nearby</h2>
          <p className="mt-2 text-slate-700">
            From West Asheville to North Asheville and beyond—call to confirm
            service.
          </p>
          <div className="mt-4">
            <a
              href="tel:+18285277287"
              className="rounded-xl bg-red-700 px-5 py-3 text-white font-semibold inline-block"
            >
              Call (828) 527-7287
            </a>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Or request a quote online below.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
          <iframe
            title="Map of Asheville, NC"
            aria-label="Map of Asheville, NC"
            src="https://www.google.com/maps?q=Asheville,NC&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-gradient-to-r from-red-700 to-slate-900 p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              Ready for a quote in Asheville?
            </h2>
            <p className="text-white/90">
              Free quotes. Shingle & standing seam specialists. Fully insured.
            </p>
          </div>
          <Link
            href="/#contact"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900"
          >
            Request Your Free Quote
          </Link>
        </div>
      </section>

      <div className="mt-10 text-sm text-slate-600">
        See other areas on our{" "}
        <Link href="/service-area" className="underline">
          Service Area
        </Link>{" "}
        page.
      </div>
    </main>
  );
}
