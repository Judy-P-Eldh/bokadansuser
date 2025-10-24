import Link from "next/link";

export default function ScheduleItem({
  id,
  name,
  level,
  agegroup,
  day,
  start_time,
  end_time,
  start_date,
  end_date,
}: {
  id: number
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
    // <div className="border rounded-lg shadow min-w-[200px] p-4 ">
    //   <h3 className="font-semibold text-purple-800 flex justify-center mb-4">
    //     {name} - {level} ({agegroup} år)
    //   </h3>
    //   <table className="flex flex-col bg-white">
    //     <thead>
    //       <tr className="grid grid-cols-3 justify-items-start">
    //         <th scope="col" className="">Tid</th>
    //         <th scope="col" className="">Dag</th>
    //         <th scope="col" className="">Datum</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="grid grid-cols-3">
    //         <td className="text-sm">{start_time} - {end_time}</td>
    //         <td className="text-sm">{day}ar</td>
    //         <td className="text-sm"><p>Start: {start_date}</p> <p>Slut: {end_date}</p></td>
    //       </tr>
    //     </tbody>

    //   </table>

    //   <Link href="#register">
    //     <div className="text-purple-600 font-medium border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white m-4 text-center py-2"
    //     >
    //       Anmäl mig
    //     </div>
    //   </Link>

    // </div>


    <div className="flex flex-col border rounded-lg p-4 shadow min-w-[200px] bg-white">
      <div className="font-semibold text-purple-800 text-lg mb-2">
        {name} ({agegroup} år) - {day}ar - {level}
      </div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <div className="text-sm">
          <span className="font-semibold">Tid:</span> <p>{start_time} - {end_time}</p>
        </div>
        <div> <span className="font-semibold">Datum:</span>
          <p>Start: {start_date}</p>
          <p>Slut: {end_date}</p>
        </div>
        <div>
          <Link
            href="#register"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Anmäl mig
          </Link>
        </div>
      </div>
    </div>
  );
}
