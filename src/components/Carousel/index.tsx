import { useRef, useState } from "react";

// Styles
import styles from "./styles.module.scss";

// Icon
import arrow from "../../assets/icons/arrow.svg";

// Types
import type { Product } from "../../types/product";
import Card from "../ProductCard";
import ProductModal from "../ProductModal";

interface CarouselProps {
  products: Product[];
}
const Carousel = ({ products }: CarouselProps) => {
  // Carousel
  const visibleItems = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSlide = (direction: number) => {
    const maxIndex = products.length - visibleItems;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;

    setCurrentIndex(newIndex);
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles["carousel__btn"]} ${styles["carousel__btn-prev"]}`}
        onClick={() => handleSlide(-1)}
      >
        <img src={arrow} alt="Anterior" />
      </button>

      <div className={styles["carousel__wrapper"]}>
        <div
          className={styles["carousel__wrapper__track"]}
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {products.map((product, i) => (
            <button
              onClick={() => handleOpenModal(product)}
              className={styles["carousel__wrapper__track-item"]}
              key={i}
            >
              <Card product={product} key={i} />
            </button>
          ))}
        </div>
      </div>

      <button
        className={`${styles["carousel__btn"]} ${styles["carousel__btn-next"]}`}
        onClick={() => handleSlide(1)}
      >
        <img src={arrow} alt="Próximo" />
      </button>

      {modalIsOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Carousel;
