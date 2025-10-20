import Image from "next/image";
import Link from "next/link";

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
  // nr_times,
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
  // nr_times: number;
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
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-800 mb-2">{name}</h3>
        {featured &&  <p className={`text-purple-900 font-medium`}>{featured_message}</p>}
        <p className="text-purple-600 font-medium">
          {day} kl. {start_time} - {end_time}
        </p>
        <p className="text-purple-600 font-medium">{level}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 mb-4">
          {start_date} till {end_date} 
          {/* : {nr_times} ggr. */}
        </p>
        <p className="text-gray-700 mb-4">
          {price} kr.
        </p>
          <p className="text-gray-700 mb-4">
          Skola nr: {school_id}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-purple-600 font-medium">{agegroup} födda:({min_birth_year} -{max_birth_year})</span>
          <Link
            href="/dansstilar"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Läs mer →
          </Link>
        </div>
      </div>
    </div>
  );
}
