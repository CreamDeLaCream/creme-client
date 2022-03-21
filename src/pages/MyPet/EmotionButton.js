import React, { useState } from 'react';

// components
import { Keywords } from '../../common/components';

const EmotionButton = () => {
  const DogEmotion = ['happy', 'sad', 'fear', 'angry'];
  const [] = useState;
  return (
    <>
      {DogEmotion.map((dogemotions, i) => {
        return <Keywords typekeywords={dogemotions} />;
      })}
    </>
  );
};

export default EmotionButton;
