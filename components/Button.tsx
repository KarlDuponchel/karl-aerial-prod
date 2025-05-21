"use client";

import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // paramètre optionnel, 'primary' par défaut
};

export default function Button({
  onClick,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "px-8 py-2 rounded transition font-semibold cursor-pointer font-unbounded font-thin";
  const variants = {
    primary: "bg-primary text-secondary hover:bg-secondary",
    secondary: "bg-secondary text-primary hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}
