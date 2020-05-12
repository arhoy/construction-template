import React from 'react';

import styled from '@emotion/styled';
import { SectionTitle } from '../../reuseablestyles/SectionTitle';
import { Card } from './Card';

import icon4 from '../../../images/main/service_icons/architecture_icon-07.svg';
import icon1 from '../../../images/main/service_icons/commercial_icon-04.svg';
import icon3 from '../../../images/main/service_icons/renovation_icon-06.svg';
import icon2 from '../../../images/main/service_icons/residential_icon-05.svg';
import { ButtonFilled } from '../../reuseablestyles/Buttons';

const Section = styled.div`
  margin: 4rem 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section3 = () => {
  return (
    <Section>
      <SectionTitle title="Our Services" />
      <Container>
        <Card
          title="Commercial"
          blurb="Our years of commercial construction experience demonstrate our unique approach to building modern, safe structures"
          icon={icon1}
          buttonText="Learn More"
          buttonLink="/"
        />
        <Card
          title="Residential"
          blurb="We work with our clients to assure that we execute their vision, laying down strong foundation and ultimately building their dream homes"
          icon={icon2}
          buttonText="Learn More"
          buttonLink="/"
        />
        <Card
          title="Renovation"
          blurb="We make this transformation seamless for our clients, covering their needs while providing incomparable renovation"
          icon={icon3}
          buttonText="Learn More"
          buttonLink="/"
        />
        <Card
          title="Architecture"
          blurb="Our combined team of engineers, designers and builders, help clients achieve their design goals with versatile solutions"
          icon={icon4}
          buttonText="Learn More"
          buttonLink="/"
        />
      </Container>
    </Section>
  );
};
