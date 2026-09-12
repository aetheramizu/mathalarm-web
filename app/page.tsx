import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
