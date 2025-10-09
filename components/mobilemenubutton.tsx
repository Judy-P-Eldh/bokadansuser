"use client";
import { SquareMenu } from "lucide-react";
import { MobileMenuButtonProps } from "@/lib/data/interfaces";


export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
    return (
        <div className="md:hidden">
            <button
                id="menu-btn"
                onClick={() => {
                    // console.log("Knappen klickad!");
                    setIsOpen(!isOpen);
                }}
                className="text-gray-700"
            >
                <SquareMenu className="text-2xl" />
            </button>
        </div>
    );
}