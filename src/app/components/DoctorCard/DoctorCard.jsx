import Image from "next/image";
import Button from "../Button/Button";
import styles from "../DoctorCard/DoctorCard.module.css";

function DoctorCard({ doctor }) {
  return (
    <article className={styles.DoctorInfo}>
      <Image
        className={styles.doctorImage}
        src={doctor.image}
        width={210}
        height={280}
        alt={`${doctor.doctor}`} 
      />
      <h3 className={styles.doctorOrdinalNumber}>{doctor.doctor}</h3>
      <h3 className={styles.actorName}>{doctor.actor}</h3>
      <time className={styles.screenTime}>{doctor.screen_time}</time>
      <br />
      <Button additionalStyles={styles.specialButton}></Button>
    </article>
  );
}

export default DoctorCard;
