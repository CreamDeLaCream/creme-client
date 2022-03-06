import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/memo';

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
import { resultData } from './ResultData';
import { Keywords } from '../../common/components/Keyword';
import CopyURL from './CopyURL';
import BarChart from './BarChart';
import { BsHeartFill } from 'react-icons/bs';

const ResultPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [memo, setMemo] = useState('');
  const petimage = useSelector((state) => state.petimage.list);

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
      // slug: slug,
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
  }, []);

  useEffect(() => {
    const r1Info = { x: 50, y: 50, w: 150, h: 80 };
    const r1Style = { borderColor: 'red', borderWidth: 10 };
    drawRect(r1Info, r1Style);

    const r2Info = { x: 50, y: 50, w: 80, h: 150 };
    const r2Style = { borderColor: 'blue', borderWidth: 10 };
    drawRect(r2Info, r2Style);
  }, []);

  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  const resetHandler = () => {
    dispatch(postActions.initialState(petimage));
    history.replace('/main');
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
        <div style={{ width: '100%', position: 'relative' }}>
          <div>
            <canvas ref={canvas}></canvas>
          </div>
          <img width="100%" src={petimage[0].image} alt="dog_image" />
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
          <Button
            circle
            foldSize
            size="3.5"
            bg="var(--white)"
            border="0.15rem solid var(--darkcream)"
            is_flex_center
            cursor
          >
            <p>Kakao</p>
          </Button>
        </ButtonWrapper>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="mainTitle" color="var(--main)" marginBottom="2rem">
          {petimage[0].dog_name}, {petimage[0].dog_age}살
        </Text>
        <Text type="subTitle">
          <Keywords typekeywords={resultData[0].dog.emotion} />
          {/* TODO: Keyword에 props에 .character 추가하기 */}
          {/* <Keyword /> */}
        </Text>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="2rem">
          당신이 생각하는 {petimage[0].dog_name}의 감정상태 일치도는?
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
                {resultData[0].match === true ? (
                  <div>일치</div>
                ) : (
                  <div>불일치</div>
                )}
              </Text>
            </Grid>
          </Grid>

          <Grid>
            <BarChart
              data={[
                {
                  label: resultData[0].dog.emotion,
                  value: resultData[0].dog.prob * 100,
                },
                {
                  label: resultData[0].human_emotion.emotion,
                  value: resultData[0].human_emotion.prob * 100,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          현재 {petimage[0].dog_name}의 감정 상태
        </Text>

        <Grid>
          <Text type="body" color="var(--deepcream)">
            {resultData[0].emotion_description}
          </Text>
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          {petimage[0].dog_name}의 솔루션
        </Text>
        <Text type="body" color="var(--deepcream)">
          {resultData[0].solution[1]}
          &nbsp;
          {resultData[0].solution[2]}
          &nbsp;
          {resultData[0].solution[3]}
          &nbsp;
          {resultData[0].solution[4]}
        </Text>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          {petimage[0].dog_name}에게 필요한 것
        </Text>
        <Grid flexWrap="wrap" width="100%" is_flex margin="0 0 3rem 0">
          {resultData[0].needs.map((need, index) => {
            return <Dropdown title={need.title} desc={need.desc} key={index} />;
          })}
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          오늘의 감정일기(메모)
        </Text>
        <Input
          multiLine
          value={memo}
          _onChange={changeMemo}
          placeholder="반려인의 간단한 기록 작성 공간"
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
          // onClick={() => history.push('/main')}
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
          onClick={addMemo}
        >
          <Text type="button" color="var(--white)">
            마이펫 페이지
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
  width: 12rem;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.device.fold} {
    width: 10rem;
  }
`;

export default ResultPage;

{
  /* <div>
<div style={{ position: 'relative' }}>
  <div>
    <canvas id="canvas" width="150" height="150"></canvas>
    <img
      id="frame"
      src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png"
      width="132"
      height="150"
      alt=""
    />
  </div>
  <img width="100%" src={petimage[0].image} alt="dog_image" />
</div>
<canvas ref={canvas} width={600} height={256 + 80} />
<img width="100%" src={petimage[0].image} alt="dog_image" />
</div> */
}

{
  /* <canvas width="320" height="320"></canvas> */
}
{
  /* <canvas id="stockGraph" width="150" height="150">
          current stock price: $3.15 +0.15
        </canvas>
        <canvas id="clock" width="150" height="150">
          <img src="images/clock.png" width="150" height="150" alt="" />
        </canvas> */
}
{
  /* <body onload="draw()">
          <div style={{ position: 'relative' }}>
            <div>
              <canvas id="canvas" width="150" height="150"></canvas>
              <img
                id="frame"
                src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png"
                width="132"
                height="150"
                alt=""
              />
            </div>
            <img width="100%" src={petimage[0].image} alt="dog_image" />
          </div>
        </body> */
}
{
  /* <img width="100%" src={resultData[0].dog_img} alt="dog_image" /> */
}
