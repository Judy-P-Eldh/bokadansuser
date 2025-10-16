import About from "@/components/about";
import Contact from "@/components/contact";
import FaqSection from "@/components/faqsection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RegisterSection from "@/components/registersection";
import ScheduldeSection from "@/components/schedulesection";

export default async function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ScheduldeSection />
      <RegisterSection />
      <Contact />
      <FaqSection />
      <Footer />
    </main>
  );
}
