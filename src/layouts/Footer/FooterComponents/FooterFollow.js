import React from 'react';
import styled from '@emotion/styled';

import { NoStyleLink } from '../../../components/reuseablestyles/Links';
import SocialIcons from '../../../constants/SocialIcons';

const Container = styled.div`
  margin-right: 2rem;
`;

const LinkContainers = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkHeaders = styled.h6`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
`;

const CustomLinks = styled(NoStyleLink)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIconContainer = styled.div``;

const SocialIcon = styled.a`
  color: inherit;
  font-size: 2rem;
  margin-right: 1rem;
  opacity: 0.6;
  transition: all 0.45s ease-in;
  &:hover {
    opacity: 1;
  }
`;

export const FooterFollow = () => {
  return (
    <Container>
      <LinkContainers>
        <LinkHeaders>Follow Us</LinkHeaders>
        <SocialIconContainer>
          {SocialIcons.map((icon) => (
            <SocialIcon
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </SocialIcon>
          ))}
        </SocialIconContainer>
        <div style={{ marginBottom: '1rem' }}>
          <LinkHeaders>Services</LinkHeaders>
          <CustomLinks to="/websites"> Websites</CustomLinks>
        </div>
      </LinkContainers>
    </Container>
  );
};
