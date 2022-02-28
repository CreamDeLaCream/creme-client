import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/post';

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
} from '../../common/components';
import Dropdown from '../Result/Dropdown';
import AddPetModal from '../MyPet/AddPetModal';
import { resultData } from './ResultData';
import { Keywords } from '../../common/components/Keyword';
import CopyURL from './CopyURL';
import BarChart from './BarChart';
import { BsHeartFill } from 'react-icons/bs';

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
        {/* <Button>
        </Button> */}
        <Grid is_flex_end>
          <Button
            circle
            size="3.5"
            bg="transparent"
            border="0.15rem solid var(--gray)"
            is_flex_center
            cursor
          >
            <BsHeartFill size="1.4rem" color="red" />
          </Button>
          <CopyURL />
          <Button
            circle
            size="3.5"
            bg="transparent"
            border="0.15rem solid var(--gray)"
            is_flex_center
            cursor
          >
            <p>Kakao</p>
            {/* <SiKakao size="" color="" /> */}
          </Button>
        </Grid>

        <Grid margin="2rem auto">
          <Text type="mainTitle" color="var(--main)" marginBottom="2rem">
            {resultData[0].dog_name}, {resultData[0].dog_age}살
          </Text>
          <Text type="subTitle">
            <Keywords typekeywords={resultData[0].dog.emotion} />
            {/* TODO: Keyword에 props에 .character 추가하기 */}
            {/* <Keyword /> */}
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
              <BarChart />
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
            {resultData[0].needs.map((need, index) => {
              return <Dropdown title={need.title} desc={need.desc} />;
            })}
          </Grid>
        </Grid>

        <Grid margin="2rem auto">
          <Text type="subTitle" color="var(--main)" marginBottom="15px">
            오늘의 감정일기(메모)
          </Text>
          <Input multiLine placeholder="반려인의 간단한 기록 작성 공간" />
        </Grid>
        <Grid is_flex margin="1rem auto">
          <Button
            width="48%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
          >
            <Text type="button" color="var(--white)">
              검사 다시하기
            </Text>
          </Button>
          <Button
            width="48%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            _onClick={() => history.push('/mypet')}
          >
            <Text type="button" color="var(--white)">
              마이펫 페이지
            </Text>
          </Button>
        </Grid>
        {/* </Grid> */}
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
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  object-fit: cover;
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
