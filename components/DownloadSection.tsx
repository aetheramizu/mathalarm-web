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
                href="#download"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-pink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-pink-deep sm:w-auto"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
                  <path d="M12 3v11.2l3.6-3.6 1.4 1.4L12 17l-5-5 1.4-1.4L12 14.2V3h0zM5 19h14v2H5z" />
                </svg>
                Download &amp; Try
              </a>
              <p className="mt-4 font-mono text-xs text-ink-faint">
                Install link added at release.
              </p>
            </div>
          </div>

          {/* Desktop hand-off: scan to continue on the phone. */}
          <div className="hidden shrink-0 md:block">
            <QrPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}

/* QR placeholder — replace the inner field with the generated code image. */
function QrPlaceholder() {
  return (
    <div className="w-[228px] text-center">
      <div className="placeholder-field relative rounded-xl border border-line-bright p-4">
        <div className="relative aspect-square rounded-lg border border-line">
          {["left-3 top-3", "right-3 top-3", "left-3 bottom-3"].map((position) => (
            <span
              key={position}
              aria-hidden
              className={`absolute size-8 rounded-sm border-2 border-line-bright ${position}`}
            />
          ))}
          <span className="absolute inset-x-0 bottom-1/2 translate-y-1/2 font-mono text-[10px] tracking-[0.22em] text-ink-faint">
            QR CODE
          </span>
        </div>
      </div>
      <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-ink-muted uppercase">
        Scan to install
      </p>
      <p className="mt-1.5 text-xs text-ink-faint">
        Opens the download page on your phone.
      </p>
    </div>
  );
}
