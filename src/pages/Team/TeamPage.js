import React from 'react';
import styled from 'styled-components';

// components
import { Header, Navbar, Text, Container } from '../../common/components';
import TeamMembers from './TeamMembers';

const TeamPage = () => {
  return (
    <TeamPageBg>
      <Container height="100vh">
        <Header />
        <Navbar />
        <Text
          type="mainTitle"
          color="var(--blackcream)"
          fontFamily="IBM Plex Sans KR"
        >
          Elice 3기 14팀 Creme de la Creme의 멤버를 소개합니다.
        </Text>
        <TeamMemberWrapper>
          <TeamIMG>
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/team.jpg`}
              width="100%"
              height="550px"
            />
          </TeamIMG>

          <TeamMembers />
        </TeamMemberWrapper>
      </Container>
    </TeamPageBg>
  );
};

const TeamPageBg = styled.div`
  background-color: var(--bggray);
  width: 100%;
  height: calc(300vh - 100px);
`;

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const TeamIMG = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 15px;
  border: solid 2px var(--cream);
  background-color: var(--main);
  overflow: hidden;
`;

export default TeamPage;
