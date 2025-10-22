import Footer from "@/components/pagesections/footer";
import Header from "@/components/pagesections/header";
import Link from "next/link";

export default function Tack() {
    return (
        <div className="h-dvh">
            <Header />
            <div className="grid gap-8 mx-auto px-4 my-8">
                <section className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-center text-purple-800">Tack för din anmälan!</h2>
                    <div className="mb-4 space-y-4 mx-4 font-bold text-center text-purple-800">
                        <p>Du kommer att få mejl med ytterligare information.</p>
                    </div>
                </section>
                <Link href="/kurser" className="text-center bg-purple-600 text-white font-bold p-2 rounded-full outline hover:bg-white hover:text-purple-800 hover:outline-purple-800 focus:bg-white focus:text-purple-800 focus:outline-purple-800">Sök bland kurser</Link>
                <Link href="/#schedule" className="text-center bg-purple-600 text-white font-bold p-2 rounded-full outline hover:bg-white hover:text-purple-800 hover:outline-purple-800 focus:bg-white focus:text-purple-800 focus:outline-purple-800">Se schema</Link>
                <section className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="mb-4 space-y-2 mx-4 text-center">
                        <h2 className="">Allmän info:</h2>
                        <p>Dina uppgifter sparas i enlighet med GDPR. Vi delar inga uppgifter med tredje part.</p>
                        <p>De uppgifter vi samlar in sparas endast för att vi ska kunna genomföra våra åtaganden gentemot dig som kund.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}