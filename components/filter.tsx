"use client";
import { MobileMenuProps } from '@/lib/data/interfaces';
import { useState } from 'react';

// interface FilterProps {
//   // Här kan du lägga till callback-funktioner för att skicka val vidare
// }

export default function Filter({ isOpen, setIsOpen }: MobileMenuProps) {
    //  const [isOpen, setIsOpen] = useState(false)
    // För demo: state för val, kan bytas mot prop eller context
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);
  const [selectedStartDates, setSelectedStartDates] = useState<string[]>([]);
  const [selectedOther, setSelectedOther] = useState<string[]>([]);
  const [countRange, setCountRange] = useState<[number, number]>([3, 25]);

  function toggleSelection(selected: string[], value: string, setSelected: (v: string[]) => void) {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  // open={isOpen} onOpenChange={setIsOpen} 
    return(
 <section className="h-80 p-4 border-2 border-purple-600 rounded-lg max-w-xs font-sans text-sm">
      <h2 className="font-bold mb-2 text-center">Filter</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Dag</h3>
        {['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'].map(day => (
          <label key={day} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox" 
              checked={selectedDays.includes(day)} 
              onChange={() => toggleSelection(selectedDays, day, setSelectedDays)} 
            />
            {day}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Startdatum</h3>
        {['2 augusti', '4 oktober', '25 oktober', '18 januari'].map(date => (
          <label key={date} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox"
              checked={selectedStartDates.includes(date)}
              onChange={() => toggleSelection(selectedStartDates, date, setSelectedStartDates)}
            />
            {date}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Lärare</h3>
        {['Malin', 'Pernilla', 'Anna', 'Ola'].map(teacher => (
          <label key={teacher} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox" 
              checked={selectedTeachers.includes(teacher)} 
              onChange={() => toggleSelection(selectedTeachers, teacher, setSelectedTeachers)} 
            />
            {teacher}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Skola</h3>
        {['Nillas dansskola', 'Malins danskurser', 'Olas dans'].map(school => (
          <label key={school} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox" 
              checked={selectedSchools.includes(school)} 
              onChange={() => toggleSelection(selectedSchools, school, setSelectedSchools)} 
            />
            {school}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Ålder</h3>
        {['5-6 år', '7-9 år', '10-13 år', '14-18 år', 'Vuxna'].map(age => (
          <label key={age} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox" 
              checked={selectedAges.includes(age)} 
              onChange={() => toggleSelection(selectedAges, age, setSelectedAges)} 
            />
            {age}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Stil</h3>
        {['Barndans', 'Dansix', 'Jazzdans', 'Street', 'Övrigt'].map(style => (
          <label key={style} className="flex items-center gap-2 mb-1">
            <input 
              type="checkbox" 
              checked={selectedStyles.includes(style)} 
              onChange={() => toggleSelection(selectedStyles, style, setSelectedStyles)} 
            />
            {style}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Annat</h3>
        <label className="flex items-center gap-2 mb-1">
          <input 
            type="checkbox"
            checked={selectedOther.includes('Workshop')}
            onChange={() => toggleSelection(selectedOther, 'Workshop', setSelectedOther)}
          />
          Workshop
        </label>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Antal ggr</h3>
        <input 
          type="range" 
          min={3} 
          max={25} 
          value={countRange[1]} 
          onChange={(e) => setCountRange([countRange[0], Number(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between text-xs">
          <span>{countRange[0]}</span>
          <span>{countRange[1]}</span>
        </div>
      </div>
    </section>
    );
}