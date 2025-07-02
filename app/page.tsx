"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth");
    }
  }, [router]);

  return null;
}
