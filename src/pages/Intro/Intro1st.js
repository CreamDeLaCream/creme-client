import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';

// components
import { Text, Button } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import Deck from './Deck/Deck';

export const Intro1st = (props) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    <MainTitleBg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="40px">
          <HighlightText color="var(--lightcream)">옥자</HighlightText>,
          {/* 옥자, */}
          <br /> <span style={{ color: 'var(--main)' }}>
            그러는 이유
          </span>가 <br />
          있을거 아니야..?
        </Text>
        <p style={{ fontFamily: 'IBM Plex Sans KR', color: 'var(--main)' }}>
          나의 댕댕이가 오늘은 어떤 감정을 <br /> 느끼고 있는지 궁금하시죠?
          <br />
          혹시, 가까웠던 댕댕이와의 관계가 소홀해지셨나요?
          <br />
          오늘의 마이펫은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </p>
        <Button
          width="4rem"
          height="4rem"
          bg="var(--main)"
          radius="50%"
          size="20px"
          color="var(--lightcream)"
          margin="20px 0 0 0"
          onClick={() => {
            history.push('/main');
          }}
          cursor
        >
          start
        </Button>
      </TitleContent>
      <MainDogImg>
        {/* <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/bgdog1.png`}
          width="400px"
          height="400px"
        /> */}
        <Deck />
      </MainDogImg>
    </MainTitleBg>
  );
};

const MainTitleBg = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 550px;
  display: flex;
  padding-bottom: 50px;
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContent = styled.div`
  flex: 1;
  margin-top: 50px;
  margin-left: 50px;
  ${({ theme }) => theme.device.mobile} {
    text-align: center;
    margin-left: 0px;
  }
`;

const MainDogImg = styled.div`
  flex: 1;
  margin-left: 200px;
  margin-top: 50px;
  // img {
  //   margin-top: 150px;
  //   margin-left: 20px;
  //   ${({ theme }) => theme.device.mobile} {
  //     margin: 0px;
  //   }
  }
`;
