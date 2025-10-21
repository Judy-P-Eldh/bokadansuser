"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border-b border-gray-200 pb-4">
            <button
                className="faq-question flex justify-between items-center w-full text-left font-medium text-purple-800 hover:text-purple-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3>{question}</h3>
                <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    <PlusIcon />
                </span>
            </button>
            {isOpen && (
                <div className="faq-answer mt-2 text-gray-700">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}