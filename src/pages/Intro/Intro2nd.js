import React from 'react';
import styled from 'styled-components';

import { Text } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import { Keywords } from '../../common/components/Keyword';
import { UserKeywords } from './UserKeywords';

export const Intro2nd = () => {
  return (
    <IntroBg>
      <MainDogImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/partner1.png`}
          width="300px"
        />
      </MainDogImg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="40px">
          반려인 <HighlightText color="var(--cream)">최서연</HighlightText>
          님, <br />
          그녀는{' '}
          <span style={{ color: 'var(--main)', fontSize: '40px' }}>
            왜
          </span>{' '}
          옥자와
          <br />
          멀어졌을까요?
        </Text>
        <br />
        <UserKeywords />

        {/* <p>
          나의 사랑하는 댕댕이가 어떤 감정을 느끼고 있는지 궁금하시죠?
          <br />
          creme de la creme은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </p> */}
      </TitleContent>
    </IntroBg>
  );
};

const IntroBg = styled.div`
  background-color: var(--lightcream);
  width: 100%;
  height: 700px;
  display: flex;
`;

const TitleContent = styled.div`
  width: 500px;
  height: 100%;
  margin-top: 100px;
  margin-right: 70px;
  text-align: right;

  p {
    // font-family: normal;
    color: var(--darkcream);
  }
`;

const MainDogImg = styled.div`
  width: 500px;
  height: 100%;
  // background-color: var(--cream);

  img {
    margin-top: 120px;
    margin-left: 70px;
  }
`;
