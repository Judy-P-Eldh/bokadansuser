import { MobileMenuProps } from "@/lib/data/interfaces";
import Link from "next/link";

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (target.tagName === "A") {
            setIsOpen(false);
        }
    };
    return (
        <div
            onClick={handleClick}
            id="mobile-menu"
            className={`bg-white p-4 md:hidden fixed top-16 left-0 right-0 z-50 shadow-md ${isOpen ? "block" : "hidden"}`}
        >
            {/* <p>Mobilmeny visas här!</p> */}
            <div className="px-4 py-2 flex flex-col space-y-3">
                <Link href="/" className="text-purple-600 font-medium py-2 border-b border-gray-100">Hem</Link>
                <Link href="/#schedule" className="text-gray-700 py-2 border-b border-gray-100">Schema</Link>
                <Link href="/kurser" className="text-gray-700 py-2 border-b border-gray-100">Kurser</Link>
                <Link href="/#register" className="text-gray-700 py-2 border-b border-gray-100">Anmälan</Link>
                <Link href="/#contact" className="text-gray-700 py-2">Kontakt</Link>
                <div className="py-4">
                    <Link href="/#register" className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 block text-center">Anmäl dig till kurs</Link>
                </div>
            </div>
        </div>
    );
}