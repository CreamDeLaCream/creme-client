import React from 'react';
import styled from 'styled-components';

export default function HighlightText({
  color = 'var(--main)',
  children,
  ...rest
}) {
  return (
    <Highlight color={color} {...rest}>
      {children}
    </Highlight>
  );
}

const Highlight = styled.span`
  background-color: ${(props) => props.color};
`;
