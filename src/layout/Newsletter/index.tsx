// Styles
import styles from "./styles.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles["newsletter__text"]}>
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <form className={styles["newsletter__form"]}>
        <div className={styles["newsletter__form_main"]}>
          <input
            className={styles["newsletter__form_main_input-text"]}
            type="text"
            placeholder="Digite seu nome"
            required
          />
          <input
            className={styles["newsletter__form_main_input-text"]}
            type="email"
            placeholder="Digite seu email"
            required
          />

          <button>Inscrever</button>
        </div>

        <div className={styles["newsletter__form-terms"]}>
          <input id="terms" type="checkbox" required />
          <label htmlFor="terms">Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
