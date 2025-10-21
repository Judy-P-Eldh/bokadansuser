import RegisterForm from "./registerform";
import { getCourseNames } from "@/lib/db";

export default async function RegisterInfo() {
    const coursresult = await getCourseNames();
    // Pass the full course objects, not just names
    const courseNames = coursresult ?? [];

    return (
        <section className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Säkra din plats på kursen!</h3>
            <div className="mb-4 space-y-4 text-sm mx-4">
                <p>Dina uppgifter sparas i enlighet med GDPR. Vi delar inga uppgifter med tredje part.</p>
                <p>De uppgifter vi samlar in sparas endast för att vi ska kunna genomföra våra åtaganden gentemot dig som kund.</p>
            </div>
            <RegisterForm courseNames={courseNames} />
        </section>
    );
}