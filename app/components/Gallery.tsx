import Image from "next/image";

export default function Gallery() {
  const imgs = [
    { src: "/images/img_1.jpg", alt: "Shingle roof ridge" },
    { src: "/images/img_2.jpg", alt: "New construction roof" },
    { src: "/images/img_3.jpg", alt: "Metal roof detail" },
  ];
  return (
    <section id="gallery">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Recent projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {imgs.map((img) => (
            <div
              key={img.src}
              className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
