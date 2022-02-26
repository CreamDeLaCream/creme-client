import React from 'react';
import styled from 'styled-components';
import { Keywords } from '../../common/components/Keyword';

export const UserCard = () => {
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
        <UserName>
          반가운 <span style={{ color: 'var(--blackcream)' }}>레아</span>님의{' '}
          <span style={{ color: 'var(--main)' }}>라이프스타일</span>
        </UserName>

        <KeywordsWrapper>
          {CrrentUserKeywordData.map((userlifestyle, i) => {
            return (
              <>
                <Keywords typekeywords={userlifestyle} />
              </>
            );
          })}
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
