import Link from "next/link";
import { cities } from "../lib/cities";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Service area</h2>
        <p className="mt-2 text-slate-700">
          Based in Marion (28752) and serving Western North Carolina.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {cities.map((c) => (
            <li
              key={c.slug}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:bg-red-50 hover:border-red-200 transition"
            >
              <Link href={`/service-area/${c.slug}`}>{c.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
