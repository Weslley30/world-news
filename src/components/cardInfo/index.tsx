import { CardComponentProp } from "@/types/CardComponentType";
import Image from "next/image";

const sizeMap = {
  min: "w-[300px]",
  sm: "w-[400px]",
  md: "w-[500px]",
  lg: "w-[600px]",
};

export const CardInfo = ({
  category,
  description,
  imageAlt,
  imageUrl,
  title,
  time,
  size = "lg",
}: CardComponentProp) => {
  return (
    <article
      className={`${sizeMap[size]} mt-[10px] border rounded overflow-hidden`}
    >
      <div className="w-full h-[300px] relative overflow-hidden rounded-t">
        <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="px-[20px] ">
        <p className="text-[red]">{category}</p>
        <h2 className="bolder">{title}</h2>
        <p className="text-[gray] bolder">{time}</p>
        <p className="text-[gray] bolder">{description}</p>
      </div>
    </article>
  );
};
