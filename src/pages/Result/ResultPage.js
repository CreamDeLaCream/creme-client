import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// redux
import { history } from '../../common/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/memo';
import { actionCreators as userActions } from '../../common/redux/modules/user';
import { actionCreators as petimageActions } from '../../common/redux/modules/petimage';
import { actionCreators as analysisActions } from '../../common/redux/modules/analysis';

// components
import {
  Text,
  Button,
  Grid,
  Header,
  Navbar,
  Container,
  Input,
} from '../../common/components';
import Dropdown from '../Result/Dropdown';
// import { resultData } from './ResultData';
import { Keywords } from '../../common/components/Keyword';
import CopyURL from './CopyURL';
import BarChart from './BarChart';
import { BsHeartFill, BsReplyAllFill, BsPersonCheckFill } from 'react-icons/bs';
import KakaoShare from './KakaoShare';

const ResultPage = (props) => {
  const dispatch = useDispatch();
  // const slug = props.match.params.slug;
  const [memo, setMemo] = useState('');
  // const petimage = useSelector((state) => state.petimage.list);
  // const is_login = useSelector((state) => state.user.is_login);
  // const petimage = useSelector((state) => state.petimage.list);
  const resultList = useSelector((state) => state.analysis.result);
  console.log('check', resultList.answers);
  console.log('check2', resultList.needs);
  const is_session = sessionStorage.getItem('token') ? true : false;

  //
  // useEffect(() => {
  //   dispatch(postActions.setPetImageAX(resultList));
  // }, [resultList]);

  const changeMemo = (e) => {
    setMemo(e.target.value);
  };

  const addMemo = () => {
    if (!memo) {
      window.alert('로그인이 필요합니다.');
      return;
    }
    if (memo === 0) {
      return;
    }
    let petmemo = {
      slug: resultList.slug,
      memo: memo,
    };
    console.log(petmemo);
    window.alert('일기가 저장됩니다.');
    dispatch(postActions.addMemoAX(petmemo));
    history.push('/mypet');
  };

  const canvas = useRef();
  let ctx = null;

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext('2d');
    // const ctx = canvasRef.current.getContext('2d');

    // handleResize();
    // window.addEventListener('resize', handleResize);

    // return () => window.removeEventListener('resize', handleResize);
  }, []);
  // const canvasRef = useRef();
  // useEffect(() => {
  //   // requestAnimationFrame(() => draw(ctx));
  // }, []);

  useEffect(() => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    const r1Info = { x: 120, y: 180, w: 200, h: 200 };
    const r1Style = { borderColor: 'red', borderWidth: 10 };
    drawRect(r1Info, r1Style);

    const r2Info = { x: 600, y: 180, w: 200, h: 200 };
    const r2Style = { borderColor: 'blue', borderWidth: 10 };
    drawRect(r2Info, r2Style);
  }, []);

  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;

    // window.addEventListener('resize', draw);
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  const resetHandler = () => {
    dispatch(petimageActions.initializeImage());
    dispatch(postActions.initializeMemo());
    dispatch(analysisActions.initializeEmotion());
    history.push('/main');
  };

  return (
    <Container>
      <Header />
      <Navbar />
      <Grid margin="1rem auto">
        <Text type="mainTitle" color="var(--main)">
          반려견 감정 상태 결과
        </Text>
      </Grid>

      <ResultBox>
        <div style={{ width: '1000px', height: '500px', position: 'relative' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={resultList.image}
            alt="dog_image"
          />
          <canvas
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            ref={canvas}
          ></canvas>
        </div>
      </ResultBox>

      <Grid is_flex_end margin="-2rem 0 0 0">
        <ButtonWrapper>
          <Button
            circle
            foldSize
            size="3.5"
            bg="var(--white)"
            border="0.15rem solid var(--darkcream)"
            is_flex_center
            cursor
          >
            <BsHeartFill size="1.4rem" color="var(--darkcream)" />
          </Button>
          <CopyURL />
          <KakaoShare
            title={`당신의 반려견 ${resultList.dog_name}(이)는 기분은 ${resultList.dog_emotion} 입니다.`}
            description="당신과 반려견의 케미는?"
            imgUrl={resultList.image}
            // buttonTitle="보러 가기"
            buttonText="다시 검색하기"
            link="/"
          />
        </ButtonWrapper>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="mainTitle" color="var(--main)" marginBottom="2rem">
          {resultList.dog_name}, {resultList.dog_age}살
        </Text>
        <Text type="subTitle">
          {!is_session ? null : (
            <Keywords typekeywords={resultList.dog_emotion} />
          )}
          {/* TODO: Keyword에 props에 .character 추가하기 */}
          {/* <Keyword /> */}
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="2rem">
          당신이 생각하는 {resultList.dog_name}의 감정상태 일치도는?
        </Text>

        <Grid is_flex mobileColumn>
          <Grid display="flex" jutiyfyContent="space-around">
            <Grid>
              <Text
                center
                fontSize="5rem"
                color="var(--main)"
                whiteSpace="nowrap"
              >
                {/* {resultList.match === true ? (
                  <div>일치</div>
                ) : (
                  <div>불일치</div>
                )} */}
                <div>{resultList.chemistry_percentage}</div>
              </Text>
            </Grid>
          </Grid>

          <Grid>
            <BarChart
              data={[
                {
                  label: resultList.dog_emotion,
                  value: resultList.dog_emotion_percentage,
                },
                {
                  label: resultList.human_emotion,
                  value: resultList.human_emotion_percentage,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          현재 {resultList.dog_name}의 감정 상태
        </Text>

        <Grid>
          <Text type="body" color="var(--deepcream)">
            {resultList.dog_emotion_description}
          </Text>
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          {resultList.dog_name}의 솔루션
        </Text>
        <Text type="body" color="var(--deepcream)">
          아직 솔루션이 없어요.
        </Text>
        {/* <Text type="body" color="var(--deepcream)">
          {resultList.solution[1]}
          &nbsp;
          {resultList.solution[2]}
          &nbsp;
          {resultList.solution[3]}
          &nbsp;
          {resultList.solution[4]}
        </Text> */}
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          {resultList.dog_name}에게 필요한 것
        </Text>
        <Grid flexWrap="wrap" width="100%" is_flex margin="0 0 3rem 0">
          {/* {resultList.needs.map((need, index) => {
            return (
              <Dropdown
                name={need.name}
                description={need.description}
                key={index}
              />
            );
          })} */}
        </Grid>
      </Grid>

      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          오늘의 감정일기
        </Text>
        <Input
          multiLine
          value={memo}
          onChange={changeMemo}
          placeholder="결과를 보고 느낀 감정을 작성해주세요."
        />
      </Grid>
      <Grid is_flex margin="1rem auto">
        <Button
          width="48%"
          padding="0.5rem"
          bg="var(--main)"
          color="var(--white)"
          radius="5px"
          cursor
          onClick={resetHandler}
        >
          <Text type="button" color="var(--white)">
            <BsReplyAllFill size="2rem" />
          </Text>
        </Button>
        <Button
          width="48%"
          padding="0.5rem"
          bg="var(--main)"
          color="var(--white)"
          radius="5px"
          cursor
          onClick={addMemo}
        >
          <Text type="button" color="var(--white)">
            <BsPersonCheckFill size="2rem" />
            {/* 마이펫 페이지 */}
          </Text>
        </Button>
      </Grid>
    </Container>
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

const ButtonWrapper = styled.div`
  z-index: 1;
  width: 12rem;
  display: flex;
  z-index: 2;
  justify-content: space-between;
  ${({ theme }) => theme.device.fold} {
    width: 10rem;
  }
`;

export default ResultPage;
