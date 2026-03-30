import Image from "next/image";
import { Prop } from "./type";
import styles from "./mainNews.module.scss";
import Link from "next/link";

export const MainNews = ({
  category,
  excerpt,
  imageAlt,
  imageUrl,
  title,
}: Prop) => {
  return (
    <Link href={`/noticia/${title}`}>
      <article className={styles.container}>
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
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </article>
    </Link>
  );
};
