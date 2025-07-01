// Styles
import styles from "./styles.module.scss";

// Icon
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__main"]}>
        <div className={styles["footer__main__branding"]}>
          <img
            className={styles["footer__main__branding-logo"]}
            src={logo}
            alt="Econverse"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className={styles["footer__main__branding__icons"]}>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className={styles["footer__main__line"]}></div>

        <nav className={styles["footer__main__links"]}>
          <div className={styles["footer__main__links__col"]}>
            <h3>Institucional</h3>

            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Movimento</a>
              </li>
              <li>
                <a href="#">Trabalhe conosco</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__main__links__col"]}>
            <h3>Ajuda</h3>

            <ul>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__main__links__col"]}>
            <h3>Termos</h3>

            <ul>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles["footer__credits"]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
