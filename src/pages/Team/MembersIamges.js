import React from 'react';
import styled from 'styled-components';

const MembersIamges = () => {
  return (
    <MembersImage>
      <img
        alt=""
        src={process.env.PUBLIC_URL + `/Image/image.png`}
        width="300px"
        height="300px"
      />
    </MembersImage>
  );
};
const MembersImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 13px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  margin-right: 50px;
  margin-top: 10px;
`;

export default MembersIamges;
