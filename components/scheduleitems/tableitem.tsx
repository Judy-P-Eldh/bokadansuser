import Link from "next/link";

export default function TableItem({
  name,
  level,
  agegroup,
  price,
  day,
  start_time,
  end_time,
  start_date,
  end_date,
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
  start_time: string;
  end_time: string;
  start_date: string;
  end_date: string;
  nr_times: number;
  school_id: number;
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 px-4">{name}</td>
       <td className="py-4 px-4">{level}</td>
      <td className="py-4 px-4">{agegroup} år</td>
      <td className="py-4 px-4">{day}ar</td>
      <td className="py-4 px-4">
        {start_time} - {end_time}
      </td>
      <td className="py-4 px-4">
        <p>Start: {start_date}</p> 
        <p>Slut: {end_date}</p>
      </td>

      <td className="py-4 px-4">{price} kr</td>
      <td className="py-4 px-4">
        <Link
          href="#register"
          className="text-purple-600 hover:text-purple-800 font-medium"
        >
          Anmäl mig
        </Link>
      </td>
    </tr>
  );
}
