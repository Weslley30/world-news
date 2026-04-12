"use client";

import { InputFormProps } from "./type";

export function InputForm({
  label,
  id,
  error,
  icon,
  register,
  type = "text",
}: InputFormProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative mt-1">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          id={id}
          type={type}
          className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...register}
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}
