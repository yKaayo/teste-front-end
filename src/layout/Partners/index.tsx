// Styles
import styles from "./styles.module.scss";

// Component
import PartnerCard from "../../components/PartnerCard";

const Partners = () => {
  return (
    <section className={styles.partners}>
      <PartnerCard />
      <PartnerCard />
    </section>
  );
};

export default Partners;
