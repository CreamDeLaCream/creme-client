import React, { useState } from 'react';

// components
import { Keywords } from '../../common/components/Keyword';

export const EmotionButton = () => {
  const DogEmotion = ['happy', 'sad', 'scared', 'angry'];
  const [] = useState;
  return (
    <>
      {DogEmotion.map((dogemotions, i) => {
        return <Keywords typekeywords={dogemotions} />;
      })}
    </>
  );
};
