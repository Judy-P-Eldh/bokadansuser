import ContactCards from "@/components/contactitems/contactcards";
import Footer from "@/components/pagesections/footer";
import Header from "@/components/pagesections/header";
import Hero2 from "@/components/pagesections/hero2";
import { DanceStyle } from "@/lib/data/interfaces";
import { getDanceStyles } from "@/lib/db";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Dansstilar() {
    const { data: dancestyles } = await getDanceStyles();

    return (
        <div className="h-dvh">
            <Header />
            <Hero2 />


            {dancestyles?.map((style: DanceStyle) => (
                <section key={style.id} className={`py-16 odd:bg-white even:bg-gray-100`}>
                    {style.id % 2 === 0 ? (
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                    <h2 className="font-nunito text-3xl font-bold text-purple-800 mb-4">{style.name}</h2>
                                    <p className="text-gray-700 mb-4">{style.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <p className="text-purple-900 mb-4">
                                            <Link href="/#schedule" className="hover:underline">Se schema</Link>
                                        </p>
                                        <p className="text-purple-900 mb-4">
                                            <Link href="/#register" className="hover:underline">Till kursanmälan</Link>
                                        </p>
                                    </div>
                                    {/* <ul className="flex flex-wrap gap-4 mt-4 list-disc">
                                    <li className="flex items-center">
                                        <Circle className="fill-purple-700 mr-2" />
                                        {course.day}
                                    </li>
                                    <li className="flex items-center">
                                        <Circle className="fill-purple-700 mr-2" />
                                        Dansmix 2 - Tisdagar kl. 17:50
                                    </li>
                                </ul> */}
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
                    ) : (
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
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
                                <div className="md:w-1/2">
                                    <h2 className="font-nunito text-3xl font-bold text-purple-800 mb-4">{style.name}</h2>
                                    <p className="text-gray-700 mb-4">
                                        {style.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <p className="text-purple-900 mb-4">
                                            <Link href="/#schedule" className="hover:underline">Se schema</Link>
                                        </p>
                                        <p className="text-purple-900 mb-4">
                                            <Link href="/#register" className="hover:underline">Till kursanmälan</Link>
                                        </p>
                                    </div>
                                    {/* <ul className="flex flex-wrap gap-4 list-disc">
                                        <li className="flex items-center">
                                            <Circle className="fill-purple-700 mr-2" />
                                            Tisdagar kl. 18:30
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>

                    )}
                </section>
            ))}

            <div className="bg-gray-100 py-20">
                <ContactCards />
            </div>
            <Footer />

        </div>
    );
}
