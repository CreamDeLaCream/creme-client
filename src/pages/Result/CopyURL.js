import React from 'react';

// components
import { Button } from '../../common/components';

// icons
import { BsShareFill } from 'react-icons/bs';

const LinkCopy = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('클립보드에 복사되었습니다.');
      })
      .catch(() => {
        alert('복사를 다시 시도해주세요.');
      });
  }
};

const CopyURL = () => {
  return (
    <>
      <Button
        circle
        foldSize
        size="3.5"
        bg="var(--white)"
        border="0.15rem solid var(--darkcream)"
        is_flex_center
        cursor
        onClick={() => LinkCopy(window.location.href)}
      >
        <BsShareFill size="1.4rem" color="var(--darkcream)" />
      </Button>
    </>
  );
};

export default CopyURL;
