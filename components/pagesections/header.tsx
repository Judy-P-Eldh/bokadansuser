"use client";
import Image from "next/image";
import { useState } from "react";
import DesktopMenu from "../headeritems/desktopmenu";
import MobileMenuButton from "../headeritems/mobilemenubutton";
import MobileMenu from "../headeritems/mobilemenu";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="md:flex-none sticky top-0 z-50 shadow-sm">
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link href={"/"}>
              <Image
                className=""
                src="/BokaDansLogga.png"
                alt="logga"
                width={100}
                height={100}
              />
            </Link>
            <Link href={"/"}>
              <h1 className="font-nunito-sans text-3xl font-bold text-purple-800">
                Boka Danskurser
              </h1>
            </Link>
          </div>

          {/* <!-- Desktop Menu --> */}
          <DesktopMenu />

          {/* <!-- Mobile Menu Button --> */}
          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* <!-- Mobile Menu --> */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
}
