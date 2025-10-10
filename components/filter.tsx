"use client";
import { useState } from 'react';

export default function Filter() {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-2 mx-auto gap-2 p-4 lg:w-full w-sm h-150 border-purple-600 rounded-lg text-sm">
      <fieldset className=''>
        <legend className="font-semibold mb-1">Dag</legend>
        <label htmlFor='monday' className="flex items-center gap-2 mb-1"><input id='monday' type="checkbox" />Måndag</label>
        <label htmlFor='tuesday' className='flex items-center gap-2 mb-1'> <input id='tuesday' type="checkbox" />Tisdag</label>
        <label htmlFor='wednesday' className='flex items-center gap-2 mb-1'><input id='wednesday' type="checkbox" />Onsadag</label>
        <label htmlFor='thursday' className='flex items-center gap-2 mb-1'><input id='thursday' type="checkbox" />Torsdag</label>
        <label htmlFor='friday' className='flex items-center gap-2 mb-1'><input id='friday' type="checkbox" />Fredag</label>
        <label htmlFor='saturday' className='flex items-center gap-2 mb-1'><input id='saturday' type="checkbox" />Lörag</label>
        <label htmlFor='sunday' className='flex items-center gap-2 mb-1'><input id='sunday' type="checkbox" />Söndag</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Startdatum</legend>
        <label className="flex items-center gap-2 mb-1"><input id='2aug' type="checkbox" />2 augusti</label>
        <label className="flex items-center gap-2 mb-1"><input id='4okt' type="checkbox" />4 oktober</label>
        <label className="flex items-center gap-2 mb-1"><input id='25okt' type="checkbox" />25 oktober</label>
        <label className="flex items-center gap-2 mb-1"><input id='18jan' type="checkbox" />18 januari</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Skola</legend>
        <label className="flex items-center gap-2 mb-1"><input id='Nillas dansskola' type="checkbox" />Nillas dansskola</label>
        <label className="flex items-center gap-2 mb-1"><input id='Malins danskurser' type="checkbox" />Malins danskurser</label>
        <label className="flex items-center gap-2 mb-1"><input id='Olas dans' type="checkbox" />Olas dans</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Ålder</legend>
        <label className="flex items-center gap-2 mb-1"><input id='5-6' type="checkbox" />5-6 år</label>
        <label className="flex items-center gap-2 mb-1"><input id='7-9' type="checkbox" />7-9 år</label>
        <label className="flex items-center gap-2 mb-1"><input id='10-13' type="checkbox" />10-13 år</label>
        <label className="flex items-center gap-2 mb-1"><input id='14-18' type="checkbox" />14-18 år</label>
        <label className="flex items-center gap-2 mb-1"><input id='18+' type="checkbox" />18+ år</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Dansstil</legend>
        <label className="flex items-center gap-2 mb-1"><input id='Barndans' type="checkbox" />Barndans</label>
        <label className="flex items-center gap-2 mb-1"><input id='Dansmix' type="checkbox" />Dansmix</label>
        <label className="flex items-center gap-2 mb-1"><input id='Jazzdans' type="checkbox" />Jazzdans</label>
        <label className="flex items-center gap-2 mb-1"><input id='Hip Hop' type="checkbox" />Hip Hop</label>
        <label className="flex items-center gap-2 mb-1"><input id='Breaking' type="checkbox" />Breaking</label>
        <label className="flex items-center gap-2 mb-1"><input id='Locking' type="checkbox" />Locking</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Typ</legend>
        <label className="flex items-center gap-2 mb-1"><input id='Workshop' type="checkbox" />Workshop</label>
      </fieldset>

      <fieldset className=''>
        <legend className="font-semibold mb-1">Antal gånger</legend>
        <label htmlFor='antal' className="sr-only flex items-center gap-2 mb-1">Antal gånger</label>
        <input id='antal' type="range" min={2} max={20} />
        <div className="flex justify-between text-xs">
          <span>0</span>
          <span>20</span>
        </div>
      </fieldset>
    </section>
  );
}