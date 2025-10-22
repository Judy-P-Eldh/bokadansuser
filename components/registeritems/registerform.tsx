"use client";
import { handleRegisterSubmit } from "@/lib/actions";
import Form from "next/form";
import { FormParams } from "@/lib/data/interfaces";
import { useState } from "react";

export default function RegisterForm({ courseNames }: FormParams) {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [birthYear, setBirthYear] = useState("");
  const [validationError, setValidationError] = useState("");


  const selectedCourse = courseNames.find((c) => c.id === selectedCourseId);
  const currentYear = new Date().getFullYear();
  const isUnder18 = birthYear ? currentYear - parseInt(birthYear) < 18 : false;

  const validateBirthYear = (year: string) => {
    setBirthYear(year);
    setValidationError("");

    if (!selectedCourse || !year) return;

    const yearNum = parseInt(year);
    if (isNaN(yearNum)) {
      setValidationError("Vänligen ange ett giltigt år");
      return;
    }

    // Kontrollera kursens födelseårsgränser
    if (
      selectedCourse.min_birth_year &&
      selectedCourse.max_birth_year &&
      (yearNum < selectedCourse.min_birth_year ||
        yearNum > selectedCourse.max_birth_year)
    ) {
      setValidationError(
        `Denna kurs är för elever födda mellan ${selectedCourse.min_birth_year} och ${selectedCourse.max_birth_year}`
      );
    } else if (
      selectedCourse.min_birth_year &&
      yearNum < selectedCourse.min_birth_year
    ) {
      setValidationError(
        `Denna kurs är för elever födda ${selectedCourse.min_birth_year} eller senare`
      );
    } else if (
      selectedCourse.max_birth_year &&
      yearNum > selectedCourse.max_birth_year
    ) {
      setValidationError(
        `Denna kurs är för elever födda ${selectedCourse.max_birth_year} eller tidigare`
      );
    }
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value ? parseInt(e.target.value) : null;
    setSelectedCourseId(courseId);
    setValidationError("");
    if (birthYear) validateBirthYear(birthYear);
  };

  const isFormValid = () => {
    if (validationError) return false;
    if (selectedCourse?.min_birth_year || selectedCourse?.max_birth_year) {
      return birthYear.length === 4 && !isNaN(parseInt(birthYear));
    }
    return true;
  };

  return (
    <Form
      id="registration-form"
      action={handleRegisterSubmit}
      className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
    >
      <input type="hidden" name="subject" value="Anmälan till danskurs"></input>
      {/* Kursval */}
      <div className="mb-4">
        <label htmlFor="courseName" className="block mb-2 font-medium">
          Välj kurs
        </label>
        <select
          id="courseName"
          name="courseName"
          required
          onChange={handleCourseChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="">Välj en kurs...</option>
          {courseNames.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
              {course.min_birth_year && course.max_birth_year
                ? ` (${course.min_birth_year}-${course.max_birth_year})`
                : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Elevens namn */}
      <div className="mb-4">
        <label htmlFor="studentName" className="block mb-2 font-medium">
          Elevens namn
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          required
          placeholder="Elevens namn"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Födelseår */}
      <div className="mb-4">
        <label htmlFor="studentBirthYear" className="block mb-2 font-medium">
          Elevens födelseår
          {selectedCourse?.min_birth_year || selectedCourse?.max_birth_year ? (
            <span className="text-red-600">*</span>
          ) : null}
        </label>
        <input
          type="text"
          id="studentBirthYear"
          name="studentBirthYear"
          value={birthYear}
          onChange={(e) => validateBirthYear(e.target.value)}
          placeholder="ÅÅÅÅ"
          maxLength={4}
          required={!!(selectedCourse?.min_birth_year || selectedCourse?.max_birth_year)}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
            validationError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {validationError && (
          <p className="text-red-600 text-sm mt-1">{validationError}</p>
        )}
        {selectedCourse &&
          (selectedCourse.min_birth_year || selectedCourse.max_birth_year) &&
          !validationError &&
          birthYear && (
            <p className="text-green-600 text-sm mt-1">
              ✓ Födelseåret är giltigt för denna kurs
            </p>
          )}
      </div>

      {/* Visa förälders namn endast om eleven är under 18 */}
      {isUnder18 && (
        <div className="mb-4">
          <label htmlFor="parentName" className="block mb-2 font-medium">
            Förälders för- och efternamn
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            required={isUnder18}
            placeholder="Förälders för- och efternamn"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      )}

      {/* E-post */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="E-post"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Skicka kursanmälan
      </button>
    </Form>
  );
}
