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
  console.log("Filters mottagna:", filters);
  
  let query = supabase.from("courses").select("*", { count: "exact" });

  if (filters.days && filters.days.length > 0) {
    console.log("Filtrerar på days:", filters.days);
    query = query.in("day", filters.days);
  }

  if (filters.dates && filters.dates.length > 0) {
    console.log("Filtrerar på dates:", filters.dates);
    query = query.in("start_date", filters.dates);
  }

  if (filters.age && filters.age.length > 0) {
    console.log("Filtrerar på age:", filters.age);
    query = query.in("agegroup", filters.age);
  }

  if (filters.styles && filters.styles.length > 0) {
    console.log("Filtrerar på styles:", filters.styles);
    query = query.in("name", filters.styles);
  }

  if (filters.types && filters.types.length > 0) {
    console.log("Filtrerar på types:", filters.types);
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