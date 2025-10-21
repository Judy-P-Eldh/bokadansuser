import { MapPin, Phone, MailIcon } from "lucide-react";

export default function ContactCards() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/*  <!-- Contact Card 1 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Kurslokal</h3>
                <p className="text-gray-700">Bålsta danslokal</p>
            </div>
            {/* <!-- Contact Card 2 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Telefon</h3>
                <p className="text-gray-700">Vardagar kl. 12-13</p>
                <a href="tel:+46 70 769 51 67">+46 70 769 51 67</a>
            </div>
            {/*  <!-- Contact Card 3 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MailIcon />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">Skicka e-post</h3>
                <p className="text-gray-700"> <a href="mailto:bizadvancers@gmail.com">bizadvancers@gmail.com</a> </p>
            </div>
        </section>
    );
}