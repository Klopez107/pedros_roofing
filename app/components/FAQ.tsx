export default function FAQ() {
  const faqs = [
    {
      q: "Do you offer free quotes?",
      a: "Yes. We provide free quotes and honest recommendations with no pressure.",
    },
    {
      q: "What roofing types do you specialize in?",
      a: "Architectural shingles and standing seam metal roofing. We also handle repairs and flashing/ventilation fixes.",
    },
    {
      q: "Are you insured?",
      a: "Yes, fully insured. We treat every home like it’s our own.",
    },
    {
      q: "Which areas do you serve?",
      a: "Based in Marion (28752) and serving Western NC: Asheville, Hickory, Charlotte, Boone, Weaverville, Old Fort, Spruce Pine, Black Mountain.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
