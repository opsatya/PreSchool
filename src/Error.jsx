// src/Error.jsx
import React from "react";
import styled from "styled-components";
import { Button } from "./Styles/Button.jsx";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="/images/error.jpg" alt="Error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 100%;
    height: 400px;
    margin-bottom: 2rem;
  }

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
