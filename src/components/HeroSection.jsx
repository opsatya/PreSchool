import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./CarouselPicture/img1.jpeg";
import img2 from "./CarouselPicture/img2.jpeg";
import img3 from "./CarouselPicture/img3.jpeg";
import img4 from "./CarouselPicture/img4.jpeg";
import img5 from "./CarouselPicture/img5.jpeg";

const HeroSection = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img style={{height:'86vh',width:'86vw'}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'86vh',width:'86vw'}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'86vh',width:'86vw'}}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'86vh',width:'86vw'}}
            className="d-block w-100"
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'86vh',width:'86vw'}}
            className="d-block w-100"
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;