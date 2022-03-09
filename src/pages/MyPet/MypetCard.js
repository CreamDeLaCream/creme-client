import React, { useState } from 'react';
import styled from 'styled-components';

// components
import { Keyword } from '../../common/components';
import { Button, Grid } from '../../common/components';
import { MyPetImages } from './MyPetImages';
import PetListButton from './PetListButton';

import { BsCalendarCheck } from 'react-icons/bs';
import { Modal } from '../../common/components';
import DogDataSet from './DogDataSet';

//props는 {} 사용 X
export const MypetCard = ({
  myPetData,
  cardNum,
  onClickAnotherCard,
  history,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <MyPetWrapper>
      {modalOpen && (
        <Modal width="40rem" height="35rem" setOpenModal={setModalOpen}>
          <Grid display="flex" justifyContent="center">
            <DogDataSet />
          </Grid>
        </Modal>
      )}
      <PetListButton
        cardNum={cardNum}
        onClickAnotherCard={onClickAnotherCard}
      />
      {myPetData ? (
        <MyPetInfoCard>
          <MyPetContentContainer>
            <MyPetContent>
              <p>MyPet</p>
              <MyPetName>
                <span style={{ color: 'var(--blackcream)' }}>레아</span>님의
                댕댕이
                <br />{' '}
                <b
                  style={{
                    color: 'var(--main)',
                    fontFamily: 'IBM Plex Sans KR',
                  }}
                >
                  {myPetData.name}, {myPetData.age}살
                </b>
              </MyPetName>
              <MyPetKeyword>
                <Keyword keywordList={myPetData.character} />
              </MyPetKeyword>
              <CurrentEmotion>
                오늘의 댕댕이 감정상태는?
                {myPetData.emotionState === null ? (
                  <>
                    <Button
                      height="23px"
                      color="var(--main)"
                      bg="var(--white)"
                      // bg="rgba(245, 234, 214, 0.46)"
                      border="solid 1px var(--cream)"
                      radius="10px"
                      margin="0 15px 0 5px"
                      onClick={() => {
                        console.log('넘어감');
                        history.push('/main');
                      }}
                    >
                      Test Go!
                    </Button>
                    이번주 댕댕이의 감정 상태는?{' '}
                    <div
                      onClick={() => {
                        setModalOpen(true);
                      }}
                      style={{ margin: '1px 0 0 7px' }}
                    >
                      <Button
                        bg="var(--white)"
                        // bg="rgba(245, 234, 214, 0.46)"
                        border="solid 1px var(--cream)"
                        radius="10px"
                      >
                        <BsCalendarCheck color="var(--main)" size="1rem" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      height="23px"
                      bg="rgba(245, 234, 214, 0.46)"
                      color="var(--main)"
                      border="solid 1px var(--cream)"
                      radius="10px"
                      margin="0 0 0 5px"
                    >
                      {myPetData.emotionState}
                    </Button>
                    <p>이번주 댕댕이의 감정 상태는?</p>
                    <BsCalendarCheck color="var(--main)" size="10px" />
                  </>
                )}
              </CurrentEmotion>
            </MyPetContent>
          </MyPetContentContainer>
          <MyPetImages imgUrl={myPetData.imgUrl} />
        </MyPetInfoCard>
      ) : (
        <MyPetInfoCard>
          <MyPetContentContainer>
            <MyPetContent>
              <p>MyPet</p>
              <MyPetName>
                <span style={{ color: 'var(--darkcream)' }}>
                  댕댕이를 추가해주세요
                </span>
              </MyPetName>
              <Button
                height="23px"
                bg="var(--white)"
                // bg="rgba(245, 234, 214, 0.46)"
                color="var(--main)"
                border="solid 1px var(--cream)"
                radius="10px"
                margin="10px 0 0 0"
                onClick={() => {
                  console.log('넘어감');
                  history.push('/addpet');
                }}
              >
                마이펫 추가하기
              </Button>
            </MyPetContent>
          </MyPetContentContainer>
        </MyPetInfoCard>
      )}
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
  padding-left: 20px;
  ${({ theme }) => theme.device.mobile} {
    position: relative;
  }
`;

const MyPetContentContainer = styled.div`
  flex: 1;
  color: var(--main);
  p {
    margin-top: 15px;
    font-size: 20px;
    max-width: 440px;
  }
`;

const MyPetContent = styled.div`
  margin-left: 30px;
  width: 440px;
`;

const MyPetName = styled.div`
  font-size: 30px;
  color: var(--darkcream);
  font-family: 'IBM Plex Sans KR';
`;

const MyPetKeyword = styled.div`
  margin-top: 20px;
  ${({ theme }) => theme.device.mobile} {
    width: 350px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CurrentEmotion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 470px;
  color: var(--darkcream);
  margin-top: 20px;
  cusor: pointer;
  // font-family: 'IBM Plex Sans KR';
`;
