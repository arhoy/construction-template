import React from 'react';
import styled from '@emotion/styled';
import { Blurb } from './Blurb';
import { ContactForm } from './ContactFormNetlify';
import { SectionTitle } from '../reuseablestyles/SectionTitle';

const Section = styled.div`
  display: grid;
  background: ${(props) => props.theme.colors.lightgrey};
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  .contact_form_container {
    width: 25rem;
    margin: 0 auto;
    padding: 2rem 1rem;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
    & h2 {
      font-size: 2rem;

      text-transform: uppercase;
      color: ${(props) => props.theme.colors.secondary};
      font-weight: bold;
    }
  }
`;

export const Contact = () => {
  return (
    <Section>
      <Blurb />
      <div className="contact_form_container">
        <h2> Get In Contact</h2>
        <ContactForm />
      </div>
    </Section>
  );
};
