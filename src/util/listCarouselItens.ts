import { INews } from "@/types/CardComponentType";

export function ListCarouselItems(info: INews[]){
    
    return info.map((item: INews) => ({
    slug: item.slug,
    title: item.title,
    description: item.excerpt, // 🔥 conversão aqui
    imageUrl: item.imageUrl,
    imageAlt: item.imageAlt,
    category: item.category,
  }));
}