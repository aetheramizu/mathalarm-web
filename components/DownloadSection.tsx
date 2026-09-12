import Image from "next/image";

const INSTALL_URL =
  "https://expo.dev/accounts/aetheramizus-team/projects/mathalarm/builds/90a75004-d908-40f9-96d5-dd66433d26cc";
const SOURCE_URL = "https://github.com/aetheramizu/mathalarm-app";

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

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={INSTALL_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-primary inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-4 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
                  <path d="M12 3v11.2l3.6-3.6 1.4 1.4L12 17l-5-5 1.4-1.4L12 14.2V3h0zM5 19h14v2H5z" />
                </svg>
                Download &amp; Try
              </a>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-line-bright px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-elevated"
              >
                <svg viewBox="0 0 16 16" aria-hidden className="size-4" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-2.91-.88-2.91-2.9 0-.83.3-1.51.79-2.04-.08-.2-.35-1 .07-2.08 0 0 .61-.19 2 .76.58-.16 1.2-.24 1.81-.24s1.23.08 1.81.24c1.39-.96 2-.76 2-.76.42 1.08.15 1.88.07 2.08.49.53.79 1.2.79 2.04 0 2.03-1.14 2.7-2.92 2.9.3.26.56.76.56 1.54 0 1.11-.01 2-.01 2.27 0 .21.15.46.55.38A7.995 7.995 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                View source
              </a>
            </div>
            <p className="mt-5 font-mono text-xs text-ink-faint">
              Version 1.0.0 · Requires Android 8.0 or later
            </p>
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
