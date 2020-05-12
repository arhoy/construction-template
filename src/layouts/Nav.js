import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logosvg from '../images/main/logo.svg';

const Container = styled.div`
  background: ${(props) => props.theme.colors.lightgrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  text-transform: uppercase;
  margin: 0 0.5rem;
  & img {
    width: 30rem;
    height: auto;
  }
`;

export const Nav = () => {
  return (
    <Container>
      <Logo>
        <img src={logosvg} />
      </Logo>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Service</NavLink>
        <NavLink to="/">Our Projects</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact Us</NavLink>
      </Links>
    </Container>
  );
};
