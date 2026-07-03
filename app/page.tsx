import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ReferralProgram from "@/components/ReferralProgram";
import InstagramGrid from "@/components/InstagramGrid";
import Visit from "@/components/Visit";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Reviews />
        <ReferralProgram />
        <InstagramGrid />
        <CtaStrip />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
