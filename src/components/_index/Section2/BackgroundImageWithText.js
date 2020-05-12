import React from 'react';
import styled from '@emotion/styled';

import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 30rem;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 50rem;
  padding: 2rem;
  & p {
    color: white;
  }
  & .lead {
    font-size: 1.3rem;
    & p {
      width: max-content;
    }
  }

  & .secondary {
    margin: 0 1rem;
    & p {
      border-left: 1rem solid ${(props) => props.theme.colors.primary};
      line-height: 2rem;
      padding-left: 1rem;
    }
  }
`;

export const BackgroundImageWithText = ({ fluid, mainText, secondaryText }) => {
  return (
    <ImageBackground fadeIn="soft" fluid={fluid}>
      <Container>
        <div className="lead">
          <p>
            Industry Leading, Full <br /> Service construction <br /> Company
          </p>
        </div>

        <div className="secondary">
          <p>
            With over 20 years of experience, our team of highly qualified
            construction experts provide professional innovative and sustainable
            services. We are fully dedicated to building dreams.
          </p>
        </div>
      </Container>
    </ImageBackground>
  );
};
