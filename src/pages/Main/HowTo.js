import React from 'react';
import styled from 'styled-components';

// components
import { Text, Grid } from '../../common/components';

const Howto = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  return (
    <>
      <Grid flexDirection="column">
        <Grid is_flex margin="1.3rem auto">
          <Text type="subTitle" color="var(--main)">
            이미지 업로드 하는 방법
          </Text>
        </Grid>

        <Grid>
          <Text type="desc" color="var(--main)" margin="10px 0 0 0">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
          <ImageItems>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/dog10.png`}

              // style={{ margin: '50px 0 0 0' }}
            />
          </ImageItems>
          <Text type="desc" color="var(--main)" margin="10px 0 0 0">
            올바른 예시
          </Text>
        </Grid>
        <Grid>
          <ImageItems>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/dog11.png`}

              // style={{ margin: '50px 0 0 0' }}
            />
          </ImageItems>
          <Text type="desc" color="var(--main)" margin="10px 0 0 0">
            올바르지 않은 예시
          </Text>
        </Grid>

        {/* <Grid>
          <Grid is_flex>
            <ImageItems />
            <ImageItems />
          </Grid>
          <Text type="desc" color="var(--main)">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
        </Grid>

        <Grid>
          <Grid is_flex>
            <ImageItems />
            <ImageItems />
          </Grid>
          <Text type="desc" color="var(--main)">
            사진은 정면 사진으로 강아지의 얼굴이 잘 보이도록 업로드 해주세용{' '}
          </Text>
        </Grid> */}
      </Grid>
    </>
  );
};

const ImageItems = styled.div`
  width: 100%;
  height: 13rem;
  border: 1px solid var(--gray);
  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;
  }
`;

export default Howto;
