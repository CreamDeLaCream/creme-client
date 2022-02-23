import React, { useState } from 'react';
import styled from 'styled-components';

// Compo
import { Button } from '../../common/components';

const TestItems = () => {
  const [emotionResult, setEmotionResult] = useState([]);
  const [emotionSelected, setEmotionSelected] = useState(0);

  const emotions = [
    { name: 'emotion', emotion: 'happy', id: '0' },
    { name: 'emotion', emotion: 'sad', id: '1' },
    { name: 'emotion', emotion: 'angry', id: '2' },
    { name: 'emotion', emotion: 'bored', id: '3' },
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
    return (
      <Button
        width="80px"
        height="80px"
        bg="var(--cream)"
        radius="50%"
        color="var(--darkcream)"
        size="20px"
        margin="0 10px 0 0"
        onClick={handleEmotion}
      >
        {itemData.emotion}
      </Button>
    );
  }

  return (
    <>
      {emotions.map((item, index) => {
        return <Item itemData={item} />;
      })}
    </>
  );
};

export default TestItems;
