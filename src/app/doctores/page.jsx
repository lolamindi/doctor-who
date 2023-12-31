import styles from "../doctores/page.module.css";
import { doctors } from "../../../public/assets/doctors.json";
import Image from "next/image";
import Button from "../components/Button/Button";

function DoctorList() {
  return (
    <section className={styles.doctorContainer}>
      <h1 className={styles.doctorTitle}>Doctores</h1>
      <ul className={styles.doctorGrid}>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {/* <DoctorCard doctor={doctor} /> */}
            <article className={styles.DoctorCard}>
              <Image
                className={styles.doctorImage}
                src={doctor.image}
                width={210}
                height={300}
                alt={`${doctor.doctor}`}
              />
              <h3 className={styles.doctorOrdinalNumber}>{doctor.doctor}</h3>
              <h3 className={styles.actorName}>{doctor.actor}</h3>
              <time className={styles.screenTime}>{doctor.screen_time}</time>
              <br />
              <Button />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DoctorList;
