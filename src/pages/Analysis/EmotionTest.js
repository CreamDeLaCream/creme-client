import React, { useState } from 'react';
import styled from 'styled-components';

// Compo
import { Text, Button } from '../../common/components';

export const EmotionTest = () => {
  const testQnA = [
    {
      question: { id: 0, Question: '반려인이 생각하는 댕댕이의 감정은?' },
      answer: [
        { name: 'emotion', emotion: 'happy', id: '0' },
        { name: 'emotion', emotion: 'sad', id: '1' },
        { name: 'emotion', emotion: 'scared', id: '2' },
        { name: 'emotion', emotion: 'angry', id: '3' },
      ],
    },
    {
      question: { id: 1, Question: '오늘 댕댕이가 홀로 보낸 시간은?' },
      answer: [
        { name: 'emotion', emotion: '2시간 이하', id: '0' },
        { name: 'emotion', emotion: '3-6시간', id: '1' },
        { name: 'emotion', emotion: '6-10시간', id: '2' },
        { name: 'emotion', emotion: '10시간 이상', id: '3' },
      ],
    },
    {
      question: { id: 2, Question: '오늘 댕댕이와의 산책 횟수는?' },
      answer: [
        { name: 'emotion', emotion: '1번', id: '0' },
        { name: 'emotion', emotion: '2번', id: '1' },
        { name: 'emotion', emotion: '3번', id: '2' },
        { name: 'emotion', emotion: '안함', id: '3' },
      ],
    },
    {
      question: { id: 3, Question: '오늘 댕댕이에게 간식 준 횟수는?' },
      answer: [
        { name: 'emotion', emotion: '1번', id: '0' },
        { name: 'emotion', emotion: '2-3번', id: '1' },
        { name: 'emotion', emotion: '4번 이상', id: '2' },
        { name: 'emotion', emotion: '안줌', id: '3' },
      ],
    },
  ];

  const [testAnswer, setTestAnswer] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  console.log(testAnswer);

  const clickButton = (name, value) => {
    setTestAnswer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function AnswerList({ answerlist, clickButton, questionNum, answerNum }) {
    return (
      <Button
        width="80px"
        height="80px"
        bg={
          testAnswer[questionNum] === answerNum ? 'var(--main)' : 'var(--cream)'
        }
        radius="50%"
        color="var(--darkcream)"
        size="15px"
        margin="0 10px 0 0"
        cursor="pointer"
        _onClick={() => {
          clickButton(questionNum, answerNum);
        }}
      >
        {answerlist.emotion}
      </Button>
    );
  }

  function TestList({ questionlist, questionNum, clickButton }) {
    return (
      <EmotionTestWapper>
        <Text type="subTitle" color="var(--darkcream)" margin="45px 0 0 0">
          {questionlist.question.Question}
        </Text>
        <TestContent>
          {questionlist.answer.map((answerlist, index) => {
            return (
              <AnswerList
                answerlist={answerlist}
                clickButton={clickButton}
                questionNum={questionNum}
                answerNum={index}
              />
            );
          })}
        </TestContent>
      </EmotionTestWapper>
    );
  }

  return (
    <>
      {testQnA.map((questionlist, index) => {
        return (
          <TestList
            questionlist={questionlist}
            questionNum={index}
            clickButton={clickButton}
          />
        );
      })}
    </>
  );
};

const EmotionTestWapper = styled.div`
  width: 470px;
  height: 230px;
  background-color: var(—lightcream);
  border-radius: 30px;
  border: 2px solid var(—cream);
  margin-top: 25px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestContent = styled.div``;
