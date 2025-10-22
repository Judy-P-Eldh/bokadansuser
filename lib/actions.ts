"use server";

import { redirect } from "next/navigation";
import { RegisterFormEntry } from "./data/interfaces";

export async function handleRegisterSubmit(formData: FormData) {
  const course = formData.get("course") as string;
  const studentName = formData.get("studentName") as string;
  const studentBirthYear = formData.get("studentBirthYear") as string;
  const parentName = formData.get("parentName") as string;
  const email = formData.get("email") as string;
  //Validering och spara data, skicka mail eller liknande

  const birthYear = Number(studentBirthYear);
  const registerFormEntry: RegisterFormEntry = {
    course,
    studentName,
    studentBirthYear: birthYear,
    parentName,
    email,
  };

  const subject = `Anmälan till kurs: ${course}`;
  formData.append("subject", subject);
  formData.append("access_key", "fc92888b-c7c3-457e-9dc8-40117efe885d");

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  redirect("/");
  // const data = await response.json();
  // console.log(registerFormEntry);
  // console.log(data.course);
}

export async function sendContactForm(formData: FormData) {
  const name = formData.get('name');
  const epost = formData.get('epost');
  const subject = formData.get('subject');
  const message = formData.get('message');

  const subjectLine = `Anmälan till kurs: ${subject}`;
  formData.append("subject", subjectLine);

  formData.append("access_key", "fc92888b-c7c3-457e-9dc8-40117efe885d");

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  // const data = await response.json();

  // console.log('Server: Formulär mottaget',{ name, epost, subject, message });
  // console.log("Kontaktformulär skickat");
}
