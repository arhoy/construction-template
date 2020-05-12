import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Container = styled.div`
  margin: 2rem;
  & .imageContainer {
    width: 16rem;
    height: 13rem;
  }
  & .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
  & h4 {
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Card = ({ fluid, title }) => {
  return (
    <Container>
      <div className="imageContainer">
        <StyledImage fluid={fluid} />
      </div>
      <div className="titleContainer">
        <h4>{title}</h4>
      </div>
    </Container>
  );
};
