import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    //About section
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="font-nunito text-3xl font-bold text-purple-800 mb-4">
              Välkommen till Boka Danskurser
            </h2>
            <p className="text-gray-700 mb-4">
              Här kan du välja kurser i olika dansstilar med erfarna danslärare.
              Anmäl dig till kurser som Show/Jazzdans, Streetdance, Modern dans,
              Balett och Barndans.
            </p>
            <ul className="flex flex-wrap gap-4 list-disc">
              <li className="flex items-center">
                <Circle className="fill-purple-700 mr-2" />
                Här finns dansklasser för alla åldrar.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                className="dark:invert rounded-lg shadow-xl w-full"
                src="/breakdancekids.jpeg"
                alt="Logotyp för Malins dans. Färglad bild med dansare som hoppar."
                width={500}
                height={100}
                priority
              />
              <div className="absolute bottom-6 right-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
               <Link href={"/larare"}>
                <p className="text-xl font-bold">15+</p>
                <p>År i branschden</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
