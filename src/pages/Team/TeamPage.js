import React from 'react';
import styled from 'styled-components';

// components
import { Header, Navbar, Text, Container } from '../../common/components';
import { TeamMembers } from './TeamMembers';

const TeamPage = () => {
  return (
    <Container height="100vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        Elice 3기 14팀 Creme de la Creme의 멤버를 소개합니다.
      </Text>
      <TeamMemberWrapper>
        <TeamMembers />
      </TeamMemberWrapper>
    </Container>
  );
};

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export default TeamPage;
