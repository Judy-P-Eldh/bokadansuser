import Image from "next/image";
import Link from "next/link";
import RegisterButton from "../registeritems/registerbutton";

export default function ClassCard({
  name,
  description,
  level,
  agegroup,
  price,
  featured,
  featured_message,
  min_birth_year,
  max_birth_year,
  day,
  start_time,
  end_time,
  start_date,
  end_date,
  school,
}: {
  name: string;
  level: string;
  description: string;
  agegroup: string | null;  // Ändrat  
  price: number;
   featured: boolean | null;  // Ändrat
    featured_message: string | null;  // Ändrat
   min_birth_year: number | null;  // Ändrat
  max_birth_year: number | null;  // Ändrat
  day: string;
    start_time: string | null;  // Ändrat
  end_time: string | null;  // Ändrat
  start_date: string;
  end_date: string;
  school: string;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr] dance-card bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        className="dark:invert w-full h-48 object-cover"
        src={"/breakdancekids.jpeg"}
        alt={"breakdance"}
        width={500}
        height={100}
        priority
      />
      <div className="p-6 grid gap-4">

        <div className="card-header flex items-start justify-between">
          <h3 className="text-xl font-bold text-purple-800">{name}</h3>
          {featured && <p className={`text-purple-900 font-medium`}>{featured_message}</p>}
        </div>

        <div className="card-info">
          <p className="text-purple-600 font-medium">{day} kl. {start_time} - {end_time}</p>
          <p className="text-purple-600 font-medium">{level}</p>
        </div>

        <div className="card-description h-30 overflow-y-auto">
          <p className="text-gray-700 overflow-hidden line-clamp-3 text-ellipsis">{description}</p>
          <Link href="/dansstilar" className="text-purple-600 hover:text-purple-800 font-medium">
            Läs mer om {name} →
          </Link>
        </div>

        <div className="card-facts space-y-2">

          <div className="flex justify-between border-b-2">
            <p className="text-gray-700 w-1.5">Start:</p>
            <p className="">{start_date}</p>
          </div>

          <div className="flex gap-4 justify-between border-b-2">
            <p className="text-gray-700 w-1.5">Slut:</p>
            <p className="">{end_date}</p>
          </div>

          <div className="flex gap-4 justify-between border-b-2">
            <p className="text-gray-700 w-1.5">Pris:</p>
            <p>{price} kr</p>
          </div>

          <div className="flex justify-between border-b-2">
            <p className="text-gray-700">Skola:</p>
            <p className="">{school}</p>
          </div>

          <div className="flex justify-between border-b-2">
            <p className="text-gray-700">Ålder:</p>
            <p>{agegroup} år</p>
          </div>
          {min_birth_year &&
            <div className="flex justify-between border-b-2">
              <p className={`text-purple-900 font-medium`}>
                Födda:</p>
              <p className="text-purple-900 font-medium">{min_birth_year} -{max_birth_year}</p>
            </div>
          }
        </div>

        <div className="card-button text-center flex items-end">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
}
