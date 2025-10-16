"use client";
import { handleRegisterSubmit } from "@/lib/formactions";
import Form from "next/form";
import { FormParams } from "@/lib/data/interfaces";

export default function RegisterForm({ courseNames }: FormParams) {
    // console.log('Received courseNames:', courseNames);

    return (
        <Form id="registration-form" action={handleRegisterSubmit} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="courseName">Välj kurs</label>
                <select
                    id="courseName"
                    name="courseName"  // Added name attribute
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                    <option value="">Välj en kurs...</option>
                    {courseNames.map((course) => (
                        <option
                            key={course.id}
                            value={course.name}
                            className="text-gray-900 bg-white"
                        >
                            {course.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* Rest of your form fields... */}
            <div className="mb-4">
                <label htmlFor="studentName">Elevens namn</label>
                <input type="text" id="studentName" name="studentName" placeholder="Elevens namn" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
                <label htmlFor="studentBirthYear">Elevens födelseår</label>
                <input type="text" id="studentBirthYear" name="studentBirthYear" placeholder="Elevens födelseår" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
                <label htmlFor="parentName">Förälders för- och efternamn</label>
                <input type="text" id="parentName" name="parentName" placeholder="Förälders för- och efternamn" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
                <label htmlFor="email">E-post</label>
                <input type="email" id="email" name="email" placeholder="E-post" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium">
                Skicka kursanmälan
            </button>
        </Form>
    );
}