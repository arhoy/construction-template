import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  & h2 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
  }
`;

export const SectionTitle = ({ title, subtitle, color }) => {
  console.log('color is ', color);
  return (
    <Container>
      <h2 style={{ color }}>{title}</h2>
      {subtitle && <h4>{subtitle}</h4>}
    </Container>
  );
};
