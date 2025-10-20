"use client";
import { sendContactForm } from "@/lib/actions";
import Form from "next/form";

export default function ContactForm() {
        return (
            <Form id="contactform" action={sendContactForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Namn</label>
                        <input type="text" id="name" name="name" minLength={2} maxLength={50} required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                    <div>
                        <label htmlFor="epost" className="block text-gray-700 mb-2">E-post</label>
                        <input type="epost" id="epost" name="epost" required pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Ämne</label>
                    <input type="text" id="subject" name="subject" minLength={10} maxLength={100} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Meddelande</label>
                    <textarea id="message" name="message" rows={4} minLength={10} maxLength={1000} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                </div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">Skicka</button>
            </Form>
        );
    }