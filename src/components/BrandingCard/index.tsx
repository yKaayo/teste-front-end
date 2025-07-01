// Styles
import styles from "./styles.module.scss";

interface BrandingCardProps {
  logo: string;
  text: string;
}

const BrandingCard = ({ logo, text }: BrandingCardProps) => {
  return <img className={styles.card} src={logo} alt={text} />;
};

export default BrandingCard;
