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
        <div>
          <h4 className="font-semibold">Service Area</h4>
          <p className="mt-2 text-slate-700">
            Marion, Asheville, Hickory, Charlotte, Boone, Weaverville, Old Fort,
            Spruce Pine, Black Mountain
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 pb-6">
        © {new Date().getFullYear()} Pedro&apos;s Professional Roofing. All
        rights reserved.
      </div>
    </footer>
  );
}
