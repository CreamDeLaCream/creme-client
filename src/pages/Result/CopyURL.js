import React from 'react';
import { Button, Text } from '../../common/components';

const CopyURL = () => {
  const LinkCopy = (text) => {
    // 흐름 1.
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('클립보드에 복사되었습니다.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported('copy')) {
        return alert('복사하기가 지원되지 않는 브라우저입니다.');
      }

      // 흐름 3.
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = 'fixed';

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand('copy');
      // 흐름 6.
      document.body.removeChild(textarea);
      alert('클립보드에 복사되었습니다.');
    }
  };

  return (
    <>
      <Button
        width="10rem"
        padding="0.5rem"
        bg="var(--main)"
        color="var(--white)"
        radius="5px"
        _onClick={() => LinkCopy(window.location.href)}
        cursor
      >
        <Text type="button" color="var(--white)">
          URL 복사하기
        </Text>
      </Button>
    </>
  );
};

export default CopyURL;
