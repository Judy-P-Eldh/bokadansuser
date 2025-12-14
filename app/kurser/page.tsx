import Classes from "@/components/pagesections/classes";
import Header from "@/components/pagesections/header";
import { CourseFilters, FilterOptions } from "@/lib/data/interfaces";
import { getCoursesWithSchool } from "@/lib/db";
import Filter from "@/components/pagesections/filter";

export default async function Kurser({
  searchParams,
}: {
  searchParams: Promise<CourseFilters>;
}) {
  const params = await searchParams;

  const filters = {
    days: params.days ? (Array.isArray(params.days) ? params.days : [params.days]) : undefined,
    dates: params.dates ? (Array.isArray(params.dates) ? params.dates : [params.dates]) : undefined,
    ages: params.ages ? (Array.isArray(params.ages) ? params.ages : [params.ages]) : undefined,
    styles: params.styles ? (Array.isArray(params.styles) ? params.styles : [params.styles]) : undefined,
    types: params.types ? (Array.isArray(params.types) ? params.types : [params.types]) : undefined,
    school_ids: params.school_ids ? (Array.isArray(params.school_ids) ? params.school_ids : [params.school_ids]) : undefined,
  };
  // Sort on string
  // .sort((a: string,b: string) => a.localeCompare(b))

  // Sort on object.label property
  // .sort((a: FilterOption,b: FilterOption) => a.label.localeCompare(b.label))
  const { data: courses, count } = await getCoursesWithSchool(filters);

  const filterOptions: FilterOptions = {
    styles: [...new Set(courses.map((c) => c.name))].map((style) => ({
      label: style,
      value: style
    })),
    dates: [...new Set(courses.map((c) => c.start_date))].map(date => {
      const d = new Date(date);
      return {
        label: d.toLocaleDateString('sv-SE', { day: '2-digit', month: 'short' }),
        value: date
      };
    }).sort((a, b) => a.value.localeCompare(b.value)),
    days: [...new Set(courses.map((c) => c.day))].map(day => ({
      label: day,
      value: day
    })),
    ages: [...new Set(courses.map((c) => c.agegroup))]
      .filter((age): age is string => age !== null)
      .map(age => ({
        label: `${age} år`,
        value: age
      })),
    types: [...new Set(courses.map((c) => c.featured_message))]
      .filter(type => type !== null)
      .map(type => ({
        label: type as string,
        value: type as string
      })),
    schools: [...new Map(
      courses
        .filter(c => c.schools && c.schools.name) // Filtrera bort null-värden
        .map((c) => [c.school_id, { id: c.school_id, name: c.schools.name }])
    ).values()]
      .map(school => ({
        label: school.name,
        value: school.id.toString()
      }))
  };

  // Kolla om användaren har några aktiva filter
  const hasActiveFilters = Object.values(filters).some(f => f && f.length > 0);

  return (
    <main className="h-screen overflow-y-auto">
      <Header />
      <div className="page-divider md:flex">
        <aside className="filter-section my-8 mx-4 md:w-1/4 py-8 md:sticky md:top-50 md:self-start">
          <h2 className="font-nunito text-3xl text-center font-bold text-purple-800 mb-8">
            Filter
          </h2>
          <Filter filterOptions={filterOptions} />
        </aside>
        <div className="class-card-section md:w-3/4">
          <Classes
            courses={courses || []}
            count={count || 0}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      </div>
    </main>
  );
}
