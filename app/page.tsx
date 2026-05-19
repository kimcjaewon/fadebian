import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <CtaStrip />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
