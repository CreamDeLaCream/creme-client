import React from 'react';
import { Button } from '../../common/components';

export const FilterRecord = () => {
  const myPetEmotion = ['happy', 'sad', 'scared', 'angry'];
  return (
    <>
      {myPetEmotion.map((emotionwords, i) => {
        return (
          <Button
            height="23px"
            bg="var(--darkcream)"
            color="var(--white)"
            radius="10px"
            margin="30px 5px 0 5px"
            emotionwords={emotionwords}
          >
            {emotionwords}
          </Button>
        );
      })}
    </>
  );
};
