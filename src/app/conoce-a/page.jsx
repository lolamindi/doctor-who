import Button from "../components/Button/Button";
import styles from "../conoce-a/page.module.css";
import Image from "next/image";
import photo from "../../../public/assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg";
import resistance from "../../../public/assets/img/svg/resistencia.svg";
import persistance from "../../../public/assets/img/svg/persistencia-2.svg";

function MeetTheDoctor() {
  return (
    <section className={styles.meetTheDoctorPage}>
    <article className={styles.doctorInfo}>
      <h1 className={styles.meetDoctorNumber}>Conoce a ... decimotercera doctor</h1>
      <Image
        className={styles.doctorPhotoMobile}
        src={photo}
        width={250}
        height={350}
        alt="Decimotercera Doctor Who"
      />
      <p className={styles.doctorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in officia deserunt mollit anim id est laborum.</p>
      <Button additionalStyles={styles.specialButton}></Button>
      <div className={styles.background}>
      <Image
        className={styles.purpleSymbol}
        src={persistance}
        width={320}
        height={320}
        alt="persistencia symbol"
      />
      <Image
        className={styles.orangeSymbol}
        src={resistance}
        width={480}
        height={480}
        alt="resistencia symbol"
      />
      </div>
      </article>
      <section className={styles.doctorImage}>
      <Image
        className={styles.doctorPhotoDesktop}
        src={photo}
        width={330}
        height={500}
        alt="Decimotercera Doctor Who"
      />
      </section>
      </section>
  );
}

export default MeetTheDoctor;