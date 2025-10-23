"use client";

import { handleRegisterSubmit } from "@/lib/actions";
import Form from "next/form";
import { useFormStatus } from "react-dom";

function CourseRegisterButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            type="submit"
            disabled={pending}
        >
            {pending ? "Vänta..." : "Registrera"}
        </button>
    );
}
export default function RegisterClientAction() {
    const clientAction = async (formData: FormData) => {

        const svar = await handleRegisterSubmit(formData);
        if (svar.success) {
            console.log(svar.message);
            // toast(svar.message);
        }
    }
    return (
        <Form action={clientAction} className="border">
            <label htmlFor="myname">Ditt namn</label>
            <input type="text" name="myname" id="myname" className="border border-purple-600 rounded-lg mx-4" />
            <CourseRegisterButton />
        </Form>
    );
}
