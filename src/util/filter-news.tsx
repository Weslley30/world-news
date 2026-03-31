type INews = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  date: string;
  section: string;
};

type IFilterNews = {
  infos: INews[];
  category: string;
};

function getDate(date: string) {
  return new Date(date).getTime();
}

export function FilterNews({ infos, category }: IFilterNews) {
  return infos
    .sort((a, b) => getDate(b.date) - getDate(a.date))
    .find((i) =>
      Object.values(i).some((value) =>
        value.toLowerCase().includes(category.toLowerCase()),
      ),
    );
}
