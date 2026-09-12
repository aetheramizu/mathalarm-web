const columns = [
  {
    label: "Conventional alarm",
    accent: false,
    steps: ["The alarm rings", "A drowsy hand taps dismiss", "Back to sleep"],
    result: "Tap → Sleep again",
  },
  {
    label: "MathAlarm",
    accent: true,
    steps: [
      "The alarm rings",
      "You solve a short math problem",
      "The alarm stops — and you are awake",
    ],
    result: "Think → Wake up",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="scroll-mt-20 border-b border-line py-20 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-[0.28em] text-ink-faint">
            THE IDEA
          </span>
          <h2 className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            Waking up shouldn&rsquo;t be that easy.
          </h2>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              Traditional alarms only ask you to tap a button. When you&rsquo;re
              still half asleep, that&rsquo;s often all it takes to turn the
              alarm off and go back to sleep.
            </p>
            <p className="text-ink">
              MathAlarm adds one small mental challenge before the alarm can be
              dismissed.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:mt-20 md:grid-cols-2 md:gap-0">
          {columns.map((column, index) => (
            <div
              key={column.label}
              className={
                index === 1
                  ? "border-t border-line pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12 lg:pl-16"
                  : "md:pr-12 lg:pr-16"
              }
            >
              <h3
                className={`font-mono text-xs font-semibold tracking-[0.22em] uppercase ${
                  column.accent ? "text-cyan" : "text-ink-faint"
                }`}
              >
                {column.label}
              </h3>

              <ol className="mt-8 space-y-5">
                {column.steps.map((step, stepIndex) => (
                  <li key={step} className="flex gap-5">
                    <span
                      className={`font-mono text-xs leading-7 ${
                        column.accent ? "text-cyan/70" : "text-ink-faint"
                      }`}
                    >
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg leading-7 ${
                        column.accent ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <p
                className={`mt-9 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl ${
                  column.accent ? "text-white" : "text-ink-faint"
                }`}
              >
                {column.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
