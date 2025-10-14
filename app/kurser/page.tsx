import Classes from "@/components/classes";
import { DrawerFilter } from "@/components/drawerfilter";
import Header from "@/components/header";
import { CourseFilters } from "@/lib/data/interfaces";
import { getCoursesWithSchool } from "@/lib/dbactions";

export default async function Kurser({
  searchParams,
}: {
  searchParams: Promise<CourseFilters>;
}) {
  const params = await searchParams;
  
  const filters = {
    days: params.days ? (Array.isArray(params.days) ? params.days : [params.days]) : undefined,
    // dates: params.dates ? (Array.isArray(params.dates) ? params.dates : [params.dates]) : undefined,
    age: params.age ? (Array.isArray(params.age) ? params.age : [params.age]) : undefined,
    styles: params.styles ? (Array.isArray(params.styles) ? params.styles : [params.styles]) : undefined,
    types: params.types ? (Array.isArray(params.types) ? params.types : [params.types]) : undefined,
  };

  const { data: courses, count } = await getCoursesWithSchool(filters);
  
  // Kolla om användaren har några aktiva filter
  const hasActiveFilters = Object.values(filters).some(f => f && f.length > 0);

  return (
    <main>
      <Header />
      <DrawerFilter />
      <Classes 
        courses={courses || []} 
        count={count || 0} 
        hasActiveFilters={hasActiveFilters}
      />
    </main>
  );
}
