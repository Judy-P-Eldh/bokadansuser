import About from "@/components/pagesections/about";
import Contact from "@/components/pagesections/contact";
import FaqSection from "@/components/pagesections/faqsection";
import Footer from "@/components/pagesections/footer";
import Header from "@/components/pagesections/header";
import Hero from "@/components/pagesections/hero";
import RegisterSection from "@/components/pagesections/registersection";
import ScheduldeSection from "@/components/pagesections/schedulesection";

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
