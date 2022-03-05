import React from 'react';

// components
import { Keywords } from '../../common/components/Keyword';

export const EmotionButton = () => {
  const DogEmotion = ['happy', 'sad', 'scared', 'angry'];
  return (
    <>
      {DogEmotion.map((dogemotions, i) => {
        return <Keywords typekeywords={dogemotions} />;
      })}
    </>
  );
};
