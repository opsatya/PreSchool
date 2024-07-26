import React from 'react';
import styled from 'styled-components';
import playgroundImage from './ClassesPictures/cimg1.webp';
import lkgImage from './ClassesPictures/cimg2.webp';
import ukgImage from './ClassesPictures/cimg3.webp';
import firstImage from './ClassesPictures/cimg4.webp';
import Testimonials from "./components/Testimonials";

const ClassesWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Stacks cards vertically
  }
`;

const ClassCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ClassImage = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 8px;
  margin-bottom: 15px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100px;  // Smaller images on mobile
  }
`;

const ClassName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ClassDescription = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin: 40px 0;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const Classes = () => {
  return (
    <ClassesWrapper>
      <Header>Our Classes</Header>
      <ClassesGrid>
        <ClassCard>
          <ClassImage src={playgroundImage} alt="Playground" />
          <ClassName>Playground</ClassName>
          <ClassDescription>Introduction to social interaction, basic routines, and play-based learning for toddlers, fostering early social and cognitive skills.</ClassDescription>
        </ClassCard>
        <ClassCard>
          <ClassImage src={firstImage} alt="1st Grade" />
          <ClassName>Nursery</ClassName>
          <ClassDescription>Building foundational skills through play, structured activities, and exploration, focusing on language, numbers, and basic concepts.</ClassDescription>
        </ClassCard>
        <ClassCard>
          <ClassImage src={lkgImage} alt="LKG" />
          <ClassName>LKG</ClassName>
          <ClassDescription>Developing literacy, numeracy, and social skills through structured activities, preparing children for formal education.</ClassDescription>
        </ClassCard>
        <ClassCard>
          <ClassImage src={ukgImage} alt="UKG" />
          <ClassName>UKG</ClassName>
          <ClassDescription>Advancing skills in reading, writing, mathematics, and social interaction, laying the groundwork for primary schooling.</ClassDescription>
        </ClassCard>
      </ClassesGrid>
      <DownloadButton href="./fee-strcture.pdf" download>
        Download Fee Structure
      </DownloadButton>
      <Testimonials />
    </ClassesWrapper>
  );
};

export default Classes;
