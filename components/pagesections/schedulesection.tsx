import { getCourses } from "@/lib/db";
import Link from "next/link";
import ScheduleItem from "../scheduleitems/scheduleitem";
import TableItem from "../scheduleitems/tableitem";

export default async function ScheduldeSection() {
  const { data: courses, error } = await getCourses();
  // count,
  if (error) {
    return <div>Fel vid hämtning: {error}</div>;
  }

  if (!courses || courses.length === 0) {
    return <div>Inga skolor hittades.</div>;
  }
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Schema</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Hitta rätt kurs för dig.</p>
        </div>

        {/* Tabellvisning för medium och större skärmar */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden hidden md:table">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Kurs</th>
                <th className="py-3 px-4 text-left">Nivå</th>
                <th className="py-3 px-4 text-left">Ålder</th>
                <th className="py-3 px-4 text-left">Dag</th>
                <th className="py-3 px-4 text-left">Tid</th>
                <th className="py-3 px-4 text-left">Datum</th>
                <th className="py-3 px-4 text-left">Pris</th>
                <th className="py-3 px-4 text-left">Anmälan</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <TableItem
                  key={course.id}
                  name={course.name}
                  level={course.level}
                  description={course.description}
                  agegroup={course.agegroup}
                  price={course.price}
                  featured={course.featured}
                  featured_message={course.featured_message}
                  min_birth_year={course.min_birth_year}
                  max_birth_year={course.max_birth_year}
                  day={course.day}
                  start_time={course.start_time}
                  end_time={course.end_time}
                  start_date={course.start_date}
                  end_date={course.end_date}
                  nr_times={course.nr_times}
                  school_id={course.school_id}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* För små skärmar istället för tabell */}
        <div className="md:hidden space-y-2">
          {courses.map((course) => (
            <ScheduleItem
              key={course.id}
              name={course.name}
              level={course.level}
              description={course.description}
              agegroup={course.agegroup}
              price={course.price}
              featured={course.featured}
              featured_message={course.featured_message}
              min_birth_year={course.min_birth_year}
              max_birth_year={course.max_birth_year}
              day={course.day}
              start_time={course.start_time}
              end_time={course.end_time}
              start_date={course.start_date}
              end_date={course.end_date}
              nr_times={course.nr_times}
              school_id={course.school_id}
            />
          ))}
        </div>

        <div className="mt-8 text-center grid">
            <Link
              href="/kurser"
              className="text-purple-600 font-medium mb-4 border border-purple-600 rounded-full p-2 hover:text-white  hover:bg-purple-600"
            >
              Sök bland alla kurser
            </Link>
            <p className="text-gray-700 mb-4">
              Hittar du inte kursen du söker? Hör av dig.
            </p>
            <Link
              href="/#contact"
              className="text-purple-600 hover:text-purple-800 font-medium w-full"
            >
              Kontakt →
            </Link>
        </div>
      </div>
    </section>
  );
}
