// Styles
import styles from "./styles.module.scss";

// Type
import type { Product } from "../../types/product";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  return <div className={styles.container}>
    <section className={styles.modal}></section>
  </div>;
};

export default ProductModal;
