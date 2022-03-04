import React from 'react';
import { Button } from '../../common/components';

export const FilterRecord = () => {
  const myPetEmotion = ['happy', 'sad', 'scared', 'angry'];
  return (
    <>
      {myPetEmotion.map((emotionwords, i) => {
        <Button
          height="23px"
          bg="var(--main)"
          color="var(--white)"
          radius="10px"
          emotionwords={emotionwords}
        />;
      })}
      ;
    </>
  );
};
