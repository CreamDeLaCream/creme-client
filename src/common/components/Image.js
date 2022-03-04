import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { _onClick, cursor, radius, M_width, shape, src, size } = props;
  const styles = {
    cursor,
    radius,
    M_width,
    src,
    size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles} onClick={_onClick}></ImageCircle>;
  }
  if (shape === 'bigcircle') {
    return <ImageBigCircle {...styles} onClick={_onClick}></ImageBigCircle>;
  }
  return <ImageDefault {...styles}></ImageDefault>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://mblogthumb-phinf.pstatic.net/20141020_84/ribbonchick_1413740254883HpC05_JPEG/01.jpg?type=w420',
  size: 3.6,
  radius: '',
  _onClick: () => {},
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 0.6rem;
  min-width: var(--size);
  ${({ theme }) => theme.device.mobile} {
    --size: 6.5rem;
  }
`;

const ImageBigCircle = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 0.6rem;
  min-width: var(--size);
  ${({ theme }) => theme.device.mobile} {
    --size: 12rem;
  }
`;

export default Image;
