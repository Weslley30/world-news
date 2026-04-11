import { CardInfo } from "@/components/cardInfo";
import { NewsCarousel } from "@/components/carrosel/Carrosel";
import { MainNews } from "@/components/mainNews";
import { FilterNews, FindNews } from "@/util/filterNews";
import { getInfos } from "@/util/getInfos";

export const HomePage = async () => {
  const infos = await getInfos();
  const mainNews = FindNews({ infos: infos, category: "Tecnologia" });
  const secondaryNews = FindNews({ infos: infos, category: "Mundo" });
  const ListTecnology = FilterNews({ infos: infos, category: "Tecnologia" });

  const carouselItems = ListTecnology.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.excerpt, // 🔥 conversão aqui
    imageUrl: item.imageUrl,
    imageAlt: item.imageAlt,
    category: item.category,
  }));

  console.log("ListTecnology => ", ListTecnology);
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

      <NewsCarousel items={carouselItems} />
    </main>
  );
};
