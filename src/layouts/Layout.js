import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Nav } from './Navigation/Nav';
import { Footer } from './Footer/Footer';

const theme = {
  colors: {
    primary: '#F7BC16',
    primaryDark: '#C6940A',
    primaryLight: '#F9DC06',

    secondary: '#444444',
    secondaryLight: '#858383',

    lightgrey: '#F8F8F8',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#fff',
    whiteTrans9: 'rgba(255,255,255,0.9)',
    black: '#1a1a1a',
    blackTransparent: 'rgba(41, 43, 46, 0.4)',
    blackTransparent2: 'rgba(41, 43, 46, 0.7)',
    grey: `#7D8589`,
    darkgrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    redDark: '#D10000',
    lightRed: 'rgb(232, 180, 182)',
  },
  screenSize: {
    mobileVS: '300px',
    fourTwentyFive: '425px',
    fourFifty: '450px',
    mobileL: '600px',

    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
    oneThousandAndFifty: '1050px',
    twelveHundred: '1200px',
    twoThousand: '2000px',
  },
};

const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const NavContainer = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: full-start/full-end;
`;

const FooterContainer = styled.footer`
  grid-column: full-start/full-end;
`;

const Layout = ({ children }) => {
  const white = '#fff';

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;

            margin: 0;
          }

          body,
          html {
            position: relative;
            background: ${white};
            max-width: 100%;
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            font-family: Poppins, Helvetica, Arial, sans-serif;
          }
        `}
      />

      <ThemeProvider theme={theme}>
        <Container>
          <NavContainer>
            <Nav />
          </NavContainer>

          <Main>{children}</Main>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};
Layout.propTypes = {
  full: PropTypes.bool,
};
Layout.defaultProps = {
  full: true,
};

export default Layout;
