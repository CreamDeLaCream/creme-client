import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

//redux
import { history } from '../../common/redux/configureStore';
import { useSelector } from 'react-redux';

// components
import {
  Container,
  Header,
  Navbar,
  Text,
  Button,
  AnimatedKeyword,
  InputBoxBirth,
} from '../../common/components';
import { MyPetKeywordsData } from '../../common/components/MyPetKeywordsData';
import MyPetData from './MyPetData';
import api from '../../common/utils/API';

const AddPetPage = (props) => {
  const [myPetData, setMyPetData] = useState(MyPetData);
  const [inputData, setInputData] = useState({
    year: '',
    month: '',
    day: '',
    name: '',
  });
  const location = useLocation();
  const redirectedForEdit = location.state?.redirectedForEdit;

  const user = useSelector((state) => state.user);
  const dog_id = location.state?.dogId; // 후에 리덕스에서 받아와야함

  const onChangeData = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const addPet = () => {
    const token = sessionStorage.getItem('token');
    const header = {
      'Content-Type': 'multipart/form-data', // 영광님 오면 바꿔야함
    };
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }

    const data = new FormData();
    data.append('name', inputData.name);
    data.append(
      'birth',
      `${inputData.year}-${
        inputData.month.length === 1 ? `0${inputData.month}` : inputData.month
      }-${inputData.day.length === 1 ? `0${inputData.day}` : inputData.day}`,
    );
    data.append('image', files[0]);
    data.append(
      'dog_keyword',
      clickedKeywords.filter((keyword) => keyword !== '빈공'),
    );
    data.append('user', user.user.user_id);
    if (redirectedForEdit) {
      api
        .put(`/dogs/${dog_id}`, data, { headers: header })
        .then((res) => {})
        .finally(() => {
          history.push('/mypet');
        });
    } else {
      api
        .post('/dogs/', data, { headers: header })
        .then((res) => {})
        .finally(() => {
          history.push('/mypet');
        });
    }
  };

  const [files, setFiles] = useState([]);
  const [clickedKeywords, setClickedKeywords] = useState([]);

  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        {redirectedForEdit ? '마이펫 변경하기' : '마이펫 추가하기'}
      </Text>

      <AddPetSection>
        <InfoWrapper>
          <p>MyPet</p>
          {/* <InputBox
            data={inputData}
            files={files}
            onChangeData={onChangeData}
            onChangeFile={setFiles}
          /> */}
          <InputBoxBirth
            data={inputData}
            files={files}
            onChangeData={onChangeData}
            onChangeFile={setFiles}
          />
        </InfoWrapper>
        <KeywordsSection>
          <p>Keywords</p>
          <KeywordWrapper>
            <AnimatedKeyword
              keywordsData={MyPetKeywordsData}
              questionTitle="나의 댕댕이의 성격은?"
              clickedKeywords={clickedKeywords}
              onChangeClickedKeywords={setClickedKeywords}
            />
          </KeywordWrapper>
        </KeywordsSection>
      </AddPetSection>

      <ButtonWrapper>
        <Button
          width="80px"
          height="80px"
          bg="var(--main)"
          radius="50%"
          size="20px"
          color="var(--white)"
          cursor
          onClick={addPet}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const AddPetSection = styled.div`
  background-color: var(--bggray);
  border: solid 1px var(--cream);
  border-radius: 15px;
  margin-top: 20px;

  height: 100%;
  padding-bottom: 50px;

  p {
    font-size: 20px;
    color: var(--main);
    margin-top: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 90%;
  margin-left: 40px;
`;

const KeywordsSection = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: 40px;
`;

const KeywordWrapper = styled.div`
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default AddPetPage;
