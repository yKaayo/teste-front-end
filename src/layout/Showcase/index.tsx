// Styles
import styles from "./styles.module.scss";

// Products
import data from "../../data/products.json";

// Types
import type { Product } from "../../types/product";

// Component
import Carousel from "../../components/Carousel";

interface ShowcaseProps {
  filter?: boolean;
}

const Showcase = ({ filter = false }: ShowcaseProps) => {
  const tags = [
    {
      text: "Celular",
      active: true,
    },
    {
      text: "Acessórios",
      active: false,
    },
    {
      text: "Tablets",
      active: false,
    },
    {
      text: "Notebooks",
      active: false,
    },
    {
      text: "TVS",
      active: false,
    },
    {
      text: "VER TODOS",
      active: false,
    },
  ];

  const products: Product[] = data.products;

  return (
    <section className={styles.showcase}>
      <div className={styles["showcase__title"]}>
        <div className="divisor"></div>
        <h2>Produtos Relacionados</h2>
        <div className="divisor"></div>
      </div>

      {filter ? (
        <div className={styles["showcase__tags"]}>
          {tags.map((tag) => (
            <a
              href="#"
              key={tag.text}
              className={`${styles["showcase__tags-tag"]} ${
                tag.active ? styles["showcase__tags-tag--active"] : ""
              }`}
            >
              {tag.text}
            </a>
          ))}
        </div>
      ) : (
        <p className={styles["showcase__all-tags"]}>Ver todos</p>
      )}

      <Carousel products={products} />
    </section>
  );
};

export default Showcase;
