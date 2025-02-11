"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackNavigation() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 mt-4"
    >
      <IoMdArrowRoundBack />
      Go Back
    </button>
  );
}
