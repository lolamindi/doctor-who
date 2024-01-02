import styles from "../contacto/page.module.css";
import Image from "next/image";
import resistance from "../../../public/assets/img/svg/resistencia.svg";
import persistance from "../../../public/assets/img/svg/persistencia.svg";
import overcome from "../../../public/assets/img/svg/vencer.svg";

function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <article className={styles.symbolSection}>
        <h1 className={styles.sendMessageText}>Envia tu mensaje al Doctor</h1>
        <Image
          className={styles.blueSymbol}
          src={persistance}
          width={180}
          height={180}
          alt="persistencia symbol"
        />
        <Image
          className={styles.orangeSymbol}
          src={resistance}
          width={350}
          height={350}
          alt="resistencia symbol"
        />
        <Image
          className={styles.whiteSymbol}
          src={overcome}
          width={230}
          height={230}
          alt="vencer symbol"
        />
      </article>
      <form action="" className={styles.contactForm}>
        <input
          label
          for="name"
          className={styles.nameContact}
          type="text"
          placeholder="Nombre*"
        />
        <input
          label
          for="email"
          className={styles.emailContact}
          type="email"
          placeholder="Email*"
        />
        <textarea
          label
          for="message"
          className={styles.messageContact}
          placeholder="Mensaje*"
        ></textarea>
        <button className={styles.sendButton} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
