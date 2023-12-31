import styles from "../doctores/page.module.css";
import DoctorCard from "../components/DoctorCard/DoctorCard";

function DoctorList() {
  return (
    <section className={styles.doctorContainer}>
      <h1 className={styles.doctorTitle}>Doctores</h1>
    <DoctorCard />
    </section>
  );
}

export default DoctorList;
