import Image from "next/image";
import styles from "./mainNews.module.scss";
import Link from "next/link";
import { CardComponentProp } from "@/types/CardComponentType";

export const MainNews = ({
  category,
  description,
  imageAlt,
  imageUrl,
  title,
}: CardComponentProp) => {
  return (
    <article className={styles.container}>
      <Link href={`/noticia/${title}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={styles.image}
          priority
        />

        <div className={styles.overlay}>
          <span className={styles.category}>{category}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{description}</p>
        </div>
      </Link>
    </article>
  );
};
