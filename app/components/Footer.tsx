import { cities } from "../lib/cities";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Pedro&apos;s Professional Roofing</h4>
          <p className="mt-2 text-slate-700">
            Trusted roofing in Western North Carolina. Shingle & standing seam
            metal specialists.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2">
            Phone:{" "}
            <a className="underline" href="tel:+18285277287">
              (828) 527-7287
            </a>
          </p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:pedrosroofing828@gmail.com">
              pedrosroofing828@gmail.com
            </a>
          </p>
          <p>Address: 157 Clark St. Marion, NC 28752</p>
        </div>
        <div className="mt-4 gap-3">
          <h4 className="font-semibold mb-3">Social Media</h4>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100078860492248"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M22 12.06C22 6.478 17.523 2 11.94 2 6.478 2 2 6.478 2 12.06c0 4.998 3.657 9.146 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.873h2.773l-.443 2.91h-2.33V22C18.343 21.206 22 17.058 22 12.06z" />
            </svg>
            Facebook
          </a>

          {/* WhatsApp (click-to-chat) */}
          <a
            href="https://wa.me/18285277287?text=Hi%20Pedro%E2%80%99s%20Roofing%2C%20I%E2%80%99d%20like%20a%20roof%20quote."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M19.11 17.64c-.31-.16-1.82-.9-2.11-1-.29-.11-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.21-.36.24-.67.08-1.82-.9-3-1.61-4.2-3.65-.32-.55.32-.51.92-1.7.1-.21.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.35-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.33.51 1.78.65.75.24 1.44.2 1.98.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.29-.21-.6-.37zM27.55 4.45C24.54 1.44 20.63 0 16.53 0 7.41 0 .06 7.35.06 16.47c0 2.9.76 5.72 2.2 8.2L0 32l7.5-2.16c2.42 1.32 5.16 2.02 7.95 2.02h.01c9.12 0 16.47-7.35 16.47-16.47 0-4.1-1.44-8.01-4.45-11.03zM16.47 29.1h-.01c-2.49 0-4.93-.67-7.05-1.94l-.5-.3-4.45 1.28 1.32-4.34-.32-.53c-1.37-2.26-2.1-4.86-2.1-7.5C3.36 8.68 9.06 3 16.52 3c3.55 0 6.89 1.38 9.39 3.9 2.51 2.51 3.89 5.86 3.88 9.4 0 7.46-6.08 13.75-13.32 12.8z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 pb-6">
        © {new Date().getFullYear()} Pedro&apos;s Professional Roofing. All
        rights reserved.
      </div>
    </footer>
  );
}
