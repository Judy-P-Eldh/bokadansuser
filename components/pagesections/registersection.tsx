import { CheckIcon } from "lucide-react";
import RegisterInfo from "../registeritems/registerinfo";

export default function RegisterSection() {
  return (
    <section id="register" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-purple-600 text-white rounded-xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 pr-16">
              <h2 className="text-3xl font-bold mb-4">Redo för dans?</h2>
              <p className="text-lg mb-6">Anmäl dig idag. Begränsat antal platser.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-purple-700 px-4 py-2 rounded-full">
                  <CheckIcon />
                  <span>Utbildad och erfaren lärare</span>
                </div>
                <div className="flex items-center bg-purple-700 px-4 py-2 rounded-full">
                  <CheckIcon />
                  <span>Härlig gemenskap</span>
                </div>
                <div className="flex items-center bg-purple-700 px-4 py-2 rounded-full">
                  <CheckIcon />
                  <span>Regelbundna uppträdanden</span>
                </div>
              </div>
              <p className="text-md font-bold my-6">Till dig som testar denna webbsida:</p>
              <p className="text-md mb-4">{`- Om du skickar formuläret, skriv gärna "Test" någonstans för att undvika några missförstånd.`}</p>
              <p className="text-md mb-4">{`- Danskurserna som visas är bara exempel och går inte att anmäla sig till på riktigt.`}</p>
              <p className="text-md mb-4">{`- Vill du skicka kommentarer eller synpunkter går det bra att använda kontaktformuläret under "Mejla oss", alternativt höra av dig till mig personligen.
                Ange gärna om du använder dator, mobil eller surfplatta.`}</p>
            </div>
            <div className="md:w-1/3">
              <RegisterInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}