import Link from "next/link";

export default function ScheduleItem({
  name,
  level,
  agegroup,
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
    <table className="flex flex-col border rounded-lg p-4 shadow min-w-[200px] bg-white">
      <thead>
        <tr className="font-semibold text-purple-800 text-lg flex justify-self-center mb-4">
          {name} - {level} ({agegroup} år)
        </tr>
        <tr className="grid grid-cols-3 justify-items-start">
          <th className="">Tid</th>
          <th className="">Dag</th>
          <th className="">Datum</th>
        </tr>
      </thead>
      <tbody>
        <tr className="grid grid-cols-3">
          <td >{start_time} - {end_time}</td>
          <td >{day}ar</td>
          <td ><p>Start: {start_date}</p> <p>Slut: {end_date}</p></td>
        </tr>
      </tbody>
      <Link
        href="#register"
        className="text-purple-600 font-medium border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white m-4 text-center py-2"
      >
        Anmäl mig
      </Link>
    </table>


    // <div className="flex flex-col border rounded-lg p-4 shadow min-w-[200px] bg-white">
    //   <div className="font-semibold text-purple-800 text-lg mb-2">
    //     {name} ({agegroup} år) - {level}
    //   </div>
    //   <div className="flex items-center justify-between gap-3 text-sm">
    //     <div className="text-sm">
    //       Tid: <p>{start_time} - {end_time}</p>
    //     </div>
    //     <div>Dag: <p>{day}ar </p> </div>
    //     <div className="">Datum:
    //       <p>{start_date} -- {end_date}</p>

    //     </div>

    //     <div>
    //       <Link
    //         href="#register"
    //         className="text-purple-600 hover:text-purple-800 font-medium"
    //       >
    //         Anmäl mig
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
