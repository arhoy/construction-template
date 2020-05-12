import React from 'react';
import styled from '@emotion/styled';
import icon from '../../../images/main/testimonial_icon-11.svg';

const Container = styled.div`
  position: relative;
  z-index: 1;

  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  max-width: 25rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  & .imageContainer {
    position: absolute;
    top: -4rem;
    z-index: 3;
  }
  & img {
    width: 100%;
    height: auto;
  }
  & h4 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  & p {
    text-align: center;
  }
`;

export const Review = ({ name, blurb }) => {
  return (
    <Container>
      <div className="imageContainer">
        <img src={icon} />
      </div>

      <h4>{name}</h4>
      <p> {blurb} </p>
    </Container>
  );
};
