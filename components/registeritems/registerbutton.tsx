import Link from "next/link";

export default function RegisterButton() {
    return(
          <Link
            href="/#register"
            className="bg-purple-600 hover:bg-white hover:text-purple-800 hover:outline hover:outline-purple-800 text-white w-full rounded-full py-2 font-medium focus:outline-purple-800 focus:bg-white focus:text-purple-800"
          >
            Anmäl mig
          </Link>
    );
}