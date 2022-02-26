import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/post';
import BarChart from './BarChart.js';

// components
import {
  Text,
  Button,
  Grid,
  Header,
  Navbar,
  Container,
  Input,
  Modal,
  Keyword,
} from '../../common/components';
import Dropdown from '../Result/Dropdown';
import AddPetModal from '../MyPet/AddPetModal';
import { resultData } from './ResultData';

const ResultPage = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  // const checkTab = (keyword) => {
  //   if (history.location.pathname.includes(keyword) === true)
  //    return true;
  //   else return false;
  // };

  // (임시) 마이펫 페이지 모달
  const [modalOpen, setModalOpen] = useState(false);

  // _onClick={() => {
  //   setModalOpen(true);
  // }}

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
    <>
      <Container>
        <Header />
        <Navbar />

        <Grid margin="1rem auto">
          <Text type="mainTitle" color="var(--main)">
            반려견 감정 상태 결과
          </Text>
        </Grid>
        <ResultBox>
          <img src={resultData[0].dog_img} alt="" />
        </ResultBox>

        <Grid margin="2rem auto">
          <Text type="mainTitle" color="var(--main)" marginBottom="2rem">
            {resultData[0].dog_name}, {resultData[0].dog_age}살
          </Text>
          <Text type="subTitle">
            <Keyword />
          </Text>
        </Grid>

        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="2rem">
            당신이 생각하는 {resultData[0].dog_name}의 감정상태 일치도는?
          </Text>

          <Grid is_flex>
            <Grid width="20rem">
              <Text fontSize="5rem" color="var(--main)">
                {resultData[0].match === true ? (
                  <div>일치</div>
                ) : (
                  <div>불일치</div>
                )}
              </Text>
            </Grid>

            <Grid width="40rem">
              <EmotionBox>지루함 50%</EmotionBox>
              <EmotionBox>행복함 50%</EmotionBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="15px">
            현재 {resultData[0].dog_name}의 감정 상태
          </Text>

          <Grid>
            <Text type="body" color="var(--darkcream)" marginBottom="10px">
              #행복함 #즐거움 #여유로움 #슬픔
            </Text>

            <Text color="var(--deepcream)">
              루루는 지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을
              느끼고 있어요. 루루는 지금 행복한 감정을 느끼고 있어요. 루루는
              지금 행복한 감정을 느끼고 있어요. 루루는 지금 행복한 감정을 느끼고
              있어요. 루루는 지금 행복한 감정을 느끼고 있어요.
            </Text>
          </Grid>
        </Grid>
        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="15px">
            {resultData[0].dog_name}의 솔루션
          </Text>
          <Text type="body" color="var(--deepcream)">
            {resultData[0].emotion_description}
          </Text>
        </Grid>
        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="15px">
            {resultData[0].dog_name}에게 필요한 것
          </Text>
          <Grid is_flex margin="0 0 3rem 0">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </Grid>
        </Grid>

        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="15px">
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
              <Text type="button" color="var(--white)">
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
              <Text type="button" color="var(--white)">
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
              _onClick={() => history.push('/main')}
            >
              <Text type="button" color="var(--white)">
                검사 다시하기
              </Text>
            </Button>
          </Grid>

          <BarChart />
        </Grid>
      </Container>

      {modalOpen && (
        <Modal width="35rem" height="50rem" setOpenModal={setModalOpen}>
          <AddPetModal />
        </Modal>
      )}
    </>
  );
};

const ResultBox = styled.div`
  width: 100%;
  /* height: 30rem; */

  background-size: cover;
  border: 2px solid var(--lightgray);
`;

const EmotionBox = styled.div`
  width: 15rem;
  padding: 0.7rem;
  margin-bottom: 0.6rem;
  align-items: space-between;
  text-align: center;
  background-color: var(--darkcream);
  color: var(--white);
  font-weight: 600;
  /* border: 1px solid var(--main); */
`;

export default ResultPage;
