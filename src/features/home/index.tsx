import { MainNews } from "@/components/mainNews";

export const HomePage = () => {
  const data = {
    slug: "next-js-15-lancamento",
    title: "Next.js 15: novidades e melhorias de performance",
    excerpt:
      "A nova versão do framework React traz melhorias significativas no App Router e suporte a React 19.",
    content: "Conteúdo completo da notícia sobre Next.js 15...",
    imageUrl: "https://picsum.photos/seed/nextjs/800/400",
    imageAlt: "Código e tela de desenvolvimento com Next.js",
    category: "Tecnologia",
    date: "2025-03-15",
    section: "destaque",
  };

  return (
    <main className="w-full min-h-screen">
      <h1>Home</h1>
      <MainNews
        title={data.title}
        excerpt={data.excerpt}
        imageUrl={data.imageUrl}
        imageAlt={data.imageAlt}
        category={data.category}
      />
    </main>
  );
};
