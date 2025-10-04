import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate bg-gradient-to-br from-red-700/10 via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Pedro&apos;s Professional Roofing
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            25+ years serving Western NC with dependable shingle & standing seam
            metal roofing. Fully insured. Free quotes.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-red-700 px-5 py-3 text-white font-semibold"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+18285277287"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold"
            >
              Call (828) 527-7287
            </a>
          </div>
        </div>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow">
          <Image
            src="/images/img_1.jpg"
            alt="Roofing project"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
