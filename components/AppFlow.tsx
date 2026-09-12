const stages = [
  {
    number: "01",
    state: "Armed",
    body: "Save an alarm and it is persisted and armed with the native Android kernel. It survives a reboot and an app update.",
  },
  {
    number: "02",
    state: "Fires",
    body: "At the set time the kernel fires regardless of app state. A foreground service starts alarm-stream audio and vibration, so it is heard over silent mode.",
  },
  {
    number: "03",
    state: "Takes over",
    body: "A full-screen intent brings up the wake screen over the lock screen and turns the display on. No tab bar, no back gesture, nothing to swipe away.",
  },
  {
    number: "04",
    state: "Solving",
    body: "The label, elapsed ring time, progress and current problem sit above a numeric keypad. A wrong answer generates a brand-new problem, so a question cannot be guess-spammed.",
    accent: true,
  },
  {
    number: "05",
    state: "Dismissed",
    body: "Once the required problems are answered correctly the kernel is told to dismiss. Audio and vibration stop, the screen closes, and a repeating alarm re-arms its next occurrence.",
  },
  {
    number: "06",
    state: "Recorded",
    body: "The session is written to the local database: when it fired, how it ended, right and wrong answers, and how long solving took. On the first solved morning alarm of the day, a mood check-in is offered and saved alongside it, which is what Analytics reads back.",
  },
];

const difficulties = [
  {
    level: "Easy",
    problems: "1 problem",
    detail: "Single-digit addition and subtraction.",
  },
  {
    level: "Medium",
    problems: "3 problems",
    detail: "Two-digit addition and subtraction, single by two-digit multiplication.",
  },
  {
    level: "Hard",
    problems: "5 problems",
    detail: "Multi-digit multiplication, mixed operations with precedence, simple linear equations.",
  },
];

export default function AppFlow() {
  return (
    <section
      id="app-flow"
      className="scroll-mt-20 border-b border-line py-20 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <span className="font-mono text-xs font-semibold tracking-[0.28em] text-ink-faint">
          APP FLOW
        </span>
        <h2 className="mt-6 max-w-4xl text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
          Alarm rings{" "}
          <span aria-hidden className="text-pink">
            &rarr;
          </span>{" "}
          Brain engages{" "}
          <span aria-hidden className="text-cyan">
            &rarr;
          </span>{" "}
          You&rsquo;re awake
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              The alarm is armed by a native Android kernel rather than a
              JavaScript timer, so it rings with the app closed and the phone
              locked. Solving is the only way to stop it &mdash; there is no
              snooze.
            </p>
            <dl className="mt-9 space-y-3 border-t border-line pt-7 font-mono text-xs">
              {[
                ["Platform", "Android"],
                ["Storage", "Local, fully offline"],
                ["Snooze", "None"],
              ].map(([term, value]) => (
                <div key={term} className="flex justify-between gap-6">
                  <dt className="text-ink-faint">{term}</dt>
                  <dd className="text-ink-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="lg:col-span-8">
            {stages.map((stage) => (
              <li
                key={stage.number}
                className="relative border-l border-line pb-9 pl-7 last:pb-0 sm:pl-9"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[3px] top-2 size-[5px] rounded-full ${
                    stage.accent ? "bg-cyan" : "bg-line-bright"
                  }`}
                />
                <div className="flex items-baseline gap-3 font-mono text-xs tracking-[0.2em] uppercase">
                  <span
                    className={
                      stage.accent
                        ? "font-semibold text-cyan"
                        : "font-semibold text-pink-text"
                    }
                  >
                    {stage.number}
                  </span>
                  <span className="text-ink">{stage.state}</span>
                </div>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-line pt-12 md:mt-20">
          <h3 className="font-mono text-xs font-semibold tracking-[0.22em] text-ink-faint uppercase">
            Difficulty
          </h3>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {difficulties.map((difficulty) => (
              <div key={difficulty.level}>
                <dt className="flex items-baseline justify-between gap-3">
                  <span className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {difficulty.level}
                  </span>
                  <span className="font-mono text-xs text-pink-text">
                    {difficulty.problems}
                  </span>
                </dt>
                <dd className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-ink-muted">
                  {difficulty.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
