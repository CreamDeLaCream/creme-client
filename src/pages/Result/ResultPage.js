import React from 'react';
import styled from 'styled-components';

// components
import { Text, Grid, Header, Navbar, Container } from '../../common/components';

const ResultPage = (props) => {
  // const { history } = props;
  return (
    <Container>
      <Header />
      <Navbar />
      <Grid margin="1rem auto">
        <Text type="MainTitle" color="main">
          반려견 감정 상태 결과
        </Text>
      </Grid>
      <ResultBox></ResultBox>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          당신이 생각하는 OO의 감정 일치도는?
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          현재 OO의 감정 상태
        </Text>
        <Grid>
          <Text type="logo_2" color="main">
            일치
          </Text>
        </Grid>
        <Grid>
          <Text type="body_1" color="black">
            반려인이 생각한 OO의 감정상태
          </Text>
          <EmotionBox>HAPPY</EmotionBox>
        </Grid>

        <Grid>
          <Text type="body_1" color="black">
            실제 OO의 감정상태
          </Text>
          <EmotionBox>HAPPY</EmotionBox>
        </Grid>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          OO의 솔루션
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          OO이에게 필요한 것
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          오늘의 감정일기(메모)
        </Text>
        <textarea style={{ width: '100%', height: '20rem' }} />
      </Grid>
    </Container>
  );
};

const ResultBox = styled.div`
  width: 100%;
  height: 30rem;
  border: 2px solid var(--lightgray);
`;

const EmotionBox = styled.div`
  width: 15rem;
  padding: 0.8rem;
  text-align: center;
  background-color: var(--main);
  color: var(--white);
  font-weight: 600;
  border: 1px solid var(--main);
`;

export default ResultPage;
