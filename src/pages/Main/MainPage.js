import React from 'react';
import styled from 'styled-components';

// components
import Container from '../../common/components/Container';
import {
  Header,
  Text,
  Grid,
  Button,
  Input,
  Navbar,
  Image,
} from '../../common/components';
// import api from '../../common/utils/API';

const MainPage = (props) => {
  const { history } = props;
  const _session_key = null;
  const is_login = sessionStorage.getItem(_session_key);
  if (is_login)
    <Container height="100vh">
      <Header />
      <Navbar />

      <Grid margin="2rem auto">
        <Text type="mainTitle" color="main">
          감정상태를 분석할 댕댕이를 골라주세요.
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Grid is_flex margin="0 0 3rem 0">
          <Image size="15" />
          <Image size="15" />
          <Image size="15" />
        </Grid>

        <Grid is_flex>
          <Button
            width="100%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            <Text type="button" color="white">
              사진찍기 / 업로드
            </Text>
          </Button>
        </Grid>
      </Grid>

      <Grid margin="1rem auto" display="flex" justifyContent="flex-end">
        <Grid is_flex width="23.1rem">
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            // 중간 점검 이후 변경 예정
            // _onClick={() => history.push('/login')}
          >
            <Text type="button" color="white">
              마이펫 불러오기
            </Text>
          </Button>
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            // 중간 점검 이후 변경 예정
            // _onClick={() => history.push('/analysis')}
            _onClick={() => history.push('/result')}
          >
            <Text type="button" color="white">
              분석 시작
            </Text>
          </Button>
        </Grid>
      </Grid>
    </Container>;

  return (
    <Container height="100vh">
      <Header />
      <Navbar />

      <Grid margin="2rem auto">
        <Text type="mainTitle" color="main">
          반려견과 반려인의 첫 걸음,
          <br /> 지금 당신의 반려견 감정 상태를 분석해보세요.
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Grid is_flex margin="0 0 3rem 0">
          <Input placeholder="댕댕이의 이름을 입력해주세요." />
        </Grid>

        <Grid is_flex margin="0 0 3rem 0">
          <Input placeholder="댕댕이의 나이를 입력해주세요." />
        </Grid>

        <Grid>
          <Button
            width="100%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            <Text type="button" color="white">
              사진찍기 / 업로드
            </Text>
          </Button>
        </Grid>
      </Grid>

      <Grid margin="1rem auto" display="flex" justifyContent="flex-end">
        <Grid is_flex width="23.1rem">
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            // 중간 점검 이후 변경 예정
            // _onClick={() => history.push('/login')}
          >
            <Text type="button" color="white">
              마이펫 불러오기
            </Text>
          </Button>
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            _onClick={() => history.push('/analysis')}
            // _onClick={() => history.push('/result')}
          >
            <Text type="button" color="white">
              분석 시작
            </Text>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
