import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from '../../reuseablestyles/SectionTitle';
import { Card } from './Card';

const Section = styled.div`
  margin: 4rem 0;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Section5 = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "main/project_img1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "main/project_img2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "main/project_img3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section>
      <SectionTitle title="Our Projects" />
      <Container>
        <Card
          fluid={data.image1.childImageSharp.fluid}
          title="VEGAHILL CONDOS"
        />
        <Card
          fluid={data.image2.childImageSharp.fluid}
          title="ALG ENTERPRISE"
        />
        <Card
          fluid={data.image3.childImageSharp.fluid}
          title="THE BLUEBELGROUP"
        />
      </Container>
    </Section>
  );
};
