import React from 'react';
import styled from 'styled-components';

// Compo
import TestItems from './TestItems';
import { Text } from '../../common/components';

export const EmotionTest = () => {
  return (
    <EmotionTestWapper>
      <Text type="subTitle" color="var(--darkcream)">
        반려인이 생각하는 루루의 감정상태를 선택해주세요
      </Text>
      <TestContent>
        <TestItems />
      </TestContent>
    </EmotionTestWapper>
  );
};

const EmotionTestWapper = styled.div`
  height: 150px;
  // background-color: var(--lightcream);
  border-radius: 30px;

  margin-bottom: 40px;
`;

const TestContent = styled.div`
  margin-top: 20px;
`;
