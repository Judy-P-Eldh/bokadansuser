import ContactCards from "../contactitems/contactcards";
import ContactForm from "../contactitems/contactform";
import MapSection from "../contactitems/mapsection";

export default function Contact() {
    return(
        <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Kontakta Oss</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Har du frågor? Vi hjälper dig gärna!</p>
          </div>
          <ContactCards />
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <MapSection />
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6">Mejla oss</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
}