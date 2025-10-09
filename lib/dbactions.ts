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
return { data, count, error };
}