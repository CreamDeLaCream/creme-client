import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as analysisActions } from '../../common/redux/modules/analysis';

// components
import {
  Header,
  Navbar,
  Text,
  Container,
  Button,
} from '../../common/components';
import EmotionTest from './EmotionTest';
import Loading from './Loading';

const AnalysisPage = (props) => {
  const dispatch = useDispatch();
  const petimage = useSelector((state) => state.petimage.list);

  const sendSlug = (name, value) => {
    dispatch(
      analysisActions.addEmotionAX(
        name,
        value,
        petimage[petimage.length - 1].slug,
      ),
    );
    history.push(`/result/${petimage[petimage.length - 1].slug}`);
  };

  return (
    <Analysisbg>
      <Container>
        <Header />
        <Navbar />
        <Text type="mainTitle" color="var(--main)">
          <Loading />
        </Text>
        <TestContentWrapper>
          <ImgSection>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/dog3.gif`}
              width="400px"
              height="300px"
            />
          </ImgSection>
          <Text type="subTitle" color="var(--main)"></Text>
          <TestSection>
            <EmotionTest name value />
          </TestSection>
        </TestContentWrapper>

        <ButtonWrapper>
          <Button
            width="80px"
            height="80px"
            bg="var(--main)"
            radius="50%"
            size="20px"
            color="var(--white)"
            cursor
            onClick={sendSlug}
          >
            <Text type="button" color="var(--white)">
              댕댕이 <br /> 결과
            </Text>
          </Button>
        </ButtonWrapper>
      </Container>
    </Analysisbg>
  );
};

const Analysisbg = styled.div`
  width: 100%;
  height: calc(160vh - 100px);
`;

const TestContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ImgSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  border-radius: 20px;
  border: solid 1px var(--cream);
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const TestSection = styled.div`
  width: 100%;
  color: var(--darkcream);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default AnalysisPage;
