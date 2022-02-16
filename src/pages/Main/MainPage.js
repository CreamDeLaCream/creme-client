import React from 'react';
import styled from 'styled-components';

// components
import Container from './Container';
import { Text, Grid, Button, Input } from '../../common/components';

const MainPage = () => {
  return (
    <Container>
      <Grid>
        <Text type="head_1" color="main">
          반려견 감정 상태
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="head_2" color="main">
          반려견과 반려인의 첫 걸음,
          <br /> 지금 당신의 반려견 감정 상태를 분석해보세요.
        </Text>
      </Grid>

      <Grid margin="2rem auto">
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

        <InputWrapper>
          <Text type="head_2" color="main">
            감정
          </Text>
          <PhotoBtnWrapper>
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
        </InputWrapper>
      </Grid>

      <Grid margin="1rem auto" display="flex" justifyContent="flex-end">
        <PageBtnWrapper>
          <Button
            width="10rem"
            padding="0.6rem"
            border="2px solid var(--main)"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            마이펫 불러오기
          </Button>
          <Button
            width="10rem"
            padding="0.6rem"
            border="2px solid var(--main)"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            분석 시작
          </Button>
        </PageBtnWrapper>
      </Grid>
    </Container>
  );
};

const InputWrapper = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  ${({ theme }) => theme.device.tablet} {
    width: 75%;
  }
  ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
    flex-wrap: wrap;
  }
`;

const PhotoBtnWrapper = styled.div`
  width: 32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 1.5rem;
  ${({ theme }) => theme.device.tablet} {
    width: 75%;
    flex-wrap: wrap;
  }
`;

const PageBtnWrapper = styled.div`
  width: 22rem;
  display: flex;
  justify-content: space-between;
`;

export default MainPage;
