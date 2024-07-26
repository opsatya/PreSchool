import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { Pagination, Navigation } from 'swiper/modules';

import reviewer1 from './TestimonialsPictures/img1.jpeg';
import reviewer2 from './TestimonialsPictures/img2.jpeg';
import reviewer3 from './TestimonialsPictures/img3.jpeg';

const TestimonialsWrapper = styled.div`
  padding: 30px 0;
  background-color: #f7f7f7;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
  }

  .testimonial {
    padding: 40px;
    margin: 0 10px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;

    .reviewer-photo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
    }

    .testimonial-content {
      font-size: 1.2em;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .testimonial-author {
      font-size: 1.1em;
      font-weight: bold;
    }

    .rating {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .star {
        color: #FFD700;
        margin-right: 5px;
        font-size: 1.5em;
      }
    }

    @media (max-width: 768px) {
      padding: 10px;
      
      .reviewer-photo {
        width: 60px;
        height: 60px;
      }

      .testimonial-content {
        font-size: 1em;
      }

      .testimonial-author {
        font-size: 0.9em;
      }

      .rating .star {
        font-size: 0.6rem;
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <h2>What Parents Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer1} alt="Parent A" className="reviewer-photo" />
            <p className="testimonial-content">"Nice infrastructure and good faculty."</p>
            <p className="testimonial-author">Srushti Kodag</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer2} alt="Parent B" className="reviewer-photo" />
            <p className="testimonial-content">"Very good staff. The environment is also very good."</p>
            <p className="testimonial-author">Priyanka Sakpal</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Good staff, good place, good teaching."</p>
            <p className="testimonial-author">Sudhir Gawade</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Great school, great team of teachers."</p>
            <p className="testimonial-author">Dr. Satish Sonkamble</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Outstanding kids school"</p>
            <p className="testimonial-author">Siddhi Burde</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Classrooms are interactive. Having a playground is an add-on. Fee structure is moderate."</p>
            <p className="testimonial-author">Amar Shivajirao Deshmukh</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"The infrastructure is really good. Facility is really appreciable."</p>
            <p className="testimonial-author">THE_ EVIL_ DANCER</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Really impressive teaching facilities."</p>
            <p className="testimonial-author">Shreya Borate</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={reviewer3} alt="Parent C" className="reviewer-photo" />
            <p className="testimonial-content">"Highly recommend this school to other parents."</p>
            <p className="testimonial-author">Dishita Bhagtani</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
