"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
    <div>
      <select
        name="Regions"
        id="regions"
        className="p-2 rounded-md border border-gray-300"
        onChange={(event) => handleRegionChange(event.target.value)}
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
