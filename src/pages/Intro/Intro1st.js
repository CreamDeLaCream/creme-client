import React from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';

// components
import { Text, Button, Grid } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import Deck from './Deck/Deck';

const Intro1st = () => {
  return (
    <Grid is_flex mobileCenter height="31rem" bg="var(--white)" margin="0 auto">
      <Grid>
        <Text color="var(--deepcream)" fontSize="40px" center>
          <HighlightText color="var(--lightcream)">옥자</HighlightText>,
          <br /> <span style={{ color: 'var(--main)' }}>
            그러는 이유
          </span>가 <br />
          있을거 아니야..?
        </Text>
        <Text type="sans" color="var(--main)" center>
          나의 댕댕이가 오늘은 어떤 감정을 <br /> 느끼고 있는지 궁금하시죠?
          <br />
          혹시, 가까웠던 댕댕이와의 관계가 소홀해지셨나요?
          <br />
          오늘의 마이펫은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </Text>
        <Grid mobileCenter>
          <Button
            width="4rem"
            height="4rem"
            bg="var(--main)"
            radius="50%"
            size="20px"
            color="var(--lightcream)"
            margin="20px 0 0 0"
            onClick={() => {
              history.push('/main');
            }}
            cursor
          >
            start
          </Button>
        </Grid>
      </Grid>
      <DeckWrapper>
        <Deck />
      </DeckWrapper>
    </Grid>
  );
};

const DeckWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: -30rem 20rem 0 0;
  flex: 1;
  ${({ theme }) => theme.device.mobile} {
    margin: 0 auto;
  }
`;

export default Intro1st;
