import Link from "next/link";
import { cities } from "../lib/cities";

export default function ServiceAreaIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Service Area</h1>
      <p className="mt-3 text-slate-700">
        We’re based in Marion (28752) and proudly serve homes and businesses
        across Western North Carolina.
      </p>
      <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {cities.map((c) => (
          <li
            key={c.slug}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm"
          >
            <Link href={`/service-area/${c.slug}`}>{c.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
