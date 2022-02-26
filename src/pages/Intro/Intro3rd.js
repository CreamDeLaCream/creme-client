import React from 'react';
import styled from 'styled-components';

// Compo
import { Text } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';

export const Intro3rd = () => {
  return (
    <IntroBg>
      <IntroTitle>
        <Text color="var(--deepcream)" fontSize="40px">
          <HighlightText color="var(--lightcream)">반려견</HighlightText>과
          <HighlightText color="var(--lightcream)">반려인</HighlightText>에게{' '}
          <br />
          <span style={{ color: 'var(--main)' }}>오늘의 마이펫</span>이<br />{' '}
          필요한 이유
        </Text>
      </IntroTitle>
      <IntroContent></IntroContent>
    </IntroBg>
  );
};

const IntroBg = styled.div`
  background-color: var(--lightorange);
  width: 100%;
  height: 700px;
  display: flex;
`;

const IntroTitle = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 70px;
  margin-top: 80px;
`;

const IntroContent = styled.div`
  width: 100px;
  height: 400px;
  display: flex;
`;
