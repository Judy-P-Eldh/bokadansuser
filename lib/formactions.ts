"use server";

import { RegisterFormEntry } from "./data/interfaces";
// import { getCourseName } from "./dbactions";

export async function handleRegisterSubmit(formData: FormData) {
  const course = formData.get("course") as string;
  const studentName = formData.get("studentName") as string;
  const studentBirthYear = formData.get("studentBirthYear") as string;
  const parentName = formData.get("parentName") as string;
  const email = formData.get("email") as string;
  // Validering och spara data, skicka mail eller liknande
//  const courseName = await getCourseName(course);

  const birthYear = Number(studentBirthYear);
  const registerFormEntry: RegisterFormEntry = {
    course,
    studentName,
    studentBirthYear: birthYear,
    parentName,
    email,
  };

  formData.append("access_key", "fc92888b-c7c3-457e-9dc8-40117efe885d");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log(registerFormEntry);
  console.log(data.course);
}
