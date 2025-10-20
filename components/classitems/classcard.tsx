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
  school_id,
}: {
  name: string;
  level: string;
  description: string;
  agegroup: string;
  price: number;
  featured: boolean;
  featured_message: string;
  min_birth_year: number;
  max_birth_year: number;
  day: string;
  start_time: string; //new Date(item.time);
  end_time: string;
  start_date: string;
  end_date: string;
  school_id: number;
}) {
  return (
    <div className="dance-card bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        className="dark:invert w-full h-48 object-cover"
        src={"/breakdancekids.jpeg"}
        alt={"breakdance"}
        width={500}
        height={100}
        priority
      />
      <div className="p-6 grid h-150">

        <div className="card-header flex items-start justify-between">
          <h3 className="text-xl font-bold text-purple-800">{name}</h3>
          {featured && <p className={`text-purple-900 font-medium`}>{featured_message}</p>}
        </div>

        <div className="card-info">
          <p className="text-purple-600 font-medium">{day} kl. {start_time} - {end_time}</p>
          <p className="text-purple-600 font-medium">{level}</p>
        </div>

        <div className="card-description h-30 overflow-y-auto">
          <p className="text-gray-700">{description}</p>
          <Link href="/dansstilar" className="text-purple-600 hover:text-purple-800 font-medium">
            Mer om dansstilen →
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
            <p className="">{school_id}</p>
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
