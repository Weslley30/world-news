import {
  IFilterNewsCategory,
  IFilterNewsSection,
} from "@/types/CardComponentType";

function getDate(date: string) {
  return new Date(date).getTime();
}

export function FindNews({ infos, category }: IFilterNewsCategory) {
  const result = infos
    .sort((a, b) => getDate(b.date) - getDate(a.date))
    .find((i) =>
      Object.values(i).some((value) =>
        value.toLowerCase().includes(category.toLowerCase()),
      ),
    );
  if (!result) {
    throw new Error("Notícia não encontrada");
  }

  return result;
}

export function FilterNewsForCategory({
  infos,
  category,
}: IFilterNewsCategory) {
  const result = [...infos]
    .sort((a, b) => getDate(b.date) - getDate(a.date))
    .filter((i) => i.category.toLowerCase().includes(category.toLowerCase()));

  if (result.length === 0) {
    throw new Error("Notícia não encontrada");
  }

  return result;
}

export function FilterNewsForSection({ infos, section }: IFilterNewsSection) {
  const result = [...infos]
    .sort((a, b) => getDate(b.date) - getDate(a.date))
    .filter((i) => i.section.toLowerCase().includes(section.toLowerCase()));

  if (result.length === 0) {
    throw new Error("Notícia não encontrada");
  }

  return result;
}
