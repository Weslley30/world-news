import { MainNews } from "@/components/mainNews";
import { noticias } from "@/util/data-news";
import { FilterNews } from "@/util/filter-news";

export const HomePage = () => {
  const mainNews = FilterNews({ infos: noticias, category: "Tecnologia" });

  if (!mainNews) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center">
        <h1>Nenhuma notícia encontrada</h1>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen">
      <h1>Home</h1>
      <MainNews
        title={mainNews.title}
        excerpt={mainNews.excerpt}
        imageUrl={mainNews.imageUrl}
        imageAlt={mainNews.imageAlt}
        category={mainNews.category}
      />
    </main>
  );
};
