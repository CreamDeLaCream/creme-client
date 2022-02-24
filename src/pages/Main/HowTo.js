import React from 'react';
import styled from 'styled-components';

// components
import { Text, Grid } from '../../common/components';

const Howto = () => {
  return (
    <>
      <Grid flexDirection="column">
        <Grid is_flex margin="2rem auto">
          <Text type="subTitle" color="main">
            이미지 업로드 하는 방법
          </Text>
        </Grid>

        <Grid margin="1rem auto">
          <Grid is_flex>
            <ImageItems />
            <ImageItems />
          </Grid>

          <Text type="desc" color="main">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
        </Grid>

        <Grid>
          <Grid is_flex>
            <ImageItems />
            <ImageItems />
          </Grid>
          <Text type="desc" color="main">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
        </Grid>

        <Grid>
          <Grid is_flex>
            <ImageItems />
            <ImageItems />
          </Grid>
          <Text type="desc" color="main">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

const ImageItems = styled.div`
  width: 48%;
  height: 6rem;
  border: 2px solid var(--gray);
`;

export default Howto;
