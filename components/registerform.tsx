"use client";

import { handleRegisterSubmit } from "@/lib/formactions";
import Form from "next/form";
import RegisterButton from "./registerbutton";

export default function RegisterForm() {
    return(
        <Form id="registration-form" action={handleRegisterSubmit} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option>Dansmix 1</option>
                    <option>Dansix 2</option>
                    <option>Jazzdans</option>
                    <option>Hip Hop</option>
                    <option>Breaking</option>
                    <option>Locking</option>
                </select>
            </div>
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
                <input type="text" id="parentName" name="parentName" placeholder="EFörälders för- och efternamn" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            <div className="mb-4">
                <label htmlFor="email">E-post</label>
                <input type="email" id="email" name="email" placeholder="E-post" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
            
            <RegisterButton />
        </Form>
    );
}