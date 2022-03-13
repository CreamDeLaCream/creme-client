import React from 'react';

//components
import { Button } from '../../common/components';

const Keywords = ({ typekeywords }) => {
  return (
    <Button
      width="4rem"
      height="4rem"
      radius="50%"
      bg="var(--main)"
      color="var(--white)"
      margin="0 5px 3px 0"
    >
      <span style={{ fontFamily: 'IBM Plex Sans KR' }}>{typekeywords}</span>
    </Button>
  );
};

export default Keywords;
