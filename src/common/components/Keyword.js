import React, { useState } from 'react';

// Data
import KeywordData from './KeywordData';

// Components
import Button from './Button';

export function Keywords({ typekeywords }) {
  return (
    <Button
      // width="70px"
      height="23px"
      bg="var(--darkcream)"
      color="var(--white)"
      radius="10px"
      margin="0 5px 3px 0"
    >
      <span style={{ fontFamily: 'IBM Plex Sans KR' }}>{typekeywords}</span>
    </Button>
  );
}

// character가 없을 경우엔 typekeywords를 쓰겠다.
// keyword 랑 keywords 변경

const Keyword = () => {
  let [keywordList, setKeywordList] = useState(KeywordData);

  return (
    <>
      {keywordList
        .map((e) => e.character)
        .map((typekeywords, i) => {
          return <Keywords typekeywords={typekeywords} />;
        })}
    </>
  );
};

export default Keyword;
