export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-red-700 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">
            Ready for a durable, great‑looking roof?
          </h3>
          <p className="text-white/90">
            Free quotes • Shingle & standing seam specialists • Fully insured
          </p>
        </div>
        <a
          href="#contact"
          className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900"
        >
          Request Your Free Quote
        </a>
      </div>
    </section>
  );
}
