import React from 'react';
import styled from '@emotion/styled';
import { ButtonWhite } from '../../reuseablestyles/Buttons';

const Container = styled.div`
  margin: 4rem 0;
  padding: 3rem 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  & p {
    color: ${(props) => props.theme.colors.primaryDark};
    margin: 1rem;
    font-size: 1.4rem;
    max-width: 25rem;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

export const Section4 = () => {
  return (
    <Container>
      <p>Get A Quote Today and Let Us Help you Build Your Future</p>
      <ButtonWhite to="/"> Get A Quote</ButtonWhite>
    </Container>
  );
};
