"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("country") || ""
  );

  const handleRegionChange = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      router.push("/");
    } else {
      router.push(`?country=${query}`);
    }
  };

  return (
    <>
      <label className="sr-only">Search country</label>
      <div className="relative md:w-1/2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleRegionChange(e.target.value)}
          placeholder="Search for a country"
          className="w-full p-4 pr-10 border border-gray-300 rounded-md"
        />
        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </>
  );
}
