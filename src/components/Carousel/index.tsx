import { useRef, useState } from "react";

// Styles
import styles from "./styles.module.scss";

// Icon
import arrow from "../../assets/icons/arrow.svg";

// Types
import type { Product } from "../../types/product";
import Card from "../ProductCard";

interface CarouselProps {
  products: Product[];
}
const Carousel = ({ products }: CarouselProps) => {
  const visibleItems = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: number) => {
    const maxIndex = products.length - visibleItems;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;

    setCurrentIndex(newIndex);
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
            <div className={styles["carousel__wrapper__track-item"]} key={i}>
              <Card product={product} key={i} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles["carousel__btn"]} ${styles["carousel__btn-next"]}`}
        onClick={() => handleSlide(1)}
      >
        <img src={arrow} alt="Próximo" />
      </button>
    </div>
  );
};

export default Carousel;
