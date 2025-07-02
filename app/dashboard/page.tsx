"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Dashboard.module.scss";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  [key: string]: any;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      router.replace("/auth");
      return;
    }
    setUser(JSON.parse(stored));
    
  }, [router]);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <h1>خوش آمدی!</h1>
    </div>
  );
}
