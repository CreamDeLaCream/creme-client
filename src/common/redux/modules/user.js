import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

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
};

// middleware
// 카카오 로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/users/kakao/callback?code=${code}`)
      .then((res) => {
        // console.log('token', res);
        const ACCESS_TOKEN = res.data.access;
        const REFRESH_TOKEN = res.data.refresh;

        sessionStorage.setItem('token', ACCESS_TOKEN);
        sessionStorage.setItem('refresh', REFRESH_TOKEN);

        dispatch(loginCheck(ACCESS_TOKEN));

        history.replace('/');
      })
      .catch((error) => {
        console.log('user 정보 조회 에러', error);
        history.replace('/'); // 로그인 실패하면 서비스 소개 화면으로 돌려보냄
      });
  };
};

// 페이지가 새로고침 되는 상황마다 user check 후 리덕스에 정보 저장
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
          if (res.data) {
            dispatch(setUser({ ...user }));
          } else {
            window.alert(`로그인에 실패하였습니다.`);
            dispatch(loginCheck(sessionStorage.getItem('is_login')));
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
      url: `users/logout`,
    })
      .then((res) => {
        dispatch(logOut());
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
        sessionStorage.setItem('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('refresh');
        sessionStorage.removeItem('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        // let cookie = action.payload.is_login;
        // setCookie('JSESSIONID', cookie);
        // draft.is_cookie = true;
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
