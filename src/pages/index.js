import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';
import { Section0 } from '../components/_index/Section0/Section0';
import { Section1 } from '../components/_index/Section1/Section1';
import { Section2 } from '../components/_index/Section2/Section2';
import { Section3 } from '../components/_index/Section3/Section3';
import { Section4 } from '../components/_index/Section4/Section4';
import { Section5 } from '../components/_index/Section5/Section5';
import { Section6 } from '../components/_index/Section6/Section6';
import { Section7 } from '../components/_index/Section7/Section7';
import Helmet from 'react-helmet';
import { Contact } from '../components/contact/_Contact';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="My Emotion JS Barebones Starter Tempalte"
        description="This is a starter template that uses the barebones popular default starter with the addition of Emotion JS, Google Fonts, Google Analytics with an example SEO Hooks and starter Layout.js file"
      />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
