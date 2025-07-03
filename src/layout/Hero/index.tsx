// Styles
import YellowBtn from "../../components/YellowBtn";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles["hero__text"]}>
        <h2>Venha conhecer nossas promoções</h2>
        <p>
          <span>50% Off</span> nos produtos
        </p>

        <YellowBtn
          paddingX={49}
          paddingY={12.5}
          text="Ver produto"
          weight={600}
        />
      </div>
    </main>
  );
};

export default Hero;
