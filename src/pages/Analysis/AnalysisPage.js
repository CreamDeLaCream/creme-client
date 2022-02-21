import React from 'react';

// components
import { Header, Navbar, Container } from '../../common/components';
import TestItems from './TestItems';

const AnalysisPage = () => {
  return (
    <Container>
      <Header />
      <Navbar />

      <TestItems />
    </Container>
  );
};

export default AnalysisPage;
