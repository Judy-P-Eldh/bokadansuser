import About from "@/components/about";
// import Classes from "@/components/classes";
import Contact from "@/components/contact";
import FaqSection from "@/components/faqsection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RegisterSection from "@/components/registersection";
import ScheduldeSection from "@/components/schedulesection";
import { getCourseName, getCourseNames } from "@/lib/dbactions";
// import { getCourses } from "@/lib/dbactions";

export default async function Home() {
  const courseName = await getCourseName("Dansmix 1");
  console.log('Kursnamn: ', courseName);

   const courseNames = await getCourseNames(); //Skicka in i registerSection
  return (
    <main>
      <Header />
      <Hero />
      <About />
      {/* <Classes courses={[courses]} count={courses.count ?? 0} /> */}
      <ScheduldeSection />
      <RegisterSection />
      <Contact />
      <FaqSection />
      <Footer />
    </main>
  );
}
