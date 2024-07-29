import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import img1 from "./CarouselPicture/image1.jpeg";
import img2 from "./CarouselPicture/image2.jpeg";
import img3 from "./CarouselPicture/image3.jpeg";
import img4 from "./CarouselPicture/image4.jpeg";
import img5 from "./CarouselPicture/image5.jpeg";

const StyledCarouselImg = styled.img`
  width: 100%;
  height: 650px; // Maintain aspect ratio

  @media (max-width: 768px) {
    height: 40vh; // Adjust as needed for mobile
  }
`;

const HeroSection = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <StyledCarouselImg
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StyledCarouselImg
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StyledCarouselImg
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StyledCarouselImg
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StyledCarouselImg
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
