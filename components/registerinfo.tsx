import Link from "next/link";
import RegisterForm from "./registerform";

export default async function RegisterInfo() {
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

                {/* <Link href="mailto:malin.danslarare@gmail.com" className="w-full bg-purple-600 hover:bg-purple-700 text-center text-white px-6 py-2 rounded-lg font-medium">Skicka kursanmälan</Link> */}

                <RegisterForm />
        </section>
    );
}