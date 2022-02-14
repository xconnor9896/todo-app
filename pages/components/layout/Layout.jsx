import React from 'react';
import HeadTag from './HeadTag';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <>
      <HeadTag />
      <Container text>
        {children}
      </Container>
    </>
  );
};

export default Layout;