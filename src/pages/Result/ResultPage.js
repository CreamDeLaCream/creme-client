import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/post';
// import { useDetectOutsideClick } from '../../common/components';
// components
import {
  Text,
  Button,
  Grid,
  Header,
  Navbar,
  Container,
  Input,
  Image,
  DropDown,
} from '../../common/components';

const ResultPage = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  // React.useEffect(() => {
  //   if (post_list.length === 0) {
  //     dispatch(postActions.getPostAX());
  //     console.log(post_list);
  //   }
  //   console.log(props);
  //   if (props.search_result) {
  //     console.log(props.search_result);
  //   }
  // }, []);

  return (
    <Container>
      <Header />
      <Navbar />
      <DropDown />
      <Grid margin="1rem auto">
        <Text type="mainTitle" color="main">
          반려견 감정 상태 결과
        </Text>
      </Grid>
      <ResultBox></ResultBox>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="main" marginBottom="2rem">
          당신이 생각하는 OO의 감정상태 일치도는?
        </Text>

        <Grid is_flex>
          <Grid width="20rem">
            <Text fontSize="5rem" color="main">
              일치
            </Text>
          </Grid>

          <Grid width="40rem">
            <EmotionBox>지루함 50%</EmotionBox>
            <EmotionBox>행복함 50%</EmotionBox>
          </Grid>
        </Grid>
        {/* 
        <Grid>
          <Grid marginBottom="2rem">
            <Text type="body_1" color="black">
              반려인이 생각한 OO의 감정상태
            </Text>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="main">
          현재 OO의 감정 상태
        </Text>

        <Grid>
          <Text type="body" color="main">
            #행복함 #즐거움 #여유로움 #슬픔
          </Text>

          <Text>
            루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을
            느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금
            행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고
            있어요. 루루는 지금 행복한 감정을 느끼고 있어요.
          </Text>
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="main">
          OO의 솔루션
        </Text>
        <Text type="body">
          지금처럼 루루와의 시간을 보내면서 행복도를 유지시켜주세요.
        </Text>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="main">
          OO이에게 필요한 것
        </Text>
        <Grid is_flex margin="0 0 3rem 0">
          <Image size="8" />
          <Image size="8" />
          <Image size="8" />
          <Image size="8" />
          <Image size="8" />
          <Image size="8" />
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="main">
          오늘의 감정일기(메모)
        </Text>
        <Input multiLine placeholder="반려인의 간단한 기록 작성 공간" />
      </Grid>
      <Grid margin="1rem auto" display="flex" justifyContent="flex-end">
        <Grid is_flex width="34rem">
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            <Text type="button" color="white">
              URL 복사하기
            </Text>
          </Button>
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            <Text type="button" color="white">
              카카오톡 공유
            </Text>
          </Button>
          <Button
            width="10rem"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            _onClick={() => history.push('/')}
          >
            <Text type="button" color="white">
              검사 다시하기
            </Text>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const ResultBox = styled.div`
  width: 100%;
  height: 30rem;
  border: 2px solid var(--lightgray);
`;

const EmotionBox = styled.div`
  width: 15rem;
  padding: 0.7rem;
  margin-bottom: 0.6rem;
  align-items: space-between;
  text-align: center;
  background-color: var(--main);
  color: var(--white);
  font-weight: 600;
  border: 1px solid var(--main);
`;

export default ResultPage;
