import React from 'react';
import styled from 'styled-components';

import { Text } from '../../common/components';

export const Intro2nd = () => {
  return (
    <IntroBg>
      <MainDogImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/bgdog2.png`}
          width="300px"
          height="300px"
        />
      </MainDogImg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="40px">
          나의 댕댕이는 과연 <br />
          <span style={{ color: 'var(--main)', fontSize: '40px' }}>
            무슨 감정
          </span>
          을<br />
          느끼고 있을까요?
        </Text>
        <p>
          나의 사랑하는 댕댕이가 어떤 감정을 느끼고 있는지 궁금하시죠?
          <br />
          creme de la creme은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </p>
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
  margin-top: 150px;
  margin-left: 30px;

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
