import React from 'react';
import styled from '@emotion/styled';
import heroSvg from '../../../images/main/hero.svg';
import {
  Button1,
  ButtonOutline,
  ButtonFilled,
} from '../../reuseablestyles/Buttons';

const Section = styled.div`
  height: 90vh;
  background-image: url(${heroSvg});
  background-repeat: no-repeat;
  background-position: right center;
  & h1 {
    color: ${(props) => props.theme.colors.black};
    font-size: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  height: 90vh;
  width: 80%;
  margin: 0 auto;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & .row {
    display: flex;
  }
`;

export const Section0 = () => {
  return (
    <Section>
      <Container>
        <h1>We Build Dreams</h1>
        <div className="row">
          <ButtonFilled style={{ marginRight: '4px' }}>
            Our Services
          </ButtonFilled>
          <ButtonOutline>Contact Us</ButtonOutline>
        </div>
      </Container>
    </Section>
  );
};
