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
  agegroup: string | null;   
  price: number;
  featured: boolean | null;  
  featured_message: string | null;  
  min_birth_year: number | null;  
  max_birth_year: number | null; 
  day: string;
  start_time: string | null; 
  end_time: string | null; 
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
          <Link href="/dansstilar" className="text-purple-600 hover:text-purple-800 focus:outline-purple-800 font-medium">
            Läs mer om {name} →
          </Link>
        </div>


        <table className="card-facts space-y-2">
          <tbody>
            <tr className="flex justify-between border-b-2">
              <td className="text-gray-700 w-1.5">Start:</td>
              <td className="">{start_date}</td>
            </tr>

            <tr className="flex gap-4 justify-between border-b-2">
              <td className="text-gray-700 w-1.5">Slut:</td>
              <td className="">{end_date}</td>
            </tr>

            <tr className="flex gap-4 justify-between border-b-2">
              <td className="text-gray-700 w-1.5">Pris:</td>
              <td>{price} kr</td>
            </tr>

            <tr className="flex justify-between border-b-2">
              <td className="text-gray-700">Skola:</td>
              <td className="">{school}</td>
            </tr>

            <tr className="flex justify-between border-b-2">
              <td className="text-gray-700">Ålder:</td>
              <td>{agegroup} år</td>
            </tr>
            {min_birth_year &&
              <tr className="flex justify-between border-b-2">
                <td className={`text-purple-900 font-medium`}>
                  Födda:</td>
                <td className="text-purple-900 font-medium">{min_birth_year} -{max_birth_year}</td>
              </tr>
            }
          </tbody>
        </table>

        <div className="card-button text-center flex items-end">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
}
