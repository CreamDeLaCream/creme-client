import React from 'react';
import styled from 'styled-components';

// Compo

import { Keyword } from '../../common/components';
import { Button } from '../../common/components';
import { MyPetImages } from './MyPetImages';

export const MypetCard = () => {
  return (
    <MyPetWrapper>
      <MyPetInfoCard>
        <MyPetContentContainer>
          <MyPetContent>
            <p>MyPet</p>
            <MyPetName>
              <span style={{ color: 'var(--blackcream)' }}>레아</span>님의
              댕댕이
              <br /> <b style={{ color: 'var(--main)' }}>SUMMER, 6살</b>
            </MyPetName>
            <MyPetKeyword>
              <Keyword />
            </MyPetKeyword>
            <CurrentEmotion>
              오늘의 댕댕이 감정상태는?
              <Button
                width="70px"
                height="23px"
                bg="var(--cream)"
                color="var(--main)"
                radius="10px"
                margin="0 0 0 5px"
              >
                Test Go!
              </Button>
            </CurrentEmotion>
          </MyPetContent>
        </MyPetContentContainer>
        <MyPetImages />
      </MyPetInfoCard>
    </MyPetWrapper>
  );
};

const MyPetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--lightcream);
  border: solid 1px var(--cream);
  border-radius: 15px;
`;

const MyPetInfoCard = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
`;

const MyPetContentContainer = styled.div`
  width: 500px;

  // background-color: var(--cream);
  color: var(--main);

  p {
    margin-top: 15px;
    font-size: 20px;
    width: 440px;
  }
`;

const MyPetContent = styled.div`
  margin-left: 30px;
  width: 440px;
`;

const MyPetName = styled.div`
  font-size: 30px;
  color: var(--darkcream);
`;

const MyPetKeyword = styled.div`
  margin-top: 20px;
`;

const CurrentEmotion = styled.div`
  width: 440px;
  color: var(--main);
  margin-top: 20px;
  cusor: pointer;
`;
