import React from 'react';
import styled from 'styled-components';

// Compo
import TestItems from './TestItems';
import { Text } from '../../common/components';

export const EmotionTest = () => {
  return (
    <EmotionTestWapper>
      <Text type="subTitle" color="var(--main)">
        반려인이 생각하는 루루의 감정상태는?
      </Text>
      <TestContent>
        <TestItems />
      </TestContent>
    </EmotionTestWapper>
  );
};

const EmotionTestWapper = styled.div`
  width: 60%;
  height: 170px;
  // background-color: var(--cream);

  margin-top: 50px;
`;

const TestContent = styled.div`
  margin-top: 20px;
`;
