import ClassCard from "./classcard";

type ClassesProps = {
  courses: any[];
  count: number;
  hasActiveFilters?: boolean;
};

export default async function Classes({ 
  courses, 
  count, 
  hasActiveFilters = false 
}: ClassesProps) {
  const safeCount = count ?? 0;

  if (!courses || courses.length === 0) {
    return (
      <section id="classes" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Danskurser
            </h2>
          </div>
          <div className="text-center py-12">
            {hasActiveFilters ? (
              <>
                <p className="text-xl text-gray-700 mb-2">
                  Inga kurser hittades med de valda filtren.
                </p>
                <p className="text-gray-500">
                  Prova att ändra dina filter för att se fler kurser.
                </p>
              </>
            ) : (
              <p className="text-xl text-gray-700">
                Inga kurser tillgängliga just nu.
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="classes" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Danskurser
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {safeCount === 1 
              ? '1 kurs hittad' 
              : `${safeCount} kurser hittade`}
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
              school_id={course.school_id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}