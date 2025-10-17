import Link from "next/link";

export default function ContactInfo() {
        return (
            <section id="contactinfo">
                <div className="grid grid-cols-1  gap-4 mb-4">
                    <p>Fågor och kursanmälan sker via formuläret. Efter anmälan till kurs kommer mer ingående information. </p>
                </div>
               
                <Link className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium" href="mailto:bizadvancers@gmail.com">Mejla oss</Link>
            </section>
        );
    }