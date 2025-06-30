import { useState } from "react";
import styles from "./styles.module.scss";

// Icons
import devices from "../../assets/icons/devices.svg";
import supermarket from "../../assets/icons/supermarket.svg";
import whiskey from "../../assets/icons/whiskey.svg";
import tools from "../../assets/icons/tools.svg";
import health from "../../assets/icons/health.svg";
import race from "../../assets/icons/race.svg";
import fashion from "../../assets/icons/fashion.svg";

const BuyByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    { text: "Tecnologia", icon: devices },
    { text: "Supermercado", icon: supermarket },
    { text: "Bebidas", icon: whiskey },
    { text: "Ferramentas", icon: tools },
    { text: "Saúde", icon: health },
    { text: "Esportes e Fitness", icon: race },
    { text: "Moda", icon: fashion },
  ];

  return (
    <section className={styles.categories}>
      {categories.map((category, i) => (
        <a
          href="#"
          key={i}
          className={`${styles["categories__category"]} ${
            selectedCategory === i ? styles["categories__category--active"] : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedCategory(i);
          }}
        >
          <div className={styles["categories__category-icon"]}>
            <img src={category.icon} alt={category.text} />
          </div>
          <p>{category.text}</p>
        </a>
      ))}
    </section>
  );
};

export default BuyByCategory;
