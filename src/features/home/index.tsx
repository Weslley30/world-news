import { CardInfo } from "@/components/cardInfo";
import { MainNews } from "@/components/mainNews";
import { FilterNews } from "@/util/filterNews";
import { getInfos } from "@/util/getInfos";

export const HomePage = async () => {
  const infos = await getInfos();
  const mainNews = FilterNews({ infos: infos, category: "Tecnologia" });
  const secondaryNews = FilterNews({ infos: infos, category: "Mundo" });

  return (
    <main className="w-full min-h-screen">
      <h1>Home</h1>
      <MainNews
        title={mainNews.title}
        description={mainNews.excerpt}
        imageUrl={mainNews.imageUrl}
        imageAlt={mainNews.imageAlt}
        category={mainNews.category}
      />
      <CardInfo
        title={secondaryNews.title}
        description={secondaryNews.excerpt}
        imageUrl={secondaryNews.imageUrl}
        imageAlt={secondaryNews.imageAlt}
        category={secondaryNews.category}
      />
    </main>
  );
};
