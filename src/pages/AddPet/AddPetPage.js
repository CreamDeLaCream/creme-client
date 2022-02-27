import React from 'react';

// components
import { Container, Header, Navbar } from '../../common/components';
import InputBox from './InputBox';

const AddPetPage = (props) => {
  return (
    <Container>
      <Header />
      <Navbar />
      <InputBox />
    </Container>
  );
};

export default AddPetPage;
