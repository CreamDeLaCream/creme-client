import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

// components
import MyPetData from '../../common/components/MyPetData';
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
import { FilterRecord } from './FilterRecord';
import { FilterMyPet } from './FilterMyPet';

// icons
import { FaAngleDown } from 'react-icons/fa';

import api from '../../common/utils/API';

const MyPetPage = (props) => {
  // const isLogin = useSelector((state) => state.user.is_login);
  const [myPetData, setMyPetData] = useState(null);
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    const header = {
      Authorization: `Bearer ${token}`,
    };
    api.get('/dogs/', { headers: header }).then((res) => {
      setMyPetData(res.data);
    });
  }, [token]);

  const [cardNum, setCardNum] = useState(0);
  const onClickAnotherCard = (num) => {
    if (cardNum !== num) {
      setCardNum(num);
    }
  };

  // useEffect(() => {
  //   .get('/mypetdata').then((res) => {
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

  const [petImage, setPetImage] = useState(AnalysisData); // dummy
  const [petRecords, setPetRecords] = useState(null);
  const [pageMaxNum, setPageMaxNum] = useState(10);
  useEffect(() => {
    const emotionObj = {
      angry: 1,
      fear: 2,
      happy: 3,
      sad: 4,
    };
    const header = {
      Authorization: `Bearer ${token}`,
    };
    if (clickedMyPet === 'all') {
      if (clickedEmotion.length === 4) {
        api.get(`/analysis/history`, { headers: header }).then((res) => {
          setPetRecords([]);
          setPetRecords((prevState) => {
            return res.data;
          });
        });
      }
      // else {
      //   clickedEmotion.forEach((emotion) => {
      //     api.get(`/analysis/history/emotion/${emotionObj[emotion]}`, { headers: header }).then((res) => {
      //       setPetRecords([]);
      //       setPetRecords((prevState) => {
      //         return [...prevState, res.data];
      //       });
      //     });
      //   })
      // }
    }
    // } else {
    //   if(clickedEmotion.length === 4){
    //     api.get(`/analysis/history/${myPetData[cardNum].id}`, { headers: header }).then((res) => {
    //       setPetRecords([]);
    //       setPetRecords((prevState) => {
    //         return res.data;
    //       });
    //     });
    //   } else {
    //     clickedEmotion.forEach((emotion) => {
    //       api.get(`/analysis/history/${myPetData[cardNum].id}/${emotionObj[emotion]}`, { headers: header }).then((res) => {
    //         setPetRecords([]);
    //         setPetRecords((prevState) => {
    //           return [...prevState, res.data];
    //         });
    //       });
    //     })
    //   }
    // }
  }, [
    cardNum,
    clickedEmotion,
    clickedEmotion.length,
    clickedMyPet,
    myPetData,
    token,
  ]);

  // TODO: 10개씩 보이도록 바꾸기
  const concatImage = () => {
    setPageMaxNum(pageMaxNum + 10);
  };

  // if (myPetData === null) {
  //   return <></>;
  // }

  return (
    <Container height="200vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        마이펫 / 파트너
      </Text>

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
            petRecords={petRecords}
            pageMaxNum={pageMaxNum}
            clickedMyPet={clickedMyPet.toLowerCase()}
            clickedEmotion={clickedEmotion}
          />
        </RecordCardWrapper>
        <ButtonWrapper>
          <Button
            width="4rem"
            height="4rem"
            bg="var(--main)"
            margin="0 0 4rem 0"
            radius="50%"
            color="var(--white)"
            cursor
            onClick={concatImage}
          >
            <FaAngleDown size="2rem" />
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

export const myPetEmotion = ['angry', 'fear', 'happy', 'sad'];

export default MyPetPage;
