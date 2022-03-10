import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import api from '../../utils/API';
import { setCookie, getCookie } from '../../utils/Cookie';
import jwtDecode from 'jwt-decode';

// Action
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// Action Creator
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));

// initial State
const initialState = {
  user: null,
  is_login: false,
  is_cookie: false,
};

// middleware

// 카카오 로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/users/kakao/callback?code=${code}`)
      .then((res) => {
        // console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.access;
        const REFRESH_TOKEN = res.data.refresh;
        // const { id, username } = jwtDecode(ACCESS_TOKEN);
        sessionStorage.setItem('token', ACCESS_TOKEN);
        sessionStorage.setItem('refresh', REFRESH_TOKEN);
        // const token = sessionStorage.getItem('token');

        setCookie('accessToken', ACCESS_TOKEN, {
          path: '/',
          maxAge: 1800, // 30분
        });
        setCookie('refreshToken', REFRESH_TOKEN, {
          path: '/',
          maxAge: 604800, // 7일
        });

        history.replace('/');

      })
      .catch((error) => {
        console.log('user 정보 조회 에러', error);
        window.alert('로그인에 실패하였습니다.1');
        history.replace('/'); // 로그인 실패하면 서비스 소개 화면으로 돌려보냄
      });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token');

    if (token) {
      const header = {
        Authorization: `Bearer ${token}`,
      };
      api
        .get('users/', { headers: header })
        .then((res) => {
          const user = {
            user_id: res.data.id,
            username: res.data.username,
          };
          console.log('2asdfasd3', user);
          if (res.data) {
            dispatch(
              setUser({
                user_id: res.data.user_id,
                username: res.data.username,
              }),
            );
          } else {
            window.alert(`로그인에 실패하였습니다.`);
            dispatch(loginCheck(...user));
          }
        })
        .catch((e) => {
          console.log('에러발생', e);
        });
    }
  };
};

const kakaoLogOut = (code) => {
  return function (dispatch, getState, { history }) {
    api({
      method: 'POST',
      url: `/users/logout`,
    })
      .then((res) => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('refresh');
      })
      .catch((err) => {
        window.alert('로그아웃에 실패하였습니다.');
        history.replace('/'); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie('is_login');
        // sessionStorage.removeItem('token');
        draft.user = null;
        draft.is_login = false;
      }),
    // [LOG_OUT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.user = null;
    //     draft.is_login = false;
    //   }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        let cookie = action.payload.is_login;
        setCookie('JSESSIONID', cookie);
        draft.is_cookie = true;
      }),
  },
  initialState,
);

const actionCreators = {
  logOut,
  getUser,
  // getUserAX,
  kakaoLogin,
  loginCheck,
  kakaoLogOut,
};

export { actionCreators };
