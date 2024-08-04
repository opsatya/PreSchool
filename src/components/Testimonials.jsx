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
  padding: 50px 20px;
  background-color: #f7f7f7;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .swiper {
    padding: 20px 0;
  }

  .swiper-pagination-bullet {
    background: #333;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
  }
`;

const TestimonialCard = styled.div`
  padding: 30px;
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
    object-fit: cover;
  }

  .testimonial-content {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .testimonial-author {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .rating {
    display: flex;
    align-items: center;

    .star {
      color: #FFD700;
      margin-right: 5px;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    .reviewer-photo {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }

    .testimonial-content {
      font-size: 1rem;
      line-height: 1.4;
    }

    .testimonial-author {
      font-size: 0.9rem;
    }

    .rating .star {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 15px;

    .reviewer-photo {
      width: 50px;
      height: 50px;
    }

    .testimonial-content {
      font-size: 0.9rem;
    }

    .testimonial-author {
      font-size: 0.8rem;
    }

    .rating .star {
      font-size: 1rem;
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <h2>What Parents Say</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"Nice infrastructure and good faculty."</p>
            <p className="testimonial-author">Srushti Kodag</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"Very good staff."</p>
            <p className="testimonial-author">Priyanka Sakpal</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
            
            <p className="testimonial-content">"Good staff, good place, good teaching."</p>
            <p className="testimonial-author">Sudhir Gawade</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"Great school, great team of teachers."</p>
            <p className="testimonial-author">Dr. Satish Sonkamble</p>
            <div className="rating">
              <span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span><span className="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
          
            <p className="testimonial-content">"Outstanding kids school"</p>
            <p className="testimonial-author">Siddhi Burde</p>
            <div className="rating">
              <span className="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"Classrooms are interactive."</p>
            <p className="testimonial-author">Amar Shivajirao Deshmukh</p>
            <div className="rating">
              <span className="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"The infrastructure is really good."</p>
            <p className="testimonial-author">THE_ EVIL_ DANCER</p>
            <div className="rating">
              <span className="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
           
            <p className="testimonial-content">"Really impressive teaching facilities."</p>
            <p className="testimonial-author">Shreya Borate</p>
            <div className="rating">
              <span className="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard>
            <p className="testimonial-content">"Highly recommend this school to other parents."</p>
            <p className="testimonial-author">Dishita Bhagtani</p>
            <div className="rating">
              <span className="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span><span class="star">⭐</span>
            </div>
          </TestimonialCard>
        </SwiperSlide>
      </Swiper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
