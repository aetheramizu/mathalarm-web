export default function Footer() {
  return (
    <footer className="py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 font-mono text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-ink">
            Math<span className="text-gradient-brand">Alarm</span>
          </span>
          <span aria-hidden className="h-3 w-px bg-line-bright" />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
        <span>Android · Built with Expo &amp; React Native</span>
      </div>
    </footer>
  );
}
