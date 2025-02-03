"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Dropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [region, setRegion] = useState(searchParams.get("region") || "");

  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    if (newRegion === "default") {
      router.push("/");
    } else {
      router.push(`?region=${newRegion}`);
    }
  };

  console.log(region);

  return (
    <div className="relative">
      <label className="sr-only">Select Region</label>
      <select
        name="Regions"
        id="regions"
        className="w-48 p-4 border border-gray-300 rounded-md appearance-none"
        onChange={(event) => handleRegionChange(event.target.value)}
      >
        <option value="default">Select a region</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <RiArrowDropDownLine className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
}
