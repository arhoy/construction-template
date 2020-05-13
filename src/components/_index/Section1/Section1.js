import React from 'react';
import styled from '@emotion/styled';
import { Card } from './Card';
import lightbulb from '../../../images/main/lightbulb.svg';
import award from '../../../images/main/award.svg';
import arrow from '../../../images/main/arrow.svg';

const Section = styled.div`
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Section1 = () => {
  return (
    <Section>
      <Card
        title="Innovative"
        blurb="With cutting-edge technology, we deliver complex and creative designs and solutions"
        icon={lightbulb}
      />
      <Card
        title="Top Rated"
        blurb="Our team of engineers and builders have earned recognition for top quality work and reliability"
        icon={award}
        backgroundColor={`rgb(240,240,240)`}
      />
      <Card
        title="Low Cost"
        blurb="We strive to deliver high quality construction and remodelling services at reasonable costs"
        icon={arrow}
      />
    </Section>
  );
};
