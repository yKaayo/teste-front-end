// Styles
import styles from "./styles.module.scss";

// Icon
import logo from "../../assets/icons/logo.svg";
import BrandingCard from "../../components/BrandingCard";

const Brandings = () => {
  const brandings = [
    { logo: logo, text: "Econverse" },
    { logo: logo, text: "Econverse" },
    { logo: logo, text: "Econverse" },
    { logo: logo, text: "Econverse" },
    { logo: logo, text: "Econverse" },
  ];

  return (
    <section className={styles.container}>
      <h3>Navegue por marcas</h3>

      <div className={styles["container__brandings"]}>
        {brandings.map((branding, i) => (
          <BrandingCard logo={branding.logo} text={branding.text} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Brandings;
