"use client";

import { ButtonProps } from "./type";

export function Button({
  children,
  onClick,
  loading = false,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
