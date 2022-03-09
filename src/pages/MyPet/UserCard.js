import React from 'react';
import styled from 'styled-components';

// components
import { Keywords } from '../../common/components/Keyword';
import { Button } from '../../common/components';

export const UserCard = ({ isLoggedIN, history }) => {
  const CrrentUserKeywordData = [
    '28세',
    '부모님과 함께 삼',
    '초년생',
    '야근잦음',
    '주말 하루는 약속',
    '개인시간 부족',
    '썸남있음',
    '썸남 때문에 싱숭생숭',
    'INFP',
  ];
  return (
    <MyUserCard>
      <UserContent>
        <p>Partner</p>
        <UserName
          isLoggedIN
          onClick={() => {
            if (isLoggedIN) {
              //
            } else {
              //
            }
          }}
        >
          {isLoggedIN
            ? '반가운 레아님의 라이프스타일'
            : '당신의 라이프스타일은 어떠한가요?'}
        </UserName>

        <KeywordsWrapper>
          {isLoggedIN ? (
            CrrentUserKeywordData.map((userlifestyle, i) => {
              return <Keywords typekeywords={userlifestyle} />;
            })
          ) : (
            <Button
              height="23px"
              bg="var(--white)"
              // bg="rgba(245, 234, 214, 0.46)"
              color="var(--main)"
              border="solid 1px var(--cream)"
              radius="10px"
              margin="4px 0 0 0"
              onClick={() => {
                console.log('넘어감');
                history.push('/adduserlife');
              }}
            >
              라이프스타일 등록하기
            </Button>
          )}
        </KeywordsWrapper>
      </UserContent>
    </MyUserCard>
  );
};

const MyUserCard = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin-top: 10px;

  background-color: var(--bggray);
  border: solid 1px var(--cream);
  border-radius: 15px;
`;

const UserContent = styled.div`
  width: 500px;
  margin-left: 50px;
  color: var(--main);

  p {
    margin-top: 20px;
    font-size: 20px;
  }
`;

const UserName = styled.div`
  font-size: 30px;
  color: var(--darkcream);
`;

const KeywordsWrapper = styled.div`
  margin-top: 10px;
`;
