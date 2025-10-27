"use client";
import { SquareMenu } from "lucide-react";
import { MobileMenuButtonProps } from "@/lib/data/interfaces";


export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
    return (
        <div className="md:hidden">
            <button
                id="menu-btn"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="text-gray-700"
            >
                <p className="sr-only">menyknapp</p>
                <SquareMenu className="text-2xl" />
            </button>
        </div>
    );
}