import React, { useState } from 'react';
import styled from 'styled-components';

const TestItems = () => {
  const [emotionResult, setEmotionResult] = useState([]);
  const [emotionSelected, setEmotionSelected] = useState(0);

  const emotions = [
    { name: 'emotion', emotion: 'happy', id: '1' },
    { name: 'emotion', emotion: 'sad', id: '2' },
    { name: 'emotion', emotion: 'angry', id: '3' },
    { name: 'emotion', emotion: 'bored', id: '4' },
  ];

  const handleEmotion = (e, idx) => {
    setEmotionResult({
      ...emotionResult,
      [e.target.name]: e.target.emotion,
    });
    console.log(e.target.name);
    setEmotionSelected(idx);
  };

  function Item({ itemData }) {
    return <TestAnswer onClick={handleEmotion}>{itemData.emotion}</TestAnswer>;
  }

  return (
    <>
      {emotions.map((item, index) => {
        return <Item itemData={item} />;
      })}
    </>
  );
};

const TestAnswer = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;

  margin-right: 20px;

  background-color: var(--main);
  border-radius: 50%;

  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: var(--cream);
  }
`;

export default TestItems;
