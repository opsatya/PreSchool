import React from "react";
import styled from 'styled-components';

import img1 from './GalleryPicture/img1.jpeg';
import img2 from './GalleryPicture/img2.jpeg';
import img3 from './GalleryPicture/img3.jpeg';
import img4 from './GalleryPicture/img4.jpeg';
import img5 from './GalleryPicture/img5.jpg';
import img6 from './GalleryPicture/img6.jpg';
import img7 from './GalleryPicture/img7.jpg';
import img8 from './GalleryPicture/img8.jpg';
import img9 from './GalleryPicture/img9.jpg';
import img10 from './GalleryPicture/img10.jpg';
import img11 from './GalleryPicture/img11.jpg';
import img12 from './GalleryPicture/img12.jpeg';
import img13 from './GalleryPicture/img13.jpg';
import img14 from './GalleryPicture/img14.jpg';
import img15 from './GalleryPicture/img15.jpg';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  padding: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <GalleryWrapper>
        <GalleryItem>
          <img src={img1} alt="Gallery Item 1" />
        </GalleryItem>
        <GalleryItem>
          <img src={img2} alt="Gallery Item 2" />
        </GalleryItem>
        <GalleryItem>
          <img src={img3} alt="Gallery Item 3" />
        </GalleryItem>
        <GalleryItem>
          <img src={img4} alt="Gallery Item 4" />
        </GalleryItem>
        <GalleryItem>
          <img src={img5} alt="Gallery Item 5" />
        </GalleryItem>
        <GalleryItem>
          <img src={img6} alt="Gallery Item 6" />
        </GalleryItem>
        <GalleryItem>
          <img src={img7} alt="Gallery Item 7" />
        </GalleryItem>
        <GalleryItem>
          <img src={img8} alt="Gallery Item 8" />
        </GalleryItem>
        <GalleryItem>
          <img src={img9} alt="Gallery Item 9" />
        </GalleryItem>
        <GalleryItem>
          <img src={img10} alt="Gallery Item 10" />
        </GalleryItem>
        <GalleryItem>
          <img src={img11} alt="Gallery Item 11" />
        </GalleryItem>
        <GalleryItem>
          <img src={img12} alt="Gallery Item 12" />
        </GalleryItem>
        <GalleryItem>
          <img src={img13} alt="Gallery Item 13" />
        </GalleryItem>
        <GalleryItem>
          <img src={img14} alt="Gallery Item 14" />
        </GalleryItem>
        <GalleryItem>
          <img src={img15} alt="Gallery Item 15" />
        </GalleryItem>
      </GalleryWrapper>
    </div>
  );
};

export default Gallery;
