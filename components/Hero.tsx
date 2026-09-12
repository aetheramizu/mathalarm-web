export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line pt-28 pb-20 sm:pt-36 md:pt-44 md:pb-28">
      {/* Single soft accent wash — keeps the device the focal point. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-pink/8 blur-[150px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-[0.28em] text-pink">
                MATHALARM
              </span>
              <span aria-hidden className="h-px w-12 bg-line-bright" />
            </div>

            <h1 className="mt-7 text-[clamp(2.75rem,9vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
              Wake up.
              <br />
              <span className="text-pink">Think first.</span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl">
              An alarm that makes you solve a math challenge before you can
              dismiss it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#download"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-pink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-pink-deep"
              >
                Download &amp; Try
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-lg border border-line-bright px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-subtle"
              >
                See how it works
              </a>
            </div>

            <p className="mt-9 font-mono text-xs tracking-wide text-ink-faint">
              Android · Built with Expo &amp; React Native
            </p>
          </div>

          <div className="pt-6 sm:pt-4 lg:col-span-5 lg:pt-0">
            <PhoneFrame />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Hero device. The screen is an intentional placeholder — drop the real
   screenshot in where the label sits, same aspect ratio, nothing else moves.
   The two offset outlines behind it echo the app's math lock ring. */
function PhoneFrame() {
  return (
    <div className="flex justify-center">
      <div className="group relative w-[248px] sm:w-[288px] lg:w-[310px]">
        {/* Backdrop ring accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 -rotate-2 rounded-[3.25rem] border border-pink/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-9 hidden rotate-1 rounded-[3.75rem] border border-cyan/10 sm:block"
        />

        <div className="relative rounded-[2.75rem] border border-line-bright bg-gradient-to-b from-[#242436] via-[#151522] to-[#0c0c14] p-2.5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-1">
          <div className="placeholder-field relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] border border-line">
            {/* Camera cutout */}
            <span
              aria-hidden
              className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/70"
            />
            <span className="absolute inset-x-0 bottom-6 text-center font-mono text-[10px] tracking-[0.22em] text-ink-faint">
              APP SCREEN
            </span>
          </div>

          {/* Side buttons */}
          <span
            aria-hidden
            className="absolute -left-px top-28 h-14 w-0.5 rounded-full bg-line-bright"
          />
          <span
            aria-hidden
            className="absolute -right-px top-24 h-9 w-0.5 rounded-full bg-line-bright"
          />
        </div>
      </div>
    </div>
  );
}
