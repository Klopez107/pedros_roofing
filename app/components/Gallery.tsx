// import Image from "next/image";

// export default function Gallery() {
//   const imgs = [
//     { src: "/images/img_4.jpg", alt: "Shingle roof ridge" },
//     { src: "/images/img_2.jpg", alt: "New construction roof" },
//     { src: "/images/img_3.jpg", alt: "Metal roof detail" },
//   ];
//   return (
//     <section id="gallery">
//       <div className="mx-auto max-w-6xl px-4 py-16">
//         <h2 className="text-3xl font-bold">Recent projects</h2>
//         <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//           {imgs.map((img) => (
//             <div
//               key={img.src}
//               className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const width = card ? card.offsetWidth + 16 : 320; // fallback
    el.scrollBy({ left: dir === "next" ? width : -width, behavior: "smooth" });
  };

  const imgs = [
    { src: "/images/img_12.jpeg", alt: "Shingle roof ridge" },
    { src: "/images/img_13.jpg", alt: "New construction roof" },
    { src: "/images/img_7.jpg", alt: "Metal roof detail" },
    { src: "/images/img_10.jpg", alt: "Shingle roof ridge" },
    { src: "/images/img_5.jpg", alt: "New construction roof" },
    { src: "/images/img_3.jpg", alt: "Metal roof detail" },
  ];

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold">Recent projects</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollByCard("prev")}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCard("next")}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Scroll-snap row */}
        <div
          ref={scroller}
          className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* hide scrollbars */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {imgs.map((img) => (
            <div
              key={img.src}
              data-card
              className="snap-start shrink-0 w-[85%] sm:w-[420px] h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow border border-slate-200 relative"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 85vw, 420px"
                className="object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>

        {/* Mobile controls below */}
        <div className="mt-4 flex sm:hidden justify-center gap-3">
          <button
            onClick={() => scrollByCard("prev")}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
          >
            Prev
          </button>
          <button
            onClick={() => scrollByCard("next")}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
