import React from 'react';
import styled from '@emotion/styled';
import { ButtonFilled } from '../../reuseablestyles/Buttons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  justify-content: center;
  align-items: center;
  & img {
    width: 10rem;
    height: 10rem;
    background: #f8f8f8;
    margin-bottom: 1rem;
  }
  & h3 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  & p {
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: center;
    margin-bottom: 1rem;
    height: 5rem;
  }
`;

export const Card = ({ icon, title, blurb, ...props }) => {
  return (
    <Container>
      <img src={icon} />
      <h3>{title}</h3>
      <p>{blurb}</p>
      <ButtonFilled to={props.buttonLink}> {props.buttonText}</ButtonFilled>
    </Container>
  );
};
