// Styles
import styles from "./styles.module.scss";

interface YellowBtnProps {
  paddingX: number;
  paddingY: number;
  text: string;
  weight: number;
  fontSize: number;
}

const YellowBtn = ({
  paddingX,
  paddingY,
  text,
  weight,
  fontSize,
}: YellowBtnProps) => {
  return (
    <a
      href="#"
      className={styles.btn}
      style={{
        padding: `${paddingY}px ${paddingX}px`,
        fontWeight: weight,
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </a>
  );
};

export default YellowBtn;
