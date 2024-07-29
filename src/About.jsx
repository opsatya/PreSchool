import React from 'react';
import styled from 'styled-components';
import Testimonials from "./components/Testimonials";
import teacher1 from './TeacherPictures/timg1.webp';  
import teacher2 from './TeacherPictures/timg2.webp';
import teacher3 from './TeacherPictures/timg3.webp';
import workImage from './TeacherPictures/work-image.webp'; // Add your image path here

// Styled components
const AboutWrapper = styled.div`
  background-color: #f9f9f9;
  color: #333;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SubHeader = styled.h3`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #444;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  height:400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  max-width: 400px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const MissionFacilitiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px 0;
  height:200px;
`;

const MissionFacilitiesItem = styled.div`
  flex: 1;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 50%;
  height: 200px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamMember = styled.div`
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TeamImage = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TeamName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Header>About Us</Header>

      <SubHeader>Welcome to London Kids Preschool</SubHeader>
      <FlexContainer>
        <TextContent>
          <SectionTitle>Learn About Our Work and Cultural Activities</SectionTitle>
          <Paragraph>
            London Kids Preschool aspires to democratize international education, merging UK curriculum with Indian standards. Their vision extends from rural to urban India, aligning with national missions. With 800+ centers and a focus on affordability, they emphasize tech-integrated, practical learning. Expansion plans aim for 2000+ franchise centers nationwide, leading towards global outreach.
            <br/><br/>
            1. Homelike Environment<br/>
            2. Quality Educators<br/>
            3. Safety and Security<br/>
            4. Play to Learn
          </Paragraph>
        </TextContent>
        <ImageContent>
          <img src={workImage} alt="Work and Cultural Activities" />
        </ImageContent>
      </FlexContainer>

      <MissionFacilitiesContainer>
        <MissionFacilitiesItem>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            At Our Preschool, we are committed to providing a nurturing and stimulating environment where children can grow and learn. Our mission is to foster a love for learning, creativity, and exploration in every child, preparing them for a bright and successful future.
          </Paragraph>
        </MissionFacilitiesItem>
        <MissionFacilitiesItem>
          <SectionTitle>Our Facilities</SectionTitle>
          <Paragraph>
            Our preschool is equipped with state-of-the-art facilities, including spacious classrooms, a safe outdoor play area, and a dedicated arts and crafts room. We believe that a well-rounded environment is essential for the holistic development of children.
          </Paragraph>
        </MissionFacilitiesItem>
      </MissionFacilitiesContainer>

      <Section>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamGrid>
          <TeamMember>
            <TeamImage src={teacher1} alt="Teacher 1" />
            <TeamName>Mr. Satya</TeamName>
            <TeamRole>Lead Teacher</TeamRole>
          </TeamMember>
          <TeamMember>
            <TeamImage src={teacher2} alt="Teacher 2" />
            <TeamName>Ms. Aisha</TeamName>
            <TeamRole>Assistant Teacher</TeamRole>
          </TeamMember>
          <TeamMember>
            <TeamImage src={teacher3} alt="Teacher 3" />
            <TeamName>Mr. Kumar</TeamName>
            <TeamRole>Art Instructor</TeamRole>
          </TeamMember>
          <TeamMember>
            <TeamImage src={teacher3} alt="Teacher 3" />
            <TeamName>Mr. Kumar</TeamName>
            <TeamRole>Art Instructor</TeamRole>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Testimonials/>
    </AboutWrapper>
  );
};

export default About;
