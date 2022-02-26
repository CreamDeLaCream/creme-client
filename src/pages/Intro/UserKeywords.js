import React from 'react';
import { Keywords } from '../../common/components/Keyword';

export const UserKeywords = () => {
  const UserKeywordData = [
    '28세',
    '부모님과 함께 삼',
    '초년생',
    '야근잦음',
    '주말 하루는 약속',
    '썸남있음',
  ];

  return (
    <>
      {UserKeywordData.map((usertype, i) => {
        const isKeywordEnter = i % 3 === 2; // 3개씩 줄바꿈
        return (
          <>
            <Keywords typekeywords={usertype} />
            {isKeywordEnter && <br />}
          </>
        );
      })}
    </>
  );
};
