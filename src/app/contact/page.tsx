"use client";

import { useForm } from "react-hook-form";
import { Mail, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/buttonForm";
import { InputForm } from "@/components/inputForm";
import { TextAreaForm } from "@/components/TextAreaForm";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt; Contato
      </nav>

      <h1 className="text-2xl font-bold mb-6">Contato</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputForm
          id="name"
          label="Nome *"
          icon={<User size={18} />}
          error={errors.name}
          register={register("name", {
            required: "O nome é obrigatório",
          })}
        />

        <InputForm
          id="email"
          label="E-mail *"
          type="email"
          icon={<Mail size={18} />}
          error={errors.email}
          register={register("email", {
            required: "O e-mail é obrigatório",
          })}
        />

        <TextAreaForm
          id="message"
          label="Mensagem *"
          error={errors.message}
          register={register("message", {
            required: "A mensagem é obrigatória",
          })}
        />

        <Button type="submit" loading={isSubmitting}>
          Enviar mensagem
        </Button>
      </form>
    </main>
  );
}
