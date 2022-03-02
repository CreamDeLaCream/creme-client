import React from 'react';
import { Text, Button, Grid, Input, Image } from '../../common/components';
import styled from 'styled-components';

const AddPetModal = () => {
  return (
    <AddPetWrapper>
      <Grid display="flex" justifyContent="center" margin="1rem 0 3rem 0">
        <Image shape="bigcircle" size="14" />
      </Grid>

      <Grid is_flex>
        <Text type="subTitle" color="var(--main)">
          댕댕이의 이름을 입력해주세요.
        </Text>
      </Grid>
      <Grid margin="0 0 3rem 0">
        {/* <Input placeholder="댕댕이의 이름을 입력해주세요." /> */}
        <Input />
      </Grid>
      <Grid is_flex>
        <Text type="subTitle" color="var(--main)">
          댕댕이의 나이를 입력해주세요.
        </Text>
      </Grid>
      <Grid margin="0 0 3rem 0">
        {/* <Input placeholder="댕댕이의 나이를 입력해주세요." /> */}
        <Input />
      </Grid>
      <Grid is_flex margin="0 0 3rem 0">
        <Text type="subTitle" color="var(--main)">
          댕댕이의 키워드를 입력해주세요.
        </Text>
      </Grid>

      <Button
        width="100%"
        padding="0.5rem"
        bg="var(--main)"
        color="var(--white)"
        radius="5px"
        cursor
        // _onClick={() => history.push('/main')}
      >
        <Text type="button" color="var(--white)">
          업로드
        </Text>
      </Button>
    </AddPetWrapper>
  );
};

const AddPetWrapper = styled.div``;

export default AddPetModal;
