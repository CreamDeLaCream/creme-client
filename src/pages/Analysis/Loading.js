import React, { useState } from 'react';
import styled from 'styled-components';

// utill
import useMotion from '../../common/utils/useMotion';

const Loading = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <LoadingText a dark {...useMotion('down', 1, 0.5)}>
      SUMMER의 감정 상태를 분석 중입니다.
      <br />
      분석 결과를 기다리는 동안 간단한 테스트를 해볼까요?
    </LoadingText>
  );
};

const LoadingText = styled.div``;

export default Loading;
