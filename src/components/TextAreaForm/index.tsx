"use client";

import { TextAreaFormProps } from "./type";

export function TextAreaForm({
  label,
  id,
  error,
  register,
}: TextAreaFormProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        id={id}
        rows={5}
        className={`w-full mt-1 px-3 py-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...register}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
}
