// Styles
import styles from "./styles.module.scss";

interface YellowBtnProps {
  paddingX: number;
  paddingY: number;
  text: string;
  weight: number;
}

const YellowBtn = ({ paddingX, paddingY, text, weight }: YellowBtnProps) => {
  return (
    <a
      href="#"
      className={styles.btn}
      style={{ padding: `${paddingY}px ${paddingX}px`, fontWeight: weight }}
    >
      {text}
    </a>
  );
};

export default YellowBtn;
