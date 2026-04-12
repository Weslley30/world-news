import { FieldError, UseFormRegisterReturn } from "react-hook-form";


export type TextAreaFormProps = {
    label: string;
    id: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
};