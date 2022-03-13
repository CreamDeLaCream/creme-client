import React, { useState } from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';

// components
import {
  Container,
  Header,
  Navbar,
  Text,
  Button,
} from '../../common/components';
import { AnimatedKeyword } from '../../common/components/AnimatedKeyword';
import { UserKeywordsData } from '../../common/components/UserKeywordsData';

import api from '../../common/utils/API';
import { useSelector } from 'react-redux';
import InputBoxBirth from '../AddPet/InputBoxBirth';

const AddUserLifePage = (props) => {
  const [inputData, setInputData] = useState({
    year: '',
    month: '',
    day: '',
    name: '',
  });

  const onChangeData = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const [files, setFiles] = useState([]);
  const [clickedKeywords, setClickedKeywords] = useState([]);

  const user = useSelector((state) => state.user);

  const addUserLife = () => {
    const token = sessionStorage.getItem('token');
    const header = {
      'Content-Type': 'application/json',
    };
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }

    const body = {
      username: inputData.name,
      birth: `${inputData.year}-${
        inputData.month.length === 1 ? `0${inputData.month}` : inputData.month
      }-${inputData.day.length === 1 ? `0${inputData.day}` : inputData.day}`,
      image: files[0],
      user_keyword: clickedKeywords.filter((keyword) => keyword !== '빈공'),
    };

    api
      .put(`/users/${user.user.user_id}`, body, { headers: header })
      .then((res) => {
        console.log('put userLife', res);
      })
      .finally(() => {
        history.push('/mypet');
      });
  };

  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        유저 라이프스타일 등록하기
      </Text>
      <AddUserSection>
        <InfoWrapper>
          <p>Partner</p>
          <InputBoxBirth
            data={inputData}
            onChangeData={onChangeData}
            files={files}
            onChangeFile={setFiles}
            isPerson
          />
        </InfoWrapper>

        <KeywordsSection>
          <p>Keywords</p>
          <KeywordWrapper>
            <AnimatedKeyword
              keywordsData={UserKeywordsData}
              questionTitle="나의 라이프스타일은?"
              clickedKeywords={clickedKeywords}
              onChangeClickedKeywords={setClickedKeywords}
            />
          </KeywordWrapper>
        </KeywordsSection>
      </AddUserSection>

      <ButtonWrapper>
        <Button
          width="80px"
          height="80px"
          bg="var(--main)"
          radius="50%"
          size="20px"
          color="var(--white)"
          cursor
          onClick={addUserLife}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const AddUserSection = styled.div`
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

export default AddUserLifePage;
