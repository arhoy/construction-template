import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  & .wrapper {
    transform: translateX(-1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  & .content {
    width: 12rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & .icon {
  }
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  & h4 {
    font-size: 1.5rem;
  }
  & p {
    opacity: 0.9;
    font-size: 0.9rem;
  }
  & img {
    width: 9rem;
    height: 12rem;
  }
`;

export const Card = ({ title, blurb, icon, backgroundColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <div className="wrapper">
        <div className="icon">
          <img src={icon} />
        </div>
        <div className="content">
          <h4>{title}</h4>
          <p> {blurb} </p>
        </div>
      </div>
    </Container>
  );
};
