import React from 'react';
import styled from 'styled-components';

import { Text } from '../../common/components';

export const Intro1st = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    <MainTitleBg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="35px">
          나의 댕댕이는 과연 <br />
          <span style={{ color: 'var(--darkmain)', fontSize: '40px' }}>
            무슨 감정
          </span>
          을<br />
          느끼고 있을까요?
        </Text>
      </TitleContent>
      <MainDogImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/bgdog1.png`}
          width="400px"
          height="400px"
        />
      </MainDogImg>
    </MainTitleBg>
  );
};

const MainTitleBg = styled.div`
  background-color: var(--lightcream);
  width: 100%;
  height: 550px;
  position: relative;
  display: flex;
`;

const TitleContent = styled.div`
  width: 500px;
  height: 100%;
  margin-top: 100px;
  margin-left: 100px;
`;

const MainDogImg = styled.div`
  width: 500px;
  height: 100%;
  // background-color: var(--cream);

  img {
    margin-top: 150px;
    margin-left: 20px;
  }
`;
