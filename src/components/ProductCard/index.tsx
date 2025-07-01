// Styles
import styles from "./styles.module.scss";

// Type
import type { Product } from "../../types/product";

// Util
import { formatCurrency } from "../../utils/formatCurrency";

interface CardProps {
  product: Product;
}

const ProductCard = ({ product }: CardProps) => {
  return (
    <article className={styles.card}>
      <img src={product.photo} alt={product.productName} />

      <h3>{product.productName}</h3>
      <p className={styles["card__price"]}>{formatCurrency(product.price)}</p>
      <p className={styles["card__discount"]}>
        ou 2x de {formatCurrency(product.price / 2)} sem juros
      </p>

      <p className={styles["card__shipping"]}>Frete grátis</p>

      <div>Comprar</div>
    </article>
  );
};

export default ProductCard;
