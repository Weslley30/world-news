import { CardInfo } from "@/components/cardInfo";
import { NewsCarousel } from "@/components/carrosel/Carrosel";
import { MainNews } from "@/components/mainNews";
import {
  FilterNewsForCategory,
  FilterNewsForSection,
  FindNews,
} from "@/util/filterNews";
import { getInfos } from "@/util/getInfos";
import { ListCarouselItems } from "@/util/listCarouselItens";

export const HomePage = async () => {
  const resultInfos = await getInfos();
  const mainNews = FindNews({ infos: resultInfos, category: "Tecnologia" });
  const secondaryNews = FindNews({ infos: resultInfos, category: "Mundo" });
  const ListTecnology = FilterNewsForCategory({
    infos: resultInfos,
    category: "Tecnologia",
  });
  const ListWebStory = FilterNewsForSection({
    infos: resultInfos,
    section: "webstory",
  });

  const itensCarouselTecnology = ListCarouselItems(ListTecnology);

  console.log("ListWebStory => ", ListWebStory);
  return (
    <main className="w-full min-h-screen">
      <h1>Home</h1>
      <MainNews
        title={mainNews.title}
        description={mainNews.excerpt}
        imageUrl={mainNews.imageUrl}
        imageAlt={mainNews.imageAlt}
        category={mainNews.category}
        size="lg"
      />
      <CardInfo
        title={secondaryNews.title}
        description={secondaryNews.excerpt}
        imageUrl={secondaryNews.imageUrl}
        imageAlt={secondaryNews.imageAlt}
        category={secondaryNews.category}
      />

      <NewsCarousel items={itensCarouselTecnology} />
      <h2 className="text-2xl font-bold text-red-600 mb-4">WEBSTORY</h2>
      <div className="flex gap-4">
        {ListWebStory.map((iten) => (
          <MainNews
            size="sm"
            key={iten.slug}
            description={iten.excerpt}
            imageUrl={iten.imageUrl}
            imageAlt={iten.imageAlt}
          />
        ))}
      </div>
    </main>
  );
};
