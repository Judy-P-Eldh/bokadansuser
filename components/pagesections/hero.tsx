import Link from "next/link";

export default function Hero() {
  return (
    //Hero Section
    <section
      id="home"
    className="bg-center bg-no-repeat bg-[url('/breakdancekids.jpeg')] bg-gray-700 bg-blend-multiply h-150 flex items-center justify-center text-white"
    
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dansa mer</h1>
        <p className="text-xl md:text-2xl mb-8">NYA KURSER!!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="#about"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium"
          >
            Lärare med 15+ år i branschen
          </Link>
          <Link
            href="#register"
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-full font-medium"
          >
            Boka nu!
          </Link>
        </div>
      </div>
    </section>
  );
}
