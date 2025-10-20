import ContactCards from "@/components/contactitems/contactcards";
import Footer from "@/components/pagesections/footer";
import Header from "@/components/pagesections/header";
import Hero from "@/components/pagesections/hero";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dansstilar() {
    return (
        <div className="h-dvh">
            <Header />
            <Hero />
            {/* Dansstil 1 */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h2 className="font-nunito text-3xl font-bold text-purple-800 mb-4">Dansmix 1 och 2</h2>
                            <p className="text-gray-700 mb-4">I Dansmix utgår vi från olika dansstilar i olika övningar och koreografier
                                samt får träna på att dansa i grupp och samarbeta. Vi testar dansstilarna Showjazz, Streetdance och Modern Dans som grund.
                                I Dansmix 1 lär vi dansens grunder och blandar med lekfullt lärande. I Dansmix 2 får eleverna lite mer utmaning i steggrunder och koreografi.
                            </p>
                            <div className="flex gap-4">
                                <p className="text-purple-900 mb-4">
                                    <Link href="/#schedule" className="hover:underline">Se schema</Link>
                                </p>
                                <p className="text-purple-900 mb-4">
                                    <Link href="/#register" className="hover:underline">Till kursanmälan</Link>
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-4 mt-4 list-disc">
                                <li className="flex items-center">
                                    <Circle className="fill-purple-700 mr-2" />
                                    Dansmix 1 - Tisdagar kl. 17:00
                                </li>
                                <li className="flex items-center">
                                    <Circle className="fill-purple-700 mr-2" />
                                    Dansmix 2 - Tisdagar kl. 17:50
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <Image
                                    className="dark:invert rounded-lg shadow-xl w-full"
                                    src="/breakdancekids.jpeg"
                                    alt="Barn som dansar breakdance."
                                    width={500}
                                    height={100}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dansstil 2 */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <div className="relative">
                                <Image
                                    className="dark:invert object-top-left rounded-lg shadow-xl w-full"
                                    src="/breakdancekids.jpeg"
                                    alt="Barn som dansar breakdance."
                                    width={500}
                                    height={100}
                                    priority
                                />
                            </div>

                        </div>
                        <div className="md:w-1/2">
                            <h2 className="font-nunito text-3xl font-bold text-purple-800 mb-4">Showdans</h2>
                            <p className="text-gray-700 mb-4">Showdans utgår i grunden från jazzdans men vi tar även influenser från andra stilar som Streetdance och Modern dans.
                                Här får man arbeta med övningar och koreografier samt träna på att dansa i grupp, samarbeta och känna gemenskap i dansen.
                            </p>
                            <div className="flex gap-4">
                                <p className="text-purple-900 mb-4">
                                    <Link href="/#schedule" className="hover:underline">Se schema</Link>
                                </p>
                                <p className="text-purple-900 mb-4">
                                    <Link href="/#register" className="hover:underline">Till kursanmälan</Link>
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-4 list-disc">
                                <li className="flex items-center">
                                    <Circle className="fill-purple-700 mr-2" />
                                    Tisdagar kl. 18:30
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-100 py-20">
                <ContactCards />
            </div>
            <Footer />

        </div>
    );
}