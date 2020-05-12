import React from 'react';
import styled from '@emotion/styled';

import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

const Container = styled.div`
  display: flex;

  flex-direction: column;
  padding: 2rem;
  background: ${(props) => props.theme.colors.primaryDark};
  justify-content: center;
  align-items: center;

  & .wrapper {
    max-width: 25rem;
    & p {
      margin: 1rem 0;
    }
  }
  & .socialContainer {
    & > * {
      margin-right: 1rem;
    }
  }
`;

export const Blurb = () => {
  return (
    <Container>
      <div className="wrapper">
        <h3>
          We strive to deliver top quality construction services of all
          complexities
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no
        </p>
        <div className="socialContainer">
          <GrFacebookOption />
          <GrLinkedinOption />
          <GrTwitter />
        </div>
      </div>
    </Container>
  );
};
