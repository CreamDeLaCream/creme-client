import React, { useEffect } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../common/redux/modules/user';

// components
import { Container, Text } from '../../common/components';
// import Spinner from './Spinner';

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  // 카카오에서 받은 인가코드 서버에 넘긴다.
  useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, []);

  return (
    <Container>
      <Text type="mainTitle" color="var(--deepcream)">
        로그인 중입니다. 잠시만 기다려주세요.
      </Text>
      <ImgSection>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/dog3.gif`}
          width="400px"
          height="300px"
        />
      </ImgSection>
    </Container>
  );
};

const ImgSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  border-radius: 20px;
  border: solid 1px var(--cream);
`;

export default KakaoRedirect;
