import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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

import InputBox from '../../common/components/InputBox';

const AddUserLifePage = (props) => {
  const history = useHistory();
  const [inputData, setInputData] = useState({
    age: '',
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
          <InputBox
            data={inputData}
            onChangeData={onChangeData}
            files={files}
            onChangeFile={setFiles}
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
          onClick={() => {
            console.log('완료');
            history.push('/mypet');
          }}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const AddUserSection = styled.div`
  background-color: var(--lightcream);
  border: solid 1px var(--cream);
  border-radius: 15px;
  margin-top: 20px;

  height: 1000px;

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
