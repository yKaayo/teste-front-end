// Styles
import styles from "./styles.module.scss";

interface BrandingCardProps {
  logo: string;
  text: string;
}

const BrandingCard = ({ logo, text }: BrandingCardProps) => {
  return (
    <a className={styles.card} href="#">
      <img src={logo} alt={text} loading="lazy" />
    </a>
  );
};

export default BrandingCard;
