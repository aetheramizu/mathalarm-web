import Image from "next/image";

const INSTALL_URL =
  "https://expo.dev/accounts/aetheramizus-team/projects/mathalarm/builds/90a75004-d908-40f9-96d5-dd66433d26cc";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-20 border-b border-line bg-subtle py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-semibold tracking-[0.28em] text-ink-faint">
              DOWNLOAD
            </span>
            <h2 className="mt-6 text-[clamp(1.875rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Try MathAlarm on Android.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Built with Expo &amp; React Native. Install it on your phone and
              set your first alarm.
            </p>

            <div className="mt-9">
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-primary inline-flex w-full items-center justify-center gap-2.5 rounded-lg px-7 py-4 text-sm font-semibold text-white transition-[filter] hover:brightness-110 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
                  <path d="M12 3v11.2l3.6-3.6 1.4 1.4L12 17l-5-5 1.4-1.4L12 14.2V3h0zM5 19h14v2H5z" />
                </svg>
                Download &amp; Try
              </a>
            </div>
          </div>

          {/* Desktop hand-off: scan to continue on the phone. */}
          <div className="hidden shrink-0 md:block">
            <InstallQr />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Desktop hand-off. Black-on-white on a light tile: an inverted or
   dark-tinted QR is unreliable to scan. */
function InstallQr() {
  return (
    <div className="w-[216px] text-center">
      <div className="rounded-xl bg-white p-3">
        <Image
          src="/qr-install.png"
          alt="QR code linking to the MathAlarm Android install page"
          width={192}
          height={192}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-ink-muted uppercase">
        Scan to install
      </p>
      <p className="mt-1.5 text-xs text-ink-faint">
        Opens the Android build on your phone.
      </p>
    </div>
  );
}
