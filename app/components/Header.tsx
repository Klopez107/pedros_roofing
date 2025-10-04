"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Pedro's Roofing logo"
            width={44}
            height={44}
          />
          <span className="font-extrabold tracking-tight text-xl">
            Pedro&apos;s Professional Roofing
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#services" className="hover:text-red-700">
            Services
          </Link>
          <Link href="/#gallery" className="hover:text-red-700">
            Gallery
          </Link>
          <Link href="/#service-area" className="hover:text-red-700">
            Service Area
          </Link>
          <Link href="/#contact" className="hover:text-red-700">
            Contact
          </Link>
          <a
            href="tel:+18285277287"
            className="rounded-xl bg-red-700 px-4 py-2 font-semibold text-white"
          >
            (828) 527-7287
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="i-lucide-menu size-6" />
          <span className="sr-only">Open Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <Link href="/#services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/#gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/service-area" onClick={() => setOpen(false)}>
              Service Area
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a
              href="tel:+18285277287"
              className="rounded-xl bg-red-700 px-4 py-2 font-semibold text-white w-fit"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
