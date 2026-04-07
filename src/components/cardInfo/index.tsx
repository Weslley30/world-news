import { CardComponentProp } from "@/types/CardComponentType";
import Image from "next/image";

const sizeMap = {
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
  size = "lg",
}: CardComponentProp) => {
  return (
    <article
      className={`${sizeMap[size]} mt-[10px] border rounded overflow-hidden`}
    >
      <div className="w-[100%] h-[300px] relative">
        <Image src={imageUrl} alt={imageAlt} fill />
      </div>
      <div className="px-[20px] ">
        <p className="text-[red]">{category}</p>
        <h2 className="bolder">{title}</h2>
        <p className="text-[gray] bolder">{description}</p>
      </div>
    </article>
  );
};
