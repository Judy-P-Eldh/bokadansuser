"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { FilterProps } from "@/lib/data/interfaces";

export default function Filter({ filterOptions }: FilterProps) {
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

    selectedDays.forEach((day) => {
      const capitalized = day.charAt(0).toUpperCase() + day.slice(1);
      params.append("days", capitalized);
    });

    selectedDates.forEach((date) => params.append("dates", date));
    selectedAge.forEach((age) => params.append("ages", age));
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
          {filterOptions.dates.map((date) => (
            <label key={date.value} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={date.value}
                checked={selectedDates.includes(date.value)}
                onChange={() => toggleValue(date.value, selectedDates, setSelectedDates)}
              />
              {date.label}
            </label>
          ))}
        </fieldset>


        <fieldset>
          <legend className="font-semibold mb-1">Ålder</legend>
          {filterOptions.ages.map((age) => (
            <label key={age.value} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={age.value}
                checked={selectedAge.includes(age.value)}
                onChange={() => toggleValue(age.value, selectedAge, setSelectedAge)}
              />
              {age.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Dansstil</legend>
          {filterOptions.styles.map((style) => (
            <label key={style.value} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={style.value}
                checked={selectedStyles.includes(style.value)}
                onChange={() => toggleValue(style.value, selectedStyles, setSelectedStyles)}
              />
              {style.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Typ</legend>
          {filterOptions.types.map((type) => (
            <label key={type.value} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={type.value}
                checked={selectedTypes.includes(type.value)}
                onChange={() => toggleValue(type.value, selectedTypes, setSelectedTypes)}
              />
              {type.label}
            </label>
          ))}
        </fieldset>
      </section>

      <div className="grid gap-2 w-3/4 lg:w-full space-evenly mx-auto">
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
      </div>
    </form>
  );
}