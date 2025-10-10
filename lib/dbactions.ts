import { supabase } from "./supabase";

export async function getSchools() {
const { data, count, error } = await supabase
  .from('schools')
  .select('*', { count: 'exact' });
return { data, count, error };
}

export async function getCourses() {
const { data, count, error } = await supabase
  .from('courses')
  .select('*', { count: 'exact' });

 if (data) {
    data.forEach(course => {
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
  return tid ? tid.slice(0, 5) : '';
}
