"use client";
import React from "react";
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
