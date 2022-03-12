import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as memoActions } from '../../common/redux/modules/memo';
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
// import { resultList } from './ResultData';
import { Keywords } from '../../common/components/Keyword';
import CopyURL from './CopyURL';
import BarChart from './BarChart';
import { BsHeartFill, BsReplyAllFill, BsPersonCheckFill } from 'react-icons/bs';
import KakaoShare from './KakaoShare';

const ResultPage = (props) => {
  const dispatch = useDispatch();
  const [memo, setMemo] = useState('');
  const resultList = useSelector((state) => state.analysis.result);
  const is_login = useSelector((state) => state.user.is_login);
  const [likeColor, setLikeColor] = useState('var(--white)');
  const [is_like, setIsLike] = useState(false);
  const petmemo = useSelector((state) => state.memo.petmemo);

  const changeMemo = (e) => {
    setMemo(e.target.value);
  };

  const addMemo = () => {
    if (!memo) {
      window.alert('로그인 후 이용가능합니다.');
      return;
    }
    if (memo === 0) {
      return;
    }
    let petmemo = {
      slug: resultList.slug,
      memo: memo,
      is_like: is_like,
    };
    window.alert('일기가 저장됩니다.');
    dispatch(memoActions.addMemoAX(petmemo));

    history.push('/mypet');
  };

  const preventEvent = () => {
    window.alert('로그인 후 이용가능합니다.');
  };

  const resetHandler = () => {
    history.push('/main');
    window.alert('분석 결과가 사라집니다.');
    dispatch(petimageActions.initializeImage());
    dispatch(memoActions.initializeMemo());
    dispatch(analysisActions.initializeEmotion());
  };

  const addLike = () => {
    if (!is_login) {
      return window.alert('로그인 후 이용가능합니다.');
    } else {
      likeColor === 'var(--white)'
        ? setLikeColor('var(--main)')
        : setLikeColor('var(--white)');
      setIsLike(true);
      dispatch(memoActions.addMemoAX(petmemo));
    }
  };

  const cancelLike = () => {
    likeColor === 'var(--main)'
      ? setLikeColor('var(--white)')
      : setLikeColor('var(--main)');
    setIsLike(false);
    dispatch(memoActions.addMemo(petmemo));
  };

  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    ctx = canvasEle.getContext('2d');
  }, []);

  useEffect(() => {
    const drawRect = (info, style = {}) => {
      const { x, y, w, h } = info;
      const { borderColor = 'black', borderWidth = 1 } = style;

      ctx.beginPath();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.rect(x, y, w, h);
      ctx.stroke();
    };

    if (resultList.dogCoordinate) {
      const dogCoordinate = resultList.dog_coordinate.split(',');
      const humanCoordinate = resultList.human_coordinate.split(',');
      const r1Info = {
        x: dogCoordinate[0],
        y: dogCoordinate[1],
        w: dogCoordinate[2],
        h: dogCoordinate[3],
      };
      const r1Style = { borderColor: 'yellowgreen', borderWidth: 10 };
      drawRect(r1Info, r1Style);

      const r2Info = {
        x: humanCoordinate[0],
        y: humanCoordinate[1],
        w: humanCoordinate[2],
        h: humanCoordinate[3],
      };
      const r2Style = { borderColor: 'yellow', borderWidth: 10 };
      drawRect(r2Info, r2Style);
    }
  }, [
    ctx,
    resultList.dogCoordinate,
    resultList.dog_coordinate,
    resultList.human_coordinate,
  ]);

  return (
    // resultList가 있을 때만 작동
    // resultList?.dog_name ? ( 옵셔녈체이닝
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
          {is_like ? (
            <Button
              circle
              is_flex_center
              foldSize
              size="3.5"
              border="0.15rem solid var(--darkcream)"
              cursor
              bg={likeColor}
              onClick={cancelLike}
            >
              <BsHeartFill
                size="1.4rem"
                color={
                  likeColor === 'var(--white)'
                    ? 'var(--darkcream)'
                    : 'var(--white)'
                }
              />
            </Button>
          ) : (
            <Button
              circle
              is_flex_center
              foldSize
              size="3.5"
              border="0.15rem solid var(--darkcream)"
              cursor
              bg={likeColor}
              onClick={addLike}
            >
              <BsHeartFill
                size="1.4rem"
                color={
                  likeColor === 'var(--white)'
                    ? 'var(--darkcream)'
                    : 'var(--white)'
                }
              />
            </Button>
          )}

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
          {!is_login ? null : (
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
                <div>{resultList.chemistry_percentage} %</div>
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
        {/* <Text type="body" color="var(--deepcream)">
          아직 솔루션이 없어요.
        </Text> */}
        {resultList?.solution?.map((solution, index) => {
          return (
            <Text type="body" color="var(--deepcream)">
              {solution.solution}
            </Text>
          );
        })}
        {/* {resultList.solution.solution} */}
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          {resultList.dog_name}에게 필요한 것
        </Text>
        <Grid flexWrap="wrap" width="100%" is_flex margin="0 0 3rem 0">
          {resultList?.needs?.map((need, index) => {
            return (
              <Dropdown
                name={need.name}
                description={need.description}
                key={index}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid margin="2rem auto">
        <Text type="subTitle" color="var(--main)" marginBottom="15px">
          오늘의 감정일기
        </Text>
        {!is_login ? (
          <div onClick={preventEvent} style={{ cursor: 'pointer' }}>
            <Input
              multiLine
              disabled
              placeholder="결과를 보고 느낀 감정을 작성해주세요."
            />
          </div>
        ) : (
          <Input
            multiLine
            value={memo}
            onChange={changeMemo}
            placeholder="결과를 보고 느낀 감정을 작성해주세요."
          />
        )}
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

    // : (
    //   <div>로딩중</div>
    // )
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
  border: 2px solid var(—lightgray);
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
