// Styles
import styles from "./styles.module.scss";

// Icons
import logo from "../../assets/icons/logo.svg";
import shieldCheck from "../../assets/icons/shieldCheck.svg";
import truck from "../../assets/icons/truck.svg";
import creditCard from "../../assets/icons/creditCard.svg";

const Header = () => {
  const benefitsBar = [
    {
      text: (
        <p>
          Compra <span>100% segura</span>
        </p>
      ),
      icon: shieldCheck,
      alt: "Ícone de segurança",
    },
    {
      text: (
        <p>
          <span>Frete grátis</span> acima de R$ 200
        </p>
      ),
      icon: truck,
      alt: "Ícone de caminhão de entrega",
    },
    {
      text: (
        <p>
          <span>Parcele</span> suas compras
        </p>
      ),
      icon: creditCard,
      alt: "Ícone de cartão de crédito",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.benefitsBar}>
        {benefitsBar.map((benefitItem, i) => (
          <div key={i} className={styles.benefitsItem}>
            <img src={benefitItem.icon} alt={benefitItem.alt} />
            <>{benefitItem.text}</>
          </div>
        ))}
      </div>

      <div className={styles.line}></div>

      <div className="">
        <img src={logo} alt="Econverse" />
        <input type="text" />
      </div>

      <div className={styles.line}></div>
    </header>
  );
};

export default Header;
