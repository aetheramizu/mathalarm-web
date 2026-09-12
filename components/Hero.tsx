import Image from "next/image";

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
              <span className="font-mono text-xs font-semibold tracking-[0.28em] text-pink-text">
                MATHALARM
              </span>
              <span aria-hidden className="h-px w-12 bg-line-bright" />
            </div>

            <h1 className="mt-7 text-[clamp(2.75rem,9vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
              Wake up.
              <br />
              <span className="text-gradient-brand">Think first.</span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl">
              An alarm that makes you solve a math challenge before you can
              dismiss it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#download"
                className="bg-gradient-primary group inline-flex items-center gap-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
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

            <div className="mt-9 flex items-center gap-2.5 font-mono text-xs tracking-wide text-ink-faint">
              <span className="flex items-center gap-1.5">
                <AndroidIcon />
                Android
              </span>
              <span aria-hidden>·</span>
              <span>Built with Expo &amp; React Native</span>
            </div>
          </div>

          <div className="pt-6 sm:pt-4 lg:col-span-5 lg:pt-0">
            <PhoneFrame />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Hero device. The two offset outlines behind it echo the app's math lock ring. */
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
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] border border-line bg-base">
            <Image
              src="/screens/wake-solving.png"
              alt="The MathAlarm wake screen on problem 4 of 5, showing the equation 9x − 69 = 3 with x = 8 entered above the keypad"
              fill
              priority
              sizes="(max-width: 640px) 248px, (max-width: 1024px) 288px, 310px"
              className="object-cover"
            />
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

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 text-cyan" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0003 0-.5517.4482-1.0003.9993-1.0003.5517 0 1.0003.4486 1.0003 1.0003 0 .5517-.4486 1.0003-1.0003 1.0003m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0003 0-.5517.4482-1.0003.9993-1.0003.5517 0 1.0003.4486 1.0003 1.0003 0 .5517-.4486 1.0003-1.0003 1.0003m11.4045-6.02l1.997-3.4587c.0975-.169.0396-.3859-.1294-.4834-.169-.0975-.3859-.0396-.4834.1294l-2.0234 3.5044c-1.423-.652-3.0336-1.025-4.7423-1.025s-3.3193.373-4.7423 1.025L5.7577 5.5131c-.0975-.169-.3144-.2269-.4834-.1294-.169.0975-.2269.3144-.1294.4834l1.997 3.4587C3.593 11.233 1.25 15.176 1.25 19.75h21.5c0-4.574-2.343-8.517-5.8725-10.4286" />
    </svg>
  );
}
