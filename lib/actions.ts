"use server";

import { redirect } from "next/navigation";

export async function handleRegisterSubmit(formData: FormData) {
  // Extrahera värden
  const courseName = formData.get("courseName") as string;
  const studentName = formData.get("studentName") as string;
  const studentBirthYear = formData.get("studentBirthYear") as string;
  const parentName = formData.get("parentName") as string | null;
  const parentPhone = formData.get("parentPhone") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;

  // Server-side validering
  const errors: string[] = [];

  // Validera kursval
  if (!courseName || courseName.trim() === "") {
    errors.push("Kurs måste väljas");
  }
  // Validera elevens namn (minst 2 bokstäver)
  if (!studentName || studentName.trim().length < 2) {
    errors.push("Elevens namn måste vara minst 2 bokstäver");
  }
  // Validera e-post
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Ogiltig e-postadress");
  }
  // Validera telefonnummer
  const phoneRegex = /^\d{10}$/;
  if (!parentPhone || !phoneRegex.test(parentPhone)) {
    errors.push("Ogiltigt telefonnummer");
  }
  // Validera födelseår om det finns
  if (studentBirthYear) {
    const yearNum = parseInt(studentBirthYear);
    const currentYear = new Date().getFullYear();

    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
      errors.push("Ogiltigt födelseår");
    }

    // Kolla om eleven är under 18 och kräver föräldranamn
    const age = currentYear - yearNum;
    if (age < 18 && (!parentName || parentName.trim().length < 2)) {
      errors.push("Förälders namn krävs för elever under 18 år");
    }
  }
  // Om det finns valideringsfel, returnera dem
  if (errors.length > 0) {
    return {
      success: false,
      message: errors.join(", "),
    };
  }
  // Förbered data för Web3Forms
  const submissionData = {
    subject: subject,
    access_key: "fc92888b-c7c3-457e-9dc8-40117efe885d",
    courseName: courseName,
    studentName: studentName,
    studentBirthYear: studentBirthYear,
    email: email,
    ...(parentName && { parentName: parentName }), // Inkludera bara om det finns
    ...(parentPhone && { parentPhone: parentPhone }), // Inkludera bara om det finns
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submissionData),
  });

  const json = await res.json();
  console.log(json);

  if (json.success) {
    redirect("/tack"); // redirect kastar ett NEXT_REDIRECT error, vilket är OK
  }

  return {
    success: false,
    message: json.message || "Något gick fel vid skickande av formulär",
  };

  // { Svaret:
  //    "statusCode":200,
  //    "success":true,
  //    "body":{
  //       "data":{
  //         [USER SUBMITTED DATA]
  //       },
  //       "message":"Email sent successfully!"
  //    }
  // }
}

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name");
  const epost = formData.get("epost");
  const subject = formData.get("subject");
  const message = formData.get("message");

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
