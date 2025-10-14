import Classes from "@/components/classes";
import { DrawerFilter } from "@/components/drawerfilter";
import Header from "@/components/header";
import { CourseFilters } from "@/lib/data/interfaces";
import { getCoursesWithSchool } from "@/lib/dbactions";
import { FilterOptions, FilterOption } from '@/lib/data/interfaces';

export default async function Kurser({
  searchParams,
}: {
  searchParams: Promise<CourseFilters>;
}) {
  const params = await searchParams;

  const filters = {
    days: params.days ? (Array.isArray(params.days) ? params.days : [params.days]) : undefined,
    dates: params.dates ? (Array.isArray(params.dates) ? params.dates : [params.dates]) : undefined,
    age: params.ages ? (Array.isArray(params.ages) ? params.ages : [params.ages]) : undefined,
    styles: params.styles ? (Array.isArray(params.styles) ? params.styles : [params.styles]) : undefined,
    types: params.types ? (Array.isArray(params.types) ? params.types : [params.types]) : undefined,
  };

  const { data: courses, count } = await getCoursesWithSchool(filters);

// Get unique values and create label/value pairs
const styleOptions = [...new Set(courses.map((c) => c.name))].map(style => ({
  label: style,
  value: style
}));

const dateOptions = [...new Set(courses.map((c) => c.start_date))].map(date => {
  const d = new Date(date);
  return {
    label: d.toLocaleDateString('sv-SE', { day: '2-digit', month: 'short' }),
    value: date
  };
});

const dayOptions = [...new Set(courses.map((c) => c.day))].map(day => ({
  label: day,
  value: day
}));

const typeOptions = [...new Set(courses.map((c) => c.featured_message))]
  .filter(type => type !== null)
  .map(type => ({
    label: type as string,
    value: type as string
  }));

const ageOptions = [...new Set(courses.map((c) => c.agegroup))]
  .filter((age): age is string => age !== null)
  .map(age => ({
    label: `${age} år`,
    value: age
  }));

  // Kolla om användaren har några aktiva filter
  const hasActiveFilters = Object.values(filters).some(f => f && f.length > 0);

  const filterOptions = {
    styles: styleOptions,
    dates: dateOptions,
    days: dayOptions,
    ages: ageOptions,
    types: typeOptions
  };

  return (
    <main>
      <Header />
       <DrawerFilter filterOptions={filterOptions} />
      <Classes
        courses={courses || []}
        count={count || 0}
        hasActiveFilters={hasActiveFilters}
      />
    </main>
  );
}
