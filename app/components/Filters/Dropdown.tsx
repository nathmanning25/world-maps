"use client";

export default function Dropdown() {
  return (
    <div>
      <select
        name="Regions"
        id="regions"
        className="p-2 rounded-md border border-gray-300"
      >
        <option value="default">Select a region</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
