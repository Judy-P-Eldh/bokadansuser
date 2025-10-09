"use client";
import Image from "next/image";
import { useState } from "react";
import DesktopMenu from "./desktopmenu";
import MobileMenuButton from "./mobilemenubutton";
import MobileMenu from "./mobilemenu";

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="top-0 z-50">
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              className="dark:invert"
              src="/logga.png"
              alt="logga"
              width={100}
              height={500}
            />
            <p className="font-nunito-sans text-xl font-bold text-purple-800">
              Boka Danskurser
            </p>
          </div>

          {/* <!-- Desktop Menu --> */}
          <DesktopMenu />

          {/* <!-- Mobile Menu Button --> */}
          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* <p>{isOpen ? "Menyn är öppen" : "Menyn är stängd"}</p> */}
        </div>

        {/* <!-- Mobile Menu --> */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
}
