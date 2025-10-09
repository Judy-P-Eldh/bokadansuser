import { supabase } from "./supabase";

export async function getSchools() {
const { data, count, error } = await supabase
  .from('schools')
  .select('*', { count: 'exact' });
return { data, count, error };
}