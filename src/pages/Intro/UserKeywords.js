import React from 'react';
import { Keywords } from '../../common/components/Keyword';

export const UserKeywords = () => {
  const UserKeywordData = [
    '28세',
    '부모님과 함께 삼',
    '초년생',
    '야근잦음',
    '주말 하루는 약속',
    '개인시간 부족',
    '썸타는 상대 있음',
    '썸 때문에 싱숭생숭',
    'INFP',
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
