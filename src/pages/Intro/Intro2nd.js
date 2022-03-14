import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';

// components
import { Text, Button } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import { UserKeywords } from './UserKeywords';

// icons
import { FaUserCog } from 'react-icons/fa';

const Intro2nd = () => {
  return (
    <IntroBg>
      <MainPartnerImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/partner1.png`}
          width="300px"
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
          radius="4rem"
          bg="var(--cream)"
          color="var(--deepcream)"
          margin="30px 0 0 0"
          padding="1rem 0.8rem 1rem 1rem"
          cursor
          onClick={() => {
            history.push('/adduserlife');
          }}
        >
          <FaUserCog size="2rem" />
        </Button>
      </TitleContent>
    </IntroBg>
  );
};

const IntroBg = styled.div`
  display: flex;
  background-color: var(--lightcream);
  ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TitleContent = styled.div`
  width: 100%;
  text-align: right;
  margin: 4.3rem 3.1rem 0 0;
  ${({ theme }) => theme.device.mobile} {
    text-align: center;
    margin: 0;
  }
`;

const MainPartnerImg = styled.div`
  img {
    margin: 5rem 0 0 4.3rem;
    ${({ theme }) => theme.device.mobile} {
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
    ${({ theme }) => theme.device.fold} {
      width: 80%;
    }
  }
`;

export default Intro2nd;
