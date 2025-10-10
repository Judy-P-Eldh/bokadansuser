"use server";

export async function filtering(formData: FormData) {
  const selectedDays = formData.getAll("day");
  const selectedSchools = formData.getAll("school");
  const selectedAges = formData.getAll("age");
  const selectedStyles = formData.getAll("style");
  const selectedTeachers= formData.getAll("teacher");
  const selectedStartDates= formData.getAll("date");
  const selectedOther= formData.getAll("other");
  const countRange= formData.getAll("antal");

  
}
