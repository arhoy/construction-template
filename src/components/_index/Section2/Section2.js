import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { BackgroundImageWithText } from './BackgroundImageWithText';

const Section = styled.div``;

export const Section2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "main/photomain2.jpg" }) {
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
      <BackgroundImageWithText fluid={data.image.childImageSharp.fluid} />
    </Section>
  );
};
