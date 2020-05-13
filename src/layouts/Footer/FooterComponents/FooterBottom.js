import React from 'react';
import styled from '@emotion/styled';

import { A } from '../../../components/reuseablestyles/Links';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  padding-top: 3rem;
  font-size: 1rem;
`;

const Attriubtion = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  font-size: 0.9rem;
  & .linkcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 50rem;
    padding: 0 1rem;
  }
  & h6 {
    font-size: 1.2rem;
    text-align: center;
    opacity: 0.6;
    font-weight: 400;
  }

  & ${A} {
    margin-right: 4px;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterBottom = () => {
  return (
    <Container>
      <Attriubtion>
        <h6>CREATED BY CODEPAPER.DEV</h6>
      </Attriubtion>
    </Container>
  );
};
