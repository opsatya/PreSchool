import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Testimonials from "./components/Testimonials";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .heading {
    margin-top: 1px;
    text-align: center;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0 2rem 0;

    .container {
      margin-top: 3rem;
    }

    .contact-form {
      max-width: 30rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 0 1rem 0;

    .container {
      margin-top: 2rem;
    }

    .contact-form {
      max-width: 20rem;
    }
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneInput = form.current.phone;
    const phoneNumber = phoneInput.value.trim();
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      phoneInput.focus(); // Set focus back to the phone input field
      return;
    }

    emailjs
      .sendForm('service_cou4i4p', 'template_1ju0wbx', form.current, 'osl1TT08K18rBdPDp')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('-Email successfully sent!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <Wrapper>
      <h2 className="heading">Contact Us</h2>
      <div className="container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} method="POST" className="contact-inputs">
            <input
              type="text"
              name="name"
              placeholder="Please Enter Your Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Please Enter Your Number"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4179093884313!2d73.92333767496905!3d18.60026366673553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c78337e430cf%3A0xd353d286707f950f!2sLondon%20Kids%20Preschool%20Lohegaon!5e0!3m2!1sen!2sin!4v1721803018737!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Testimonials />
    </Wrapper>
  );
};

export default Contact;