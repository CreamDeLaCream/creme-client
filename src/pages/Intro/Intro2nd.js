import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';

// components
import { Text, Button } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import { UserKeywords } from './UserKeywords';

// icons
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const Intro2nd = (props) => {
  return (
    <IntroBg>
      <MainPartnerImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/partner1.png`}
          width="300px"
          // style={{ margin: '50px 0 0 0' }}
        />
      </MainPartnerImg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="40px">
          반려인 <HighlightText color="var(--cream)">최서연</HighlightText>
          님, <br />
          그녀는{' '}
          <span style={{ color: 'var(--main)', fontSize: '40px' }}>
            왜
          </span>{' '}
          옥자와
          <br />
          멀어졌을까요?
        </Text>
        <br />
        <UserKeywords />
        <Button
          width="4rem"
          height="4rem"
          bg="var(--cream)"
          radius="50%"
          size="20px"
          color="var(--deepcream)"
          margin="30px 0 0 0"
          onClick={() => {
            console.log('넘어감');
            history.push('/adduserlife');
          }}
          cursor
        >
          <BsFillPersonPlusFill size="2rem" />
        </Button>

        {/* <p>
          나의 사랑하는 댕댕이가 어떤 감정을 느끼고 있는지 궁금하시죠?
          <br />
          creme de la creme은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </p> */}
      </TitleContent>
    </IntroBg>
  );
};

const IntroBg = styled.div`
  display: flex;
  background-color: var(--lightcream);
  width: 100%;
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TitleContent = styled.div`
  margin-top: 70px;
  margin-right: 50px;
  width: 100%;
  // background-color: var(--main);
  text-align: right;
  ${({ theme }) => theme.device.mobile} {
    margin-right: 0px;
    text-align: center;
  }
  p {
    // font-family: normal;
    color: var(—darkcream);
  }
`;

const MainPartnerImg = styled.div`
  width: 500px;
  // background-color: var(—cream);
  img {
    margin-top: 80px;
    margin-left: 70px;
    ${({ theme }) => theme.device.mobile} {
      margin: 0px;
    }
  }
`;
