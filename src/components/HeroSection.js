import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {

    const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet dkoos thafe jjj. ndikkeeelld atye dskdes atyyle style fhx
              suudfnm huors hlos aolosfga adjref ifjmk surejnn stuifnj studns nuids jions uifublas yoysx
              yusiwe! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>Shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="images/hero.jpg" alt="hero-section-photo" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-two-column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hero-section-data {
    max-width: 50%;
  }

  .hero-section-image {
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data p {
    margin: 2rem 0;
  }

  .hero-section-data h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }

  figure {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      flex-direction: column;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
