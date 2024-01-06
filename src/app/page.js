"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import giggle from "../../public/assets/img/carousel/carousel-2.jpg";
import allonsy from "../../public/assets/img/carousel/carousel-1.webp";

const CarouselComponent = () => {
      return (
        <Carousel slideInterval={5000} showControls={true} indicators={true}>
          <Image
            src= {giggle}
            alt="The Giggle"
            height={400}
            width={910}
          />
          <Image
            src= {allonsy}
            alt="Allons-y!"
            height={400}
            width={910}
          />
        </Carousel>
      )
    }

 export default CarouselComponent;   

  