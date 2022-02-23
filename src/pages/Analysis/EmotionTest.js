import React from 'react';
import styled from 'styled-components';

// Compo
import TestItems from './TestItems';
import { Text } from '../../common/components';

export const EmotionTest = () => {
  const testQuestion = [
    { id: 0, Question: '반려인이 생각하는 댕댕이의 감정은?' },
    { id: 1, Question: '오늘 댕댕이가 홀로 보낸 시간은?' },
    { id: 2, Question: '오늘 댕댕이와의 산책 횟수는?' },
    { id: 3, Question: '오늘 댕댕이에게 간식 준 횟수는?' },
  ];

  function TestList({ questionlist }) {
    return (
      <EmotionTestWapper>
        <Text type="subTitle" color="var(--darkcream)">
          {questionlist.Question}
        </Text>
        <TestContent>
          <TestItems />
        </TestContent>
      </EmotionTestWapper>
    );
  }

  return (
    <>
      {testQuestion.map((questionlist, index) => {
        return <TestList questionlist={questionlist} />;
      })}
    </>
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
