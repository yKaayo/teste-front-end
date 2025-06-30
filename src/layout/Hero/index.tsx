// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles["hero__text"]}>
        <h2>Venha conhecer nossas promoções</h2>
        <p>
          <span>50% Off</span> nos produtos
        </p>
        <a href="#">Ver produto</a>
      </div>
    </main>
  );
};

export default Hero;
