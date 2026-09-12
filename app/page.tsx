import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
      </main>
    </>
  );
}
