import { IFilterNews } from "@/types/CardComponentType";

function getDate(date: string) {
  return new Date(date).getTime();
}

export function FilterNews({ infos, category }: IFilterNews) {
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
