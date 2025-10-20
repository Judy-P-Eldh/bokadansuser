import { faqtexts } from "@/lib/data/faqtexts.json";
import FaqItem from "../faqitems/faqitem";

export default function FaqSection() {
    const faqs = faqtexts;
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-purple-800 mb-4">Vanliga frågor</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">Här hittar du svar på de vanligaste frågorna från elever och föräldrar.</p>
                </div>
                <div className="max-w-3xl mx-auto">

                    {faqs.map((faq, index) => {
                        return (
                            <div key={index}>
                                <FaqItem question={faq.question} answer={faq.answer} />
                            </div>
                        )
                    })}
                    <div className="mt-8 text-center">
                        <p className="text-gray-700 mb-4">Hittade du inte svaret på din fråga?</p>
                        <a href="#contact" className="text-purple-600 hover:text-purple-800 font-medium">Kontakta oss för mer information →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}