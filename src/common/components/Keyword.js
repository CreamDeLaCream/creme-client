import React from 'react';

// components
import Keywords from './Keywords';

// character가 없을 경우엔 typekeywords를 쓰겠다.
// keyword 랑 keywords 변경

const Keyword = ({ keywordList }) => {
  return (
    <>
      {keywordList.map((typekeywords, i) => {
        return <Keywords typekeywords={typekeywords} />;
      })}
    </>
  );
};

export default Keyword;
