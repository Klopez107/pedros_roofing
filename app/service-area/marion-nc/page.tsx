import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Roofing in Marion, NC | Pedro's Professional Roofing",
  description:
    "Shingle and standing seam metal roofing in Marion, NC. Repairs, replacements, and installations by an insured local roofer with 25+ years of experience.",
};

export default function MarionServicePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/service-area">Service Area</Link> / Marion, NC
      </nav>

      {/* Hero / Intro */}
      <header className="mt-4 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Roofing in Marion, NC
          </h1>
          <p className="mt-3 text-slate-700">
            Pedro&apos;s Professional Roofing is proud to serve our hometown of
            Marion with reliable shingle and standing seam metal roofing. With
            25+ years of hands-on experience and full insurance, we handle
            repairs, replacements, and new installs built for Western North
            Carolina weather.
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

        {/* Local photo (replace with a real Marion project image if available) */}
        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
          <Image
            src="/images/img_13.jpg"
            alt="Roofing project in Marion, NC"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </header>

      {/* Local context */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Built for Marion&apos;s climate</h2>
        <p className="mt-2 text-slate-700">
          From summer downpours to winter cold snaps, roofs in Marion need solid
          underlayment, proper flashing, and balanced ventilation. We recommend
          architectural shingles for value and curb appeal, and standing seam
          metal when long-term durability and energy efficiency are the
          priority.
        </p>
      </section>

      {/* Services in this city */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Our services in Marion</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Shingle Roofing</h3>
            <p className="mt-2 text-slate-700">
              Architectural shingles with quality underlayment, flashing, and
              ridge ventilation for a long service life.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Standing Seam Metal</h3>
            <p className="mt-2 text-slate-700">
              Clean lines and excellent durability. Great for Marion&apos;s
              changing seasons and energy efficiency.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Roof Repair</h3>
            <p className="mt-2 text-slate-700">
              Leaks, storm damage, and ventilation issues fixed quickly and
              correctly, with honest recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials (first-party) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">What Marion homeowners say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Replace these with real first-party quotes as you collect them */}
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “They replaced our shingle roof fast and the cleanup was spotless.
              We&apos;ll use them again.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Local homeowner, Marion
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Professional, friendly, and the standing seam looks incredible.
              Highly recommend.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Business owner, Marion
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Local mini FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Marion FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">
              Do you offer free quotes in Marion?
            </h3>
            <p className="mt-2 text-slate-700">
              Yes. We provide free quotes and honest recommendations, usually
              within 24–48 hours depending on schedule.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Can you repair storm damage?</h3>
            <p className="mt-2 text-slate-700">
              Absolutely. We handle leaks, missing shingles, flashing issues,
              and ventilation fixes. We can also advise on insurance claims
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Map + contact CTA */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">
            Serving Marion and nearby towns
          </h2>
          <p className="mt-2 text-slate-700">
            We&apos;re based right here in Marion (28752) and work across
            Western NC. Not sure if we serve your area? Call us and we&apos;ll
            let you know.
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

        {/* Google Map embed centered on Marion */}
        <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
          <iframe
            title="Map of Marion, NC"
            aria-label="Map of Marion, NC"
            src="https://www.google.com/maps?q=Marion,NC&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-12 rounded-2xl bg-gradient-to-r from-red-700 to-slate-900 p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Ready for a quote in Marion?</h2>
            <p className="text-white/90">
              Free quotes. Shingle and standing seam specialists. Fully insured.
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

      {/* Helpful internal links */}
      <div className="mt-10 text-sm text-slate-600">
        Looking for other areas? Visit our{" "}
        <Link href="/service-area" className="underline">
          full Service Area
        </Link>
        .
      </div>
    </main>
  );
}
