import React from 'react';
import styled from 'styled-components';

// components
import { Text, Grid, Button } from '../../common/components';

// icons
import { BsExclamationCircle, BsCameraFill } from 'react-icons/bs';
import { AiFillExclamationCircle, AiFillWarning } from 'react-icons/ai';

const Howto = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  return (
    <>
      <Grid flexDirection="column">
        <Grid>
          <Button
            width="4rem"
            height="4rem"
            bg="var(--white)"
            radius="50%"
            border="var(--darkcream)"
          >
            <BsCameraFill size="1.5rem" color="var(--darkcream)" />
          </Button>
        </Grid>

        <Grid>
          <Text
            type="subTitle"
            color="var(--blackcream)"
            margin="15px 0 10px 0"
          >
            댕댕이의 얼굴이 정면으로 보이도록 업로드 하세요
          </Text>
          <ImageItems>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/dog10.png`}

              // style={{ margin: '50px 0 0 0' }}
            />
          </ImageItems>
          <Text type="desc" color="var(--main)" margin="15px 0 15px 0">
            <AiFillExclamationCircle /> 올바른 예시
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
          <Text type="desc" color="var(--main)" margin="15px 0 15px 0">
            <AiFillWarning /> 올바르지 않은 예시
          </Text>
        </Grid>
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
