import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// Data
import MyPetData from '../../common/components/MyPetData';

// components
import {
  Header,
  Navbar,
  Text,
  Container,
  Button,
} from '../../common/components';

import Record from './Record';

import { MypetCard } from './MypetCard';
import AnalysisData from './AnalysisData';
import { UserCard } from './UserCard';
import { useEffect } from 'react';
import { FilterRecord } from './FilterRecord';
import { FilterMyPet } from './FilterMyPet';

const MyPetPage = (props) => {
  const history = useHistory();
  const [petImage, setPetImage] = useState(AnalysisData);

  const concatImage = () => {
    const temp = petImage.concat(AnalysisData);
    setPetImage(temp);
    // axios.get('api/mypet/${number}').then((res) => {
    //   const temp = card.concat(res.data.mypetImage);
    //   setCard(temp);
    // })
  };
  //axios 연결 하면 null 담아주기
  let [myPetData, setMyPetData] = useState(MyPetData[0]);
  const [cardNum, setCardNum] = useState(0);
  const onClickAnotherCard = (num) => {
    if (cardNum !== num) {
      setCardNum(num);
      setMyPetData(MyPetData[num]);
    }
  };

  // useEffect(() => {
  //   axios.get('/mypetdata').then((res) => {
  //     setMyPetData(res);
  //   });
  // }, []);

  // if (myPetData === null) {
  //  retrun <> // 컴포넌트 넣기
  // };
  const [clickedEmotion, setClickedEmotion] = useState(myPetEmotion);
  const onClickEmotion = (emotion) => {
    if (clickedEmotion.indexOf(emotion) !== -1) {
      const newArr = clickedEmotion.filter((ele) => ele !== emotion);
      setClickedEmotion(newArr);
    } else {
      const newArr = clickedEmotion.concat(emotion);
      setClickedEmotion(newArr);
    }
  };

  const [clickedMyPet, setClickedMyPet] = useState('all');
  const onClickMyPet = (e) => {
    setClickedMyPet(e);
  };

  return (
    <Container height="200vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        마이펫 / 파트너
      </Text>
      {/* <Text type="mainTitle" color="var(--blackcream)">
        나의 사랑스러운 댕댕이를
        <br />
        추가하고 감정기록들을 관리하세요.
      </Text> */}
      <MypetPartnerWrapper>
        <MypetCard
          myPetData={myPetData}
          cardNum={cardNum}
          onClickAnotherCard={onClickAnotherCard}
          history={history}
        />
        <UserCard history={history} />
      </MypetPartnerWrapper>

      <RecordWrapper>
        <RecordMenu>
          <RecordTitle>마이펫 감정 기록</RecordTitle>
          <RecordMenuEmotion>
            <FilterMyPet
              clickedMyPet={clickedMyPet}
              onClickMyPet={onClickMyPet}
            />
            <FilterRecord
              clickedEmotion={clickedEmotion}
              onClickEmotion={onClickEmotion}
            />
          </RecordMenuEmotion>
        </RecordMenu>
        <RecordCardWrapper>
          <Record
            petImages={petImage}
            clickedMyPet={clickedMyPet.toLowerCase()}
            clickedEmotion={clickedEmotion}
          />
        </RecordCardWrapper>
        <ButtonWrapper>
          <Button
            width="80px"
            height="80px"
            bg="var(--main)"
            radius="50%"
            size="20px"
            color="var(--white)"
            cursor
            onClick={concatImage}
          >
            더보기
          </Button>
        </ButtonWrapper>
      </RecordWrapper>
    </Container>
  );
};

const MypetPartnerWrapper = styled.div`
  margin-top: 20px;
`;

const RecordWrapper = styled.div`
  margin-top: 50px;
  height: 70px;
`;

const RecordTitle = styled.div`
  width: 200px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--main);
  margin-top: 30px;
`;

const RecordMenu = styled.div`
  display: flex;
  height: 60px;
  background-color: var(—cream);
`;

const RecordMenuEmotion = styled.div`
  display: flex;
  width: 80%;
  // background-color: red;
`;

const RecordCardWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: start;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const myPetEmotion = ['happy', 'sad', 'scared', 'angry'];

export default MyPetPage;
