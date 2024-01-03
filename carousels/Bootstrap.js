import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP}>
          <img src={item.imageUrl} alt="Doctor Who carousel" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}