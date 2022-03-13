import React from 'react';
import styled from 'styled-components';

// components
import { Text, Button } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';

export const Intro3rd = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  const TodayMyPet = [
    '강아지 감정 분석',
    '솔루션 제공',
    '감정 기록 관리',
    '파트너 라이프 스타일 등록',
    '기간별 감정 데이터 관리',
  ];

  return (
    <IntroBg>
      <IntroTitle>
        <Text color="var(--deepcream)" fontSize="40px">
          <HighlightText color="var(--lightcream)">반려견</HighlightText>
          과&nbsp;
          <HighlightText color="var(--lightcream)">반려인</HighlightText>
          에게&nbsp;
          <br />
          <span style={{ color: 'var(--main)' }}>오늘의 마이펫</span>이 필요한
          이유
        </Text>
      </IntroTitle>
      <IntroContent>
        {TodayMyPet.map((serviceInfo, index) => {
          return (
            <Button
              width="9rem"
              height="9rem"
              bg="var(--white)"
              radius="50%"
              size="1.3rem"
              color="var(--main)"
              border="dashed 2px "
              margin="20px 0 0 0"
            >
              {serviceInfo}
            </Button>
          );
        })}
      </IntroContent>
      <img alt="" src={process.env.PUBLIC_URL + `/Image/partner2.png`} />
    </IntroBg>
  );
};

const IntroBg = styled.div`
  background-color: var(--bgpink);
  /* width: 100%; */
  height: 700px;
  display: flex;
  flex-direction: column;
  img {
    margin-top: 0.8rem;
    margin-left: 45%;
    width: 50%;
    ${({ theme }) => theme.device.mobile} {
      /* margin-left: 13%; */
      width: 70%;
      margin: 0 auto;
    }
    ${({ theme }) => theme.device.fold} {
      /* margin-left: 13%; */

      width: 80%;
      display: flex;
      justify-content: center;
      visibility: hidden;
    }
  }
  /* ${({ theme }) => theme.device.fold} {
    display: flex;
    justify-content: center;
  } */
`;

const IntroTitle = styled.div`
  width: 50%;
  display: flex;
  margin-left: 3rem;
  margin-top: 3.8rem;
`;

const IntroContent = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  margin-left: 3rem;
  margin-top: 2.5rem;
  justify-content: space-between;
`;
