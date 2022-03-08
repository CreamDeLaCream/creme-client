import React from 'react';
import { Button } from '../../common/components';
import { myPetEmotion } from './MyPetPage';

export const FilterRecord = ({ clickedEmotion, onClickEmotion }) => {
  return (
    <>
      {myPetEmotion.map((emotionwords, i) => {
        return (
          <Button
            height="23px"
            size="18px"
            bg={
              clickedEmotion.indexOf(emotionwords) !== -1
                ? 'var(--darkcream)'
                : 'var(--cream)'
            }
            color="var(--white)"
            radius="10px"
            margin="30px 5px 0 5px"
            emotionwords={emotionwords}
            onClick={() => {
              onClickEmotion(emotionwords);
            }}
          >
            {emotionwords}
          </Button>
        );
      })}
    </>
  );
};
