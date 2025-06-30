// Styles
import styles from "./styles.module.scss";

// Icons
import logo from "../../assets/icons/logo.svg";
import shieldCheck from "../../assets/icons/shieldCheck.svg";
import truck from "../../assets/icons/truck.svg";
import creditCard from "../../assets/icons/creditCard.svg";
import magnifyingGlass from "../../assets/icons/magnifyingGlass.svg";
import box from "../../assets/icons/box.svg";
import heart from "../../assets/icons/heart.svg";
import userCircle from "../../assets/icons/userCircle.svg";
import shoppingCart from "../../assets/icons/shoppingCart.svg";
import crownSimple from "../../assets/icons/crownSimple.svg";

const Header = () => {
  const benefitsBar = [
    {
      text: (
        <p>
          Compra{" "}
          <span className={styles["header__benefit-item-highlight"]}>
            100% segura
          </span>
        </p>
      ),
      icon: shieldCheck,
      alt: "Ícone de segurança",
    },
    {
      text: (
        <p>
          <span className={styles["header__benefit-item-highlight"]}>
            Frete grátis
          </span>{" "}
          acima de R$ 200
        </p>
      ),
      icon: truck,
      alt: "Ícone de caminhão de entrega",
    },
    {
      text: (
        <p>
          <span className={styles["header__benefit-item-highlight"]}>
            Parcele
          </span>{" "}
          suas compras
        </p>
      ),
      icon: creditCard,
      alt: "Ícone de cartão de crédito",
    },
  ];

  const filters = [
    "Todas Categorias",
    "Supermercado",
    "Livros",
    "Moda",
    "Lançamentos",
    "Ofertas do dia",
    {
      text: "Assinatura",
      icon: crownSimple,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles["header__benefits-bar"]}>
        {benefitsBar.map((benefitItem, i) => (
          <div key={i} className={styles["header__benefit-item"]}>
            <img src={benefitItem.icon} alt={benefitItem.alt} />
            <>{benefitItem.text}</>
          </div>
        ))}
      </div>

      <div className={styles["header__divisor"]}></div>

      <div className={styles["header__navbar"]}>
        <a href="#" className={styles["header__navbar-logo"]}>
          <img src={logo} alt="Econverse" />
        </a>

        <div className={styles["header__navbar-search"]}>
          <input
            type="text"
            placeholder="O que você está buscando?"
            className={styles["header__navbar-search-input"]}
          />
          <img
            src={magnifyingGlass}
            alt=""
            className={styles["header__navbar-search-icon"]}
          />
        </div>

        <nav className={styles["header__navbar-nav"]}>
          <ul className={styles["header__navbar-nav-icons"]}>
            {[box, heart, userCircle, shoppingCart].map((icon, i) => (
              <a key={i} href="#">
                <li>
                  <img src={icon} alt="" />
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles["header__divisor"]}></div>

      <div className={styles["header__filters"]}>
        {filters.map((filter, i) => (
          <a key={i} href="#" className={styles["header__filters-link"]}>
            {typeof filter === "string" ? (
              filter
            ) : (
              <span>
                <img src={filter.icon} alt="" /> {filter.text}
              </span>
            )}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
