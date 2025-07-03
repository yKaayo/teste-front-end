// Styles
import styles from "./styles.module.scss";

interface YellowBtnProps {
  width?: string;
  paddingX?: number;
  paddingY?: number;
  text: string;
  weight?: number;
  fontSize?: number;
}

const YellowBtn = ({
  width,
  paddingX,
  paddingY,
  text,
  weight = 400,
  fontSize = 16,
}: YellowBtnProps) => {
  return (
    <a
      href="#"
      className={styles.btn}
      style={{
        width: width,
        padding: `${typeof paddingY === "number" ? `${paddingY}px` : ""} ${
          typeof paddingX === "number" ? `${paddingX}px` : ""
        }`,
        fontWeight: weight,
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </a>
  );
};

export default YellowBtn;
