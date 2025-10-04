import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Roofing in Charlotte, NC | Pedro's Professional Roofing",
  description:
    "Shingle and standing seam metal roofing in Charlotte, NC. Repairs, replacements, and installs by an insured roofer with 25+ years of experience.",
};

export default function CharlotteServicePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/service-area">Service Area</Link> / Charlotte, NC
      </nav>

      <header className="mt-4 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Roofing in Charlotte, NC
          </h1>
          <p className="mt-3 text-slate-700">
            We install shingle and standing seam metal roofs for Charlotte’s
            fast-growing neighborhoods. Our focus is on curb appeal, durability,
            and clean workmanship backed by decades of experience.
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
            src="/images/img_6.jpg"
            alt="Charlotte, NC roofing"
            fill
            sizes="(max-width:768px)100vw,50vw"
            className="object-cover"
          />
        </div>
      </header>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Roofing for Queen City weather</h2>
        <p className="mt-2 text-slate-700">
          From summer storms to strong sun, we recommend shingles for value and
          metal for long-term performance.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Our services in Charlotte</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Shingle Roofing</h3>
            <p className="mt-2 text-slate-700">
              Architectural shingles with proper flashing and ventilation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Standing Seam Metal</h3>
            <p className="mt-2 text-slate-700">
              Modern look, energy efficiency, and durability.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Roof Repair</h3>
            <p className="mt-2 text-slate-700">
              Leak fixes, storm damage, and ventilation issues.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Charlotte testimonials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Professional team and a flawless install.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Homeowner, Charlotte
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-800">
              “Great communication and workmanship.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              — Business owner, Charlotte
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Charlotte FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">
              Do you work across Mecklenburg County?
            </h3>
            <p className="mt-2 text-slate-700">
              Yes—call to confirm your exact neighborhood.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">
              Do you help with insurance claims?
            </h3>
            <p className="mt-2 text-slate-700">
              We can provide documentation and recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Serving Charlotte & nearby</h2>
          <p className="mt-2 text-slate-700">
            From Uptown to surrounding suburbs—get in touch for availability.
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
            title="Map of Charlotte, NC"
            aria-label="Map of Charlotte, NC"
            src="https://www.google.com/maps?q=Charlotte,NC&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-gradient-to-r from-red-700 to-slate-900 p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              Ready for a quote in Charlotte?
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
