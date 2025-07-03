// Styles
import styles from "./styles.module.scss";

// Type
import type { Product } from "../../types/product";

// Icon
import closeIcon from "../../assets/icons/close.svg";

// Utils
import { formatCurrency } from "../../utils/formatCurrency";

// Component
import YellowBtn from "../YellowBtn";
import { useState } from "react";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.backgound}>
      <section className={styles.modal}>
        <button onClick={onClose} className={styles["modal__close"]}>
          <img
            className={styles["modal__close-icon"]}
            src={closeIcon}
            alt="Fechar"
          />
        </button>

        <img src={product.photo} alt={product.productName} />

        <div className={styles["modal__text"]}>
          <h3>{product.productName}</h3>
          <p className={styles["modal__text-price"]}>
            {formatCurrency(product.price)}
          </p>
          <p className={styles["modal__text-description"]}>
            {product.descriptionShort}
          </p>
          <a href="#">Veja mais detalhes do produto &gt;</a>

          <div className={styles["modal__text__buttons"]}>
            <div className={styles["modal__text__buttons__quantity"]}>
              <button
                onClick={handleMinus}
                className={`${styles["modal__text__buttons__quantity-btn"]} ${
                  quantity === 1
                    ? styles["modal__text__buttons__quantity-btn--disabled"]
                    : ""
                }`}
              >
                -
              </button>
              <p>{String(quantity).padStart(2, "0")}</p>
              <button
                onClick={handlePlus}
                className={styles["modal__text__buttons__quantity-btn"]}
              >
                +
              </button>
            </div>

            <YellowBtn
              paddingY={7.5}
              width="100%"
              text="COMPRAR"
              weight={700}
              fontSize={14}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductModal;
