// Styles
import YellowBtn from "../YellowBtn";
import styles from "./styles.module.scss";

const PartnerCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles["card__text"]}>
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>

        <YellowBtn
          paddingX={26}
          paddingY={12}
          text="CONFIRA"
          weight={700}
        />
      </div>

      <div className={styles["card__gradient"]}></div>
    </div>
  );
};

export default PartnerCard;
