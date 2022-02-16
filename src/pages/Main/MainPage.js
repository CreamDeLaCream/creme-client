import React from 'react';
import styled from 'styled-components';

// components
import Container from './Container';
import { Text, Grid, Button } from '../../common/components';

const MainPage = () => {
  return (
    <Container>
      <Grid margin="2rem">
        <Text type="head_1" color="main">
          반려견 감정 상태
        </Text>
      </Grid>

      <Grid margin="2rem">
        <Text type="head_2" color="main">
          반려견과 반려인의 첫 걸음,
          <br /> 지금 당신의 반려견 감정 상태를 분석해보세요.
        </Text>
      </Grid>

      <Grid margin="2rem">
        <InputWrapper>
          <Text type="head_2" color="main">
            이름
          </Text>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Text type="head_2" color="main">
            나이
          </Text>
          <Input />
        </InputWrapper>

        <PhotoBtnWrapper>
          <Text type="head_2" color="main">
            감정
          </Text>
          <Button
            width="15rem"
            padding="0.6rem"
            border="2px solid var(--main)"
            bg="var(--lightorange)"
            radius="5px"
            cursor
          >
            사진찍기
          </Button>
          <Button
            width="15rem"
            padding="0.6rem"
            border="2px solid var(--main)"
            bg="var(--lightorange)"
            radius="5px"
            cursor
          >
            사진업로드
          </Button>
        </PhotoBtnWrapper>
      </Grid>

      <Grid margin="2rem">
        <ButtonWrapper>
          <Button
            width="7rem"
            padding="0.7rem"
            border="2px solid var(--main)"
            bg="var(--main)"
            color="var(--white)"
            margin="0 0 0 2rem"
            cursor
          >
            마이펫
            <br />
            불러오기
          </Button>
          <Button
            width="7rem"
            padding="0.6rem"
            border="2px solid var(--main)"
            bg="var(--main)"
            color="var(--white)"
            margin="0 0 0 2rem"
            cursor
          >
            분석 시작
          </Button>
        </ButtonWrapper>
      </Grid>
    </Container>
  );
};

const Input = styled.input`
  width: 15rem;
  height: 2.4rem;
  border: 2px solid var(--lightgray);
  border-radius: 5px;
  padding: 0px 0px 0px 5px;
  font-size: 1.3rem;
  color: gray;
  :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PhotoBtnWrapper = styled.div`
  width: 37rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 15rem;
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-end; */
  align-items: flex-start;
  /* justify-content: space-between; */
  ${({ theme }) => theme.device.tablet} {
    min-width: 13rem;
  }
  ${({ theme }) => theme.device.mobile} {
    min-width: 13rem;
  }
`;

export default MainPage;
