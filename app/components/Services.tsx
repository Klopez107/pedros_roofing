import FadeIn from "./FadeIn";

const services = [
  {
    title: "Roof Repair",
    desc: "Quick fixes for leaks, storm damage, and ventilation issues.",
  },
  {
    title: "Roof Installation",
    desc: "New roof installs with durable materials and workmanship.",
  },
  {
    title: "Shingle Roofing",
    desc: "Architectural shingles built for long service life.",
  },
  {
    title: "Standing Seam Metal",
    desc: "Energy-efficient, long-lasting metal roofing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <FadeIn
              key={s.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
            >
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
