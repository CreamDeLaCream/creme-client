import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';

// components
import {
  Header,
  Navbar,
  Text,
  Container,
  Button,
} from '../../common/components';
import { EmotionTest } from './EmotionTest';
import Loading from '../Analysis/Loading';

const AnalysisPage = (props) => {
  const history = useHistory();
  const petimage = useSelector((state) => state.petimage.list);

  // // redux example
  // import { useDispatch } from 'react-redux';
  // import { actionCreators as postActions } from '../../common/redux/modules/petimage';
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const addPost = () => {
  //   if (files.length === 0) {
  //     window.alert('이미지를 업로드해주세요');
  //     return;
  //   }
  //   if (!name) {
  //     window.alert('댕댕이의 이름을 입력해주세요');
  //     return;
  //   }
  //   if (!age) {
  //     window.alert('댕댕이의 나이를 입력해주세요');
  //     return;
  //   }
  //   let petimage = {
  //     name: name,
  //     age: age,
  //     image: files[0],
  //   };
  //   console.log(petimage);
  //   dispatch(postActions.addPetImageAX(petimage));
  //   history.push('/analysis');
  // };

  return (
    <Analysisbg>
      <Container>
        <Header />
        <Navbar />
        <Text type="mainTitle" color="var(--main)">
          <Loading />
        </Text>
        <TestContentWarpper>
          <ImgSeiton>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/dog3.gif`}
              width="400px"
              height="300px"
            />
          </ImgSeiton>
          <Text type="subTitle" color="var(--main)"></Text>
          <TestSetion>
            <EmotionTest />
          </TestSetion>
        </TestContentWarpper>

        <ButtonWrapper>
          <Button
            width="80px"
            height="80px"
            bg="var(--main)"
            radius="50%"
            size="20px"
            color="var(--white)"
            cursor
            onClick={() => history.push(`/result/${petimage[0].slug}`)}
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
  background-color: var(--bggray);
  width: 100%;
  height: calc(160vh - 100px);
`;

const TestContentWarpper = styled.div`
  width: 100%;
  // background-color: var(--main);
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ImgSeiton = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Ment = styled.div`
  width: 100%;
`;

const TestSetion = styled.div`
  width: 100%;
  color: var(--darkcream);
  // background-color: var(--cream);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageSetion = styled.div`
  width: 320px;
  height: 750px;

  img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    overflow: hidden;
  }

  Button {
    position: absolute;
    // float: right;
    right: 60px;
    bottom: 85px;
  }
`;
export default AnalysisPage;
