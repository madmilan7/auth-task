"use client";
import React from "react";
import styles from "../styles/Input.module.scss";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
