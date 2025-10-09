import ClassCard from "./classcard";
import { getCourses } from "@/lib/dbactions";

export default async function Classes() {
  const { data: courses, error } = await getCourses();
  // count,
  if (error) {
    return <div>Fel vid hämtning: {error.message}</div>;
  }

  if (!courses || courses.length === 0) {
    return <div>Inga skolor hittades.</div>;
  }
  return (
    <section id="classes" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Danskurser
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
           Alla danskurser på alla skolor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <ClassCard
              key={course.id}
              name={course.name}
              day={course.day}
              description={course.description}
              agegroup={course.agegroup}
              level={course.level}
              price={course.price}
              featured={course.featured}
              featured_message={course.featured_message}
              min_birth_year={course.min_birth_year}
              max_birth_year={course.max_birth_year}
              start_time={course.start_time}
              end_time={course.end_time}
              start_date={course.start_date}
              end_date={course.end_date}
              nr_times={course.nr_times}
              school_id={course.school_id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
