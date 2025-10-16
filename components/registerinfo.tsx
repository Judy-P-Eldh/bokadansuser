import RegisterForm from "./registerform";
import { getCourseNames } from "@/lib/dbactions";

export default async function RegisterInfo() {
    const coursresult = await getCourseNames();
    // Pass the full course objects, not just names
    const courseNames = coursresult ?? [];
    
    return (
        <section className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Säkra din plats på kursen!</h3>
            <div className="mb-4">
                <p>Anmälan sker på mejl och behöver innehålla:</p>
                <ul className="list-disc list-inside">
                    <li>dansgrupp</li>
                    <li>födelseår</li>
                    <li>elevens namn</li>
                    <li>förälders namn och telefonnummer</li>
                </ul>
            </div>
            <RegisterForm courseNames={courseNames} />
        </section>
    );
}