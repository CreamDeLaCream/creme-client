import React, { useState } from 'react';

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
