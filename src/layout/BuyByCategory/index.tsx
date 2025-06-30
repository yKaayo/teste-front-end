// Styles
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
  const categories = [
    { text: "Tecnologia", icon: devices, active: true },
    { text: "Supermercado", icon: supermarket, active: false },
    { text: "Bebidas", icon: whiskey, active: false },
    { text: "Ferramentas", icon: tools, active: false },
    { text: "Saúde", icon: health, active: false },
    { text: "Esportes e Fitness", icon: race, active: false },
    { text: "Moda", icon: fashion, active: false },
  ];

  return (
    <section className={styles.categories}>
      {categories.map((category, i) => (
        <a
          href="#"
          key={i}
          className={`${styles["categories__category"]} ${
            category.active ? styles["categories__category--active"] : ""
          }`}
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
