import React from 'react';

// components
import Button from './Button';

const Keywords = ({ shape, typekeywords }) => {
  if (shape === 'circle') {
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
  }
  return (
    <Button
      height="23px"
      bg="var(--darkcream)"
      color="var(--white)"
      radius="10px"
      margin="0 5px 3px 0"
    >
      <span style={{ fontFamily: 'IBM Plex Sans KR' }}>{typekeywords}</span>
    </Button>
  );
};

export default Keywords;
