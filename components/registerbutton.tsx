import Link from "next/link";

export default function RegisterButton() {
    return(
        <div className="text-center mt-12">
          <Link
            href="#register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium"
          >
            Skicka kursanmälan
          </Link>
        </div>
    );
}