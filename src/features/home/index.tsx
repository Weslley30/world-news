import { CardInfo } from "@/components/cardInfo";
import { MainNews } from "@/components/mainNews";
import { noticias } from "@/util/data-news";
import { FilterNews } from "@/util/filter-news";

export const HomePage = () => {
  const infos = noticias;
  const mainNews = FilterNews({ infos: infos, category: "Tecnologia" });
  const secondaryNews = FilterNews({ infos: infos, category: "Mundo" });

  if (!infos) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center">
        <h1>Nenhuma notícia encontrada</h1>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen">
      <h1>Home</h1>
      <CardInfo
        title={secondaryNews.title}
        description={secondaryNews.excerpt}
        imageUrl={secondaryNews.imageUrl}
        imageAlt={secondaryNews.imageAlt}
        category={secondaryNews.category}
      />
      <MainNews
        title={mainNews.title}
        description={mainNews.excerpt}
        imageUrl={mainNews.imageUrl}
        imageAlt={mainNews.imageAlt}
        category={mainNews.category}
      />
    </main>
  );
};
