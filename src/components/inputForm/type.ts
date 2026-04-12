import { FieldError, UseFormRegisterReturn } from "react-hook-form";


export type InputFormProps = {
  label: string;
  id: string;
  error?: FieldError;
  icon?: React.ReactNode;
  register: UseFormRegisterReturn;
  type?: string;
};