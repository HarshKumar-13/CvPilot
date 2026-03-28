import Hero from "@/components/sections/Hero";
import SmarterSection from "@/components/sections/SmarterSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SmarterSection />
      <TemplatesSection />
      <Footer />
    </main>
  );
}