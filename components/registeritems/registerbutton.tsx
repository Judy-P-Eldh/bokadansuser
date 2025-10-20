import Link from "next/link";

export default function RegisterButton() {
    return(
          <Link
            href="/#register"
            className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full py-2 font-medium"
          >
            Anmäl mig
          </Link>
    );
}