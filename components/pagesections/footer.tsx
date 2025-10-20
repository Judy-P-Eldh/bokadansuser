import { ClockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* <!-- Footer Column 1 --> */}
          <section>
            <div className="flex items-center mb-4">
              {/* <DramaIcon className="text-3xl mr-2"/> */}
              <span className="text-xl font-bold">Boka Danskurser</span>
            </div>
            <p className="mb-4">Mer än 15 års erfarenhet.</p>

            <Image
              className="dark:invert rounded-full"
              src="/logga.png"
              alt="Logga"
              width={100}
              height={100}
            />
            <div className="mt-4">
              <Link href="https://www.facebook.com/people/Biz-Advancers/61568445538481/" className="hover:text-purple-300">Facebook</Link>
            </div>
          </section>

          {/* <!-- Footer Column 2 --> */}
          {/* <section>
              <h3 className="text-lg font-bold mb-4">Snabblänkar</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="hover:text-purple-300">Hem</Link></li>
                <li><Link href="#classNamees" className="hover:text-purple-300">Kurser</Link></li>
                <li><Link href="#schedule" className="hover:text-purple-300">Schema</Link></li>
                <li><Link href="#teachers" className="hover:text-purple-300">Lärare</Link></li>
                <li><Link href="#contact" className="hover:text-purple-300">Kontakt</Link></li>
              </ul>
             
            </section> */}

          {/*  <!-- Footer Column 3 --> */}
          <section>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon className="m-2" />
                <Link href="mailto:bizadvancers@gmail.com">Mejla oss</Link>
              </li>
              <li className="flex items-center">
                <ClockIcon className="m-2" />
                <p>Kurser alla dagar i veckan för alla åldrar</p>
              </li>
            </ul>

          </section>
        </div>
      </div>
    </footer>
  );
}