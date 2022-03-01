import React, { useState } from 'react';
import styled from 'styled-components';

// components
import {
  Container,
  Header,
  Navbar,
  Text,
  Button,
} from '../../common/components';
import { Keywords } from '../../common/components/Keyword';
import { MyPetData } from './MyPetData';
import InputBox from './InputBox';

const AddPetPage = (props) => {
  const { history } = props;
  const [myPetData, setMyPetData] = useState(MyPetData);
  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        마이펫 추가하기
      </Text>

      <AddPetSection>
        <InfoWrapper>
          <p>MyPet</p>
          <InputBox />
        </InfoWrapper>
        <KeywordsSection>
          <p>Keywords</p>
          <KeywordWrapper>
            {myPetData.map((myPetDataSelect, i) => {
              return <Keywords typekeywords={myPetDataSelect} />;
            })}
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
          _onClick={() => {
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

const AddPetSection = styled.div`
  background-color: var(--lightcream);
  border: solid 1px var(--cream);
  border-radius: 15px;
  margin-top: 20px;

  height: 550px;

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
