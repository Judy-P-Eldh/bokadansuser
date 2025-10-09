import Link from "next/link";

export default function DesktopMenu() {
  return (
    <div className="hidden md:flex space-x-8">
      <Link href="/" className="text-purple-600 font-medium hover:text-purple-800">Hem</Link>
      <Link href="/#schedule" className="text-gray-700 hover:text-purple-600">Schema</Link>
      <Link href="/dansstilar" className="text-gray-700 hover:text-purple-600">Dansstilar</Link>
      <Link href="/#register" className="text-gray-700 hover:text-purple-600">Anmälan</Link>
      <Link href="/#contact" className="text-gray-700 hover:text-purple-600">Kontakt</Link>
    </div>
  );
}