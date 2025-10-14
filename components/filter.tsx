"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Initiera state från URL params
  const [selectedDays, setSelectedDays] = useState<string[]>(
    searchParams.getAll("days")
  );
  const [selectedDates, setSelectedDates] = useState<string[]>(
    searchParams.getAll("dates")
  );
  const [selectedAge, setSelectedAge] = useState<string[]>(
    searchParams.getAll("age")
  );
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    searchParams.getAll("styles")
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.getAll("types")
  );

  const toggleValue = (
    value: string,
    array: string[],
    setFunction: (vals: string[]) => void
  ) => {
    if (array.includes(value)) {
      setFunction(array.filter((item) => item !== value));
    } else {
      setFunction([...array, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    // Kapitalisera dagarna för att matcha databasen (Monday, Tuesday, etc.)
    selectedDays.forEach((day) => {
      const capitalized = day.charAt(0).toUpperCase() + day.slice(1);
      params.append("days", capitalized);
    });


    selectedDates.forEach((date) => params.append("dates", date));
    selectedAge.forEach((age) => params.append("age", age));
    selectedStyles.forEach((style) => params.append("styles", style));
    selectedTypes.forEach((type) => params.append("types", type));

    startTransition(() => {
      router.push(`/kurser?${params.toString()}`);
    });
  };

  const handleReset = () => {
    setSelectedDays([]);
    setSelectedDates([]);
    setSelectedAge([]);
    setSelectedStyles([]);
    setSelectedTypes([]);
    startTransition(() => {
      router.push("/kurser");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <section className="grid lg:grid-cols-3 grid-cols-2 mx-auto gap-2 p-4 lg:w-full w-sm h-150 border-purple-600 rounded-lg text-sm">
        <fieldset>
          <legend className="font-semibold mb-1">Dag</legend>
          {["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"].map(
            (day) => (
              <label key={day} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  value={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => toggleValue(day, selectedDays, setSelectedDays)}
                />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            )
          )}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Startdatum</legend>
          {[
            { label: "20 aug", value: "2025-08-20" },
            { label: "25 aug", value: "2025-08-25" },
            { label: "25 okt", value: "2025-10-25" },
            { label: "18 jan", value: "2026-01-18" },
          ].map((dateObj) => (
            <label key={dateObj.value} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={dateObj.value}
                checked={selectedDates.includes(dateObj.value)}
                onChange={() =>
                  toggleValue(dateObj.value, selectedDates, setSelectedDates)
                }
              />
              {dateObj.label}
            </label>
          ))}
        </fieldset>


        <fieldset>
          <legend className="font-semibold mb-1">Ålder</legend>
          {["5-6", "7-9", "10-13", "14-18", "18+"].map(
            (ageValue) => (
              <label key={ageValue} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  value={ageValue}
                  checked={selectedAge.includes(ageValue)}
                  onChange={() => toggleValue(ageValue, selectedAge, setSelectedAge)}
                />
                {ageValue.replace("value_", "").replace("_", "-")} år
              </label>
            )
          )}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Dansstil</legend>
          {["barndans", "dansmix", "jazzdans", "hiphop", "breaking", "locking"].map(
            (style) => (
              <label key={style} className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  value={style}
                  checked={selectedStyles.includes(style)}
                  onChange={() => toggleValue(style, selectedStyles, setSelectedStyles)}
                />
                {style}
              </label>
            )
          )}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Typ</legend>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              value="workshop"
              checked={selectedTypes.includes("workshop")}
              onChange={() =>
                toggleValue("workshop", selectedTypes, setSelectedTypes)
              }
            />
            Workshop
          </label>
        </fieldset>
      </section>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {isPending ? "Filtrerar..." : "Filtrera"}
      </button>

      <button
        type="button"
        onClick={handleReset}
        disabled={isPending}
        className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 disabled:opacity-50"
      >
        Rensa filter
      </button>
    </form>
  );
}