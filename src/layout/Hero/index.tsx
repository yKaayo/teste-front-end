// Styles
import styles from "./styles.module.scss";

// Image
import heroImg from "../../assets/images/heroImg.png";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <img src={heroImg} alt="" aria-hidden="true" />
    </main>
  );
};

export default Hero;
