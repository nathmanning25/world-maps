"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => handleRegionChange(e.target.value)}
      placeholder="Search for a country"
    />
  );
}
