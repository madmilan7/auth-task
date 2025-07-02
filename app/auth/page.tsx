"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "../styles/Auth.module.scss";

const API_URL = "https://randomuser.me/api/?results=1&nat=us";

export default function AuthPage() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const mobileRegex = /^09\d{9}$/;

  const handleLogin = async () => {
    setError(null);
    if (!mobileRegex.test(mobile)) {
      setError("شماره موبایل باید 11 رقم و با 09 شروع شود");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}?mobile=${encodeURIComponent(mobile)}`
      );
      if (!res.ok) throw new Error("کاربری با این شماره یافت نشد");

      const user = await res.json();
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>ورود با موبایل</h1>
      <Input
        label="شماره موبایل"
        type="tel"
        value={mobile}
        onChange={setMobile}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "در حال بررسی..." : "ورود"}
      </Button>
    </div>
  );
}
