import { CourseFilters } from "./data/interfaces";
import { supabase } from "./supabase";

export async function getSchools() {
  const { data, count, error } = await supabase
    .from("schools")
    .select("*", { count: "exact" });
  if (error) {
    throw error;
  }
  return { data, count, error };
}

export async function getCourseName(course: string) {
  let { data: courses, error } = await supabase.from("courses").select("name");

  if (error) {
    throw error;
  }

  const apporvedCourse = courses?.find((c) => c.name === course);
  return apporvedCourse;
  // console.log('Kurs från db: ', apporvedCourse);
}

export async function getCourseNames() {
  let { data: courses, error } = await supabase
    .from("courses")
    .select("id, name, min_birth_year, max_birth_year")
    .order("name");

  if (error) {
    console.error("Error fetching course names:", error);
    return null;
  }
  //  console.log('Fetched courses:', courses); // Add this to debug

  return courses;
}

export async function getCourses() {
  const { data, count, error } = await supabase
    .from("courses")
    .select("*", { count: "exact" });

  if (error) {
    throw error;
  }

  if (data) {
    data.forEach((course) => {
      if (course.start_time || course.end_time) {
        course.start_time = stripSeconds(course.start_time);
        course.end_time = stripSeconds(course.end_time);
      }
    });
  }

  return { data, count, error };
}

function stripSeconds(tid: string) {
  // Hanterar "14:30:00" eller "14:30"
  return tid ? tid.slice(0, 5) : "";
}

export async function getCoursesWithSchool(filters: CourseFilters = {}) {
  // console.log("Filters mottagna:", filters);

  let query = supabase.from("courses").select( `*, schools(id, name)`, { count: "exact" });

  if (filters.days && filters.days.length > 0) {
    query = query.in("day", filters.days);
  }

  if (filters.dates && filters.dates.length > 0) {
    query = query.in("start_date", filters.dates);
  }

  if (filters.ages && filters.ages.length > 0) {
    // console.log("Filtrerar på age:", filters.ages);
    query = query.in("agegroup", filters.ages);
  }

  if (filters.styles && filters.styles.length > 0) {
    query = query.in("name", filters.styles);
  }

  if (filters.types && filters.types.length > 0) {
    query = query.in("featured_message", filters.types);
  }

  const { data, count, error } = await query;

  console.log("Data från db:", data);
  console.log("Count:", count);

  if (error) {
    throw error;
  }

  if (data) {
    data.forEach((course) => {
      if (course.start_time || course.end_time) {
        course.start_time = stripSeconds(course.start_time);
        course.end_time = stripSeconds(course.end_time);
      }
    });
  }

  return { data, count };
}

export async function getCourseSchool() {
  let query = supabase.from("courses").select(
    `*, schools(*)`,
    { count: "exact" }
  );

  const { data, count, error } = await query;
  console.log("Data från db:", data);
  console.log("Count:", count);
 if (data) {
  data.forEach((course) => {
      if (course.start_time || course.end_time) {
        course.start_time = stripSeconds(course.start_time);
        course.end_time = stripSeconds(course.end_time);
      }
    });

    data.forEach((schools) => {
      if (schools.id || schools.id) {
       schools.name = schools.name;
       console.log(schools.name);
      }
    });
   
 }
 
  if (error) {
    throw error;
  }

  return { data, count, error };
}
