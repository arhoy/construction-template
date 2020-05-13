import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logosvg from '../../images/main/logo.svg';
import { Burger } from './Burger';
import { MobileMenu } from './MobileMenu';

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
  @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
    display: none;
  }
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
  z-index: 100;
  margin: 0 0.5rem;
  & img {
    width: 30rem;
    height: auto;
    @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
      width: 15rem;
    }
  }
`;

const BurgerIconContainer = styled.div`
  z-index: 100;
  cursor: pointer;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${(props) => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

export const NavLinks = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Service</NavLink>
    <NavLink to="/">Our Projects</NavLink>
    <NavLink to="/">About</NavLink>
    <NavLink to="/">Contact Us</NavLink>
  </>
);

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <Container>
        <Logo>
          <img src={logosvg} />
        </Logo>
        <Links>
          <NavLinks />
        </Links>
        <BurgerIconContainer onClick={mobileMenuHandler}>
          <Burger open={mobileMenuOpen.toString()} />
        </BurgerIconContainer>
      </Container>
      {mobileMenuOpen && (
        <MobileMenu>
          <NavLinks />
        </MobileMenu>
      )}
    </>
  );
};
