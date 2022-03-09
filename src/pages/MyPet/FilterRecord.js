import React from 'react';
import { Button } from '../../common/components';
import { myPetEmotion } from './MyPetPage';

export const FilterRecord = ({ clickedEmotion, onClickEmotion }) => {
  return (
    <>
      {myPetEmotion.map((emotionwords, i) => {
        return (
          <Button
            width="45px"
            height="45px"
            // size="18px"
            bg={
              clickedEmotion.indexOf(emotionwords) !== -1
                ? 'var(--darkcream)'
                : 'var(--cream)'
            }
            color="var(--white)"
            radius="50%"
            size="12px"
            margin="20px 5px 0 5px"
            cursor
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
