"use client";
import { useState } from "react";
import styles from "../contacto/page.module.css";
import Image from "next/image";
import resistance from "../../../public/assets/img/svg/resistencia.svg";
import persistance from "../../../public/assets/img/svg/persistencia.svg";
import overcome from "../../../public/assets/img/svg/vencer.svg";

function ContactPage() {
  const [message, setMessage] = useState({ name: "", email: "", content: "" });
  function handleChange(event) {
    setMessage({ ...message, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!message) {
      return 
    }
    console.log(message);
    alert(`Gracias ${message.name}, su mensaje ha sido enviado correctamente!`);
  }

  const { name, email, content } = message;

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
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          autoComplete="off"
          required
          value={name}
          name="name"
          className={styles.nameContact}
          type="text"
          placeholder="Nombre*"
          onChange={handleChange}
        />
        <input
          required  
          value={email}
          name="email"
          className={styles.emailContact}
          type="email"
          placeholder="Email*"
          onChange={handleChange}
        />
        <textarea 
          autoComplete="off"
          required
          value={content}
          name="content"
          className={styles.messageContact}
          placeholder="Mensaje*"
          onChange={handleChange}
        ></textarea>
        <button className={styles.sendButton} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
