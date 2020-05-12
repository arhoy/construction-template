import React from 'react';
import styled from '@emotion/styled';
import { ButtonFilled } from '../../reuseablestyles/Buttons';

const Section = styled.div`
  margin: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section6 = () => {
  return (
    <Section>
      <ButtonFilled to="/"> See More Projects</ButtonFilled>
    </Section>
  );
};
