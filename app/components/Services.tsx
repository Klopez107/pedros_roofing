export default function Services() {
  const items = [
    {
      title: "Roof Installation",
      desc: "Shingle & standing seam metal roofs installed with care and precision.",
    },
    {
      title: "Roof Repair",
      desc: "Leak fixes, storm damage, flashing & ventilation—fast, reliable service.",
    },
    {
      title: "Free Quotes",
      desc: "Transparent pricing and honest recommendations for your home or business.",
    },
  ];
  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-slate-700">
          Quality materials. Clean workmanship. Done right the first time.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-slate-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
