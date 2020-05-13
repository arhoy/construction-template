import React from 'react';

import styled from '@emotion/styled';
import { MdPermPhoneMsg } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { A, NoStyleLink } from '../../components/reuseablestyles/Links';

const Container = styled.div`
  padding: 1rem;

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: linear-gradient(
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.primaryLight}
  );
  z-index: 99;

  color: ${(props) => props.theme.colors.white};
`;

const MenuLinks = styled.ul`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-align: center;

  margin-bottom: 2rem;
`;

const Blurb = styled.div`
  & .light {
    text-align: center;
    font-weight: 300;
    opacity: 0.8;
    margin: 2rem 0;
    font-style: italic;
  }
  & address {
    font-style: normal;
    text-align: center;
  }
  & ${A} {
    font-style: normal;
    text-align: center;
    color: inherit;
  }
  & .address,
  .phone {
    display: flex;
    max-width: 30rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

const PhoneIcon = styled(MdPermPhoneMsg)`
  color: 'white';
  font-size: 2rem;
  margin-right: 10px;
`;

const AddressIcon = styled(FaMapMarkerAlt)`
  color: 'white';
  font-size: 1rem;
  margin-right: 10px;
`;

export const MobileMenu = ({ children }) => {
  return (
    <Container>
      <MenuLinks>{children}</MenuLinks>
      <Blurb>
        <p className="light"> Blazingly Fast Cusom Websites</p>
        <p className="light">We've managed millions in ad spend</p>
        <div className="address">
          <AddressIcon /> <address> Edmonton AB, CANADA </address>
        </div>

        <div className="phone">
          <PhoneIcon /> <A href="tel:587-501-7726">587 501 7726</A>
        </div>
      </Blurb>
    </Container>
  );
};
