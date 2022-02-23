import React, { useState } from 'react';

// Data
import KeywordData from './KeywordData';

// Components
import Button from './Button';

const Keyword = () => {
  let [keywordList, setKeywordList] = useState(KeywordData);

  function Keywords({ typekeywords }) {
    return (
      <Button
        width="70px"
        height="23px"
        bg="var(--main)"
        color="var(--white)"
        radius="10px"
        margin="0 5px 3px 0"
      >
        {typekeywords.character}
      </Button>
    );
  }
  return (
    <>
      {keywordList.map((typekeywords, i) => {
        return <Keywords typekeywords={typekeywords} />;
      })}
    </>
  );
};

export default Keyword;
