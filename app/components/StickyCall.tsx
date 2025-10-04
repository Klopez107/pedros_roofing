export default function StickyCall() {
  return (
    <a
      href="tel:+18285277287"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-3 text-white shadow-lg ring-1 ring-white/10 md:hidden"
      aria-label="Call Pedro's Professional Roofing"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M1.5 3.75A2.25 2.25 0 013.75 1.5h1.372c.86 0 1.612.586 1.818 1.422l.74 3.042a1.875 1.875 0 01-.694 1.94l-1.293.97a.75.75 0 00-.213.958 11.285 11.285 0 006.035 6.035.75.75 0 00.957-.213l.97-1.293a1.875 1.875 0 011.94-.694l3.042.74c.836.206 1.422.958 1.422 1.818V20.25a2.25 2.25 0 01-2.25 2.25H17.25C8.593 22.5 1.5 15.407 1.5 6.75V3.75z" />
      </svg>
      Call Now
    </a>
  );
}
