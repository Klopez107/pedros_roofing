export default function Testimonials() {
  const quotes = [
    {
      name: "Local Homeowner",
      text: "Fast, friendly, and professional. The new shingle roof looks great and the cleanup was spotless.",
    },
    {
      name: "Business Owner",
      text: "Pedro’s team repaired our standing seam roof quickly—no more leaks. Highly recommend!",
    },
  ];
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">What our customers say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {quotes.map((q, idx) => (
            <figure
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
            >
              <blockquote className="text-slate-800">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                — {q.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
