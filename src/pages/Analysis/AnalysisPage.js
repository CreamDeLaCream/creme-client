import React from 'react';
import styled from 'styled-components';

// components
import {
  Header,
  Navbar,
  Text,
  Container,
  Button,
} from '../../common/components';
import { EmotionTest } from './EmotionTest';
import Loading from '../Analysis/Loading';

const AnalysisPage = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        <Loading />
      </Text>
      <TestContentWarpper>
        <TestSetion>
          <EmotionTest />
          <EmotionTest />
        </TestSetion>
        <ImageSetion>
          <img
            alt=""
            src={process.env.PUBLIC_URL + `/Image/dog1.gif`}
            width="400px"
            height="400px"
          />
        </ImageSetion>
      </TestContentWarpper>

      <ButtonWrapper>
        <Button
          // width="100%"
          // padding="0.5rem"
          // bg="var(--main)"
          // color="var(--white)"
          // radius="5px"
          // cursor
          width="80px"
          height="80px"
          bg="var(--cream)"
          radius="50%"
          size="20px"
          color="var(--white)"
          cursor
        >
          <Text type="button" color="white">
            댕댕이 <br /> 결과
          </Text>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const TestContentWarpper = styled.div`
  width: 100%;
  height: 440px;
  // background-color: var(--main);
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const TestSetion = styled.div`
  width: 60%;
  color: var(--darkcream);
  // background-color: var(--cream);
`;

const ImageSetion = styled.div`
  width: 320px;
  height: 320px;

  border-radius: 50%;
  overflow: hidden;
`;
export default AnalysisPage;
