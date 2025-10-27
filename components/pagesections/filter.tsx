"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { FilterProps } from "@/lib/data/interfaces";

export default function Filter({ filterOptions }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [selectedDays, setSelectedDays] = useState<string[]>(
    searchParams.getAll("days")
  );
  const [selectedDates, setSelectedDates] = useState<string[]>(
    searchParams.getAll("dates")
  );
  const [selectedAge, setSelectedAge] = useState<string[]>(
    searchParams.getAll("ages")
  );
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    searchParams.getAll("styles")
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    searchParams.getAll("types")
  );
  const [selectedSchools, setSelectedSchools] = useState<string[]>(
    searchParams.getAll("school_ids") 
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
    

    selectedDays.forEach((day) => params.append("days", day));
    selectedDates.forEach((date) => params.append("dates", date));
    selectedAge.forEach((age) => params.append("ages", age));
    selectedStyles.forEach((style) => params.append("styles", style));
    selectedTypes.forEach((type) => params.append("types", type));
    selectedSchools.forEach((school) => params.append("school_ids", school));

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
    setSelectedSchools([]);
    startTransition(() => {
      router.push("/kurser");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <section className="grid grid-cols-3 mx-auto gap-2 border-purple-600 rounded-lg text-sm">
        <fieldset>
          <legend className="font-semibold mb-1">Dag</legend>
          {filterOptions.days.map((day) => (
            <label
              key={day.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={day.value}
                checked={selectedDays.includes(day.value)}
                onChange={() =>
                  toggleValue(day.value, selectedDays, setSelectedDays)
                }
              />
              {day.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Startdatum</legend>
          {filterOptions.dates.map((date) => (
            <label
              key={date.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={date.value}
                checked={selectedDates.includes(date.value)}
                onChange={() =>
                  toggleValue(date.value, selectedDates, setSelectedDates)
                }
              />
              {date.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Ålder</legend>
          {filterOptions.ages.map((age) => (
            <label
              key={age.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={age.value}
                checked={selectedAge.includes(age.value)}
                onChange={() =>
                  toggleValue(age.value, selectedAge, setSelectedAge)
                }
              />
              {age.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Dansstil</legend>
          {filterOptions.styles.map((style) => (
            <label
              key={style.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={style.value}
                checked={selectedStyles.includes(style.value)}
                onChange={() =>
                  toggleValue(style.value, selectedStyles, setSelectedStyles)
                }
              />
              {style.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Typ</legend>
          {filterOptions.types.map((type) => (
            <label
              key={type.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={type.value}
                checked={selectedTypes.includes(type.value)}
                onChange={() =>
                  toggleValue(type.value, selectedTypes, setSelectedTypes)
                }
              />
              {type.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend className="font-semibold mb-1">Skola</legend>
          {filterOptions.schools.map((school) => (
            <label
              key={school.value}
              className="flex items-center gap-2 mb-1 cursor-pointer hover:text-purple-700"
            >
              <input
                type="checkbox"
                value={school.value}
                checked={selectedSchools.includes(school.value)}
                onChange={() =>
                  toggleValue(school.value, selectedSchools, setSelectedSchools)
                }
              />
              {school.label}
            </label>
          ))}
        </fieldset>
      </section>

      <div className="grid gap-2 w-3/4 lg:w-full space-evenly mx-auto">
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-purple-800 text-white py-2 rounded-full hover:bg-white hover:text-purple-800 hover:outline hover:outline-purple-800 focus:outline-purple-800 focus:bg-white focus:text-purple-800 cursor-pointer disabled:opacity-50"
        >
          {isPending ? "Filtrerar..." : "Filtrera"}
        </button>
        <button
          type="button"
          onClick={handleReset}
          disabled={isPending}
          className="w-full bg-gray-500 text-white py-2 rounded-full hover:bg-gray-800 focus:outline-purple-800 focus:bg-white focus:text-purple-800 disabled:opacity-50 cursor-pointer"
        >
          Rensa filter
        </button>
      </div>
    </form>
  );
}
