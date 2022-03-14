import React from 'react';
import styled from 'styled-components';

// components
import { Text, Grid } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';

const TodayMyPet = [
  '강아지 감정 분석',
  '솔루션 제공',
  '감정 기록 관리',
  '파트너 라이프 스타일 등록',
  '기간별 감정 데이터 관리',
];

const Intro3rd = () => {
  return (
    <IntroBg>
      <IntroTitle>
        <Text center color="var(--deepcream)" fontSize="40px">
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
          return <Circle>{serviceInfo}</Circle>;
        })}
      </IntroContent>
      <Grid is_flex_center foldHidden>
        <img alt="" src={process.env.PUBLIC_URL + `/Image/partner2.png`} />
      </Grid>
    </IntroBg>
  );
};

const IntroBg = styled.div`
  background-color: var(--bgpink);
  display: flex;
  flex-direction: column;

  img {
    margin-top: 0.8rem;
    margin-left: 45%;
    width: 50%;
    ${({ theme }) => theme.device.mobile} {
      width: 70%;
      margin: 0 auto;
    }
    ${({ theme }) => theme.device.fold} {
      width: 80%;
      display: none;
      visibility: hidden;
    }
  }
`;

const IntroTitle = styled.div`
  width: 60%;
  display: flex;
  padding: 3.8rem 0 0 3rem;

  ${({ theme }) => theme.device.mobile} {
    padding: 3.8rem 0 0 0;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

const IntroContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2.5rem 0 5rem 0;

  ${({ theme }) => theme.device.fold} {
    flex-flow: column wrap;
    padding: 2.5rem 0 2.5rem 0;
  }
`;

const Circle = styled.div`
  --size: 9rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  border: dashed 2px;
  color: var(--main);
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  ${({ theme }) => theme.device.mobile} {
    --size: 7rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
  }

  ${({ theme }) => theme.device.fold} {
    width: 100%;
    height: 3rem;
    background-color: var(--white);
    margin-bottom: 1rem;
  }
`;

export default Intro3rd;
