import React from 'react';

// components
import { Header, Navbar, Text, Container } from '../../common/components';
import { EmotionTest } from './EmotionTest';
import Loading from '../Analysis/Loading';

const AnalysisPage = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        <Loading />
        <EmotionTest />
      </Text>
    </Container>
  );
};

export default AnalysisPage;
