import Image from "next/image";

const steps = [
  {
    number: "01",
    label: "Set alarm",
    title: "Set your alarm",
    body: "Choose when you want to wake up and configure the alarm.",
    image: "/screens/alarms.png",
    alt: "The MathAlarm alarm list, with the next alarm at 6:07 AM counting down and three saved alarms below it",
  },
  {
    number: "02",
    label: "Alert",
    title: "The alarm rings",
    body: "When it is time, MathAlarm wakes you with an alarm.",
    image: "/screens/alarm-ringing.png",
    alt: "The wake screen as the alarm rings, showing problem 1 of 3 and an empty answer field",
  },
  {
    number: "03",
    label: "Challenge",
    title: "Solve the challenge",
    body: "Answer the math problem shown on screen.",
    image: "/screens/math-challenge.png",
    alt: "The wake screen on problem 3 of 3, with 13 + 29 answered as 42",
    accent: true,
  },
  {
    number: "04",
    label: "Awake",
    title: "Start your day",
    body: "Solve it correctly, log a quick morning mood check-in, and start your day.",
    image: "/screens/morning-checkin.png",
    alt: "The morning check-in screen asking for your mood, with Excited selected",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-line py-20 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold tracking-[0.28em] text-ink-faint">
            HOW IT WORKS
          </span>
          <h2 className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            Four steps to get you out of bed.
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-x-6">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col border-t border-line pt-6">
              <div className="flex items-baseline gap-3 font-mono text-xs tracking-[0.2em] uppercase">
                <span
                  className={
                    step.accent ? "font-semibold text-cyan" : "font-semibold text-pink-text"
                  }
                >
                  {step.number}
                </span>
                <span className="text-ink-faint">{step.label}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>

              <div className="mt-8 lg:mt-auto lg:pt-8">
                <StepScreen src={step.image} alt={step.alt} />
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t border-line pt-14 text-center md:mt-28">
          <p className="text-[clamp(1.75rem,5vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            Hear it. Solve it.{" "}
            <span className="text-gradient-brand">Wake up.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* One walkthrough screen, in the same 9:19.5 frame as the hero device. */
function StepScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[200px] rounded-[1.75rem] border border-line-bright bg-elevated p-1.5 sm:max-w-[220px]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.35rem] border border-line bg-base">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 200px, 220px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
