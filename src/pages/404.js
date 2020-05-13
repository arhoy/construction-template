import React from 'react';
import styled from '@emotion/styled';
import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';

const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
  & h1,
  & p {
    text-align: center;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
