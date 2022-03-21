import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';
import { useSelector } from 'react-redux';

// components
import { Button, Keywords } from '../../common/components';
import api from '../../common/utils/API';

const UserCard = () => {
  const user = useSelector((state) => state.user);
  const [userKeywords, setUserKeywords] = useState(null);
  useEffect(() => {
    api.get(`users/${user?.user?.user_id}`).then((res) => {
      setUserKeywords(res.data.user_keyword);
    });
  }, [user?.user?.user_id]);

  if (userKeywords === null) {
    return <></>;
  }
  return (
    <MyUserCard>
      <UserContent>
        <p>Partner</p>
        <UserName
          onClick={() => {
            if (user?.is_login) {
              //
            } else {
              //
            }
          }}
        >
          {user?.is_login
            ? `반가운 ${user?.user.username}님의 라이프스타일`
            : '당신의 라이프스타일은 어떠한가요?'}
        </UserName>

        <KeywordsWrapper>
          {userKeywords.length ? (
            userKeywords.map((userlifestyle, i) => {
              return <Keywords typekeywords={userlifestyle} />;
            })
          ) : (
            <Button
              height="23px"
              bg="var(--white)"
              color="var(--main)"
              border="solid 1px var(--cream)"
              radius="10px"
              margin="4px 0 0 0"
              cursor
              onClick={() => {
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
  color: var(—darkcream);
`;

const KeywordsWrapper = styled.div`
  margin-top: 10px;
`;

export default UserCard;
