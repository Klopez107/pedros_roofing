import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Roofing in Black Mountain, NC | Pedro's Professional Roofing",
  description:
    "Shingle and standing seam metal roofing in Black Mountain, NC. Repairs, replacements, and installs by an insured roofer with 25+ years of experience.",
};

export default function BlackMountainServicePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/service-area">Service Area</Link> / Black Mountain, NC
      </nav>

      {/* Hero */}
      <header className="mt-4 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Roofing in Black Mountain, NC
          </h1>
          <p className="mt-3 text-slate-700">
            Black Mountain homes need roofs that handle rain, wind, and mountain
            sun. Pedro&apos;s Professional Roofing installs shingles and
            standing seam metal systems for long-term value and great curb
            appeal.
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
            src="/images/img_8.jpeg"
            alt="Roofing project in Black Mountain, NC"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* Local context */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Durable roofing, built for the mountains
        </h2>
        <p className="mt-2 text-slate-700">
          From heavy rains to high UV exposure, Black Mountain weather demands
          quality. We recommend shingles for affordability and style, and
          standing seam metal for maximum lifespan and efficiency.
        </p>
      </section>

      {/* Services */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Our services in Black Mountain</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Shingle Roofing</h3>
            <p className="mt-2 text-slate-700">
              Architectural shingles installed with proper underlayment and
              flashing for durability.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Standing Seam Metal</h3>
            <p className="mt-2 text-slate-700">
              Modern, energy-efficient, and highly durable—perfect for Black
              Mountain&apos;s climate.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Roof Repair</h3>
            <p className="mt-2 text-slate-700">
              Leak fixes, storm damage, flashing issues, and ventilation
              problems solved quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          What Black Mountain homeowners say
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “On time, courteous, and the new roof looks fantastic.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Homeowner, Black Mountain
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Pedro&apos;s Roofing did a clean install and handled storm damage
              repairs fast.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Business owner, Black Mountain
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Black Mountain FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Do you offer free quotes?</h3>
            <p className="mt-2 text-slate-700">
              Yes, we provide free, no-pressure quotes for homeowners in Black
              Mountain.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Which roof type works best here?</h3>
            <p className="mt-2 text-slate-700">
              Both shingles and standing seam metal work well. We’ll recommend
              the best fit based on your home and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">
            Serving Black Mountain & nearby
          </h2>
          <p className="mt-2 text-slate-700">
            We proudly serve Black Mountain and nearby communities in Buncombe
            County. Call us to confirm your area.
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
            title="Map of Black Mountain, NC"
            aria-label="Map of Black Mountain, NC"
            src="https://www.google.com/maps?q=Black%20Mountain,NC&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-12 rounded-2xl bg-gradient-to-r from-red-700 to-slate-900 p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              Ready for a quote in Black Mountain?
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

      {/* Internal link */}
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
