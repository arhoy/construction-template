import React from 'react';
import styled from '@emotion/styled';
import { Reviews } from './Reviews';

const Section = styled.div`
  margin: 4rem 0;
  padding: 4rem 1rem;
  background: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0;
`;

export const Section7 = () => {
  return (
    <Section>
      <Reviews />
    </Section>
  );
};
