import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import api from '../../utils/API';
import { setCookie, getCookie, deleteCookie } from '../../utils/Cookie';

// Action
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// Action Creator
const setUser = createAction(SET_USER, (user) => ({ user }));
// const logOut = createAction(LOGOUT, () => {});
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
// initial State
const initialState = {
  user: null,
  is_login: false,
  // is_login: true,
  // is_cookie: false,
};

// middleware
// const getUserAX = () => {
//   return function (dispatch, getState, { history }) {
//     console.log('getuser 들어옴');
//     api
//       // (
//       .get('/users/login')
//       .then((res) => {
//         console.log(res);
//         // let token = res.res;
//         // sessionStorage.setItem('token', token);
//         dispatch(
//           setUser({
//             is_res_token: res.res,
//             user_id: res.user_id,
//             user_email: res.user_email,
//           }),
//         );
//         history.replace('/');
//         window.alert(`환영합니다!`);
//       })
//       .catch((e) => {
//         console.log('유저 정보 확인 에러', e);
//       });
//   };
// };

// 카카오 로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log('test');
    api({
      method: 'GET',
      // url: `/Oauth/user/kakao/callback?code=${code}`,
      url: `/users/kakao/callback?code=${code}`,
      //
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.data.access;
        const REFRESH_TOKEN = res.data.refresh;

        // localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함
        sessionStorage.setItem('token', ACCESS_TOKEN);
        sessionStorage.setItem('refresh', REFRESH_TOKEN);
        const token = sessionStorage.getItem('token');

        history.replace('/'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        // const header = {
        //   Authorization: `Bearer ${token}`,
        // };
        // api
        //   .get('/users', {
        //     headers: header,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //     dispatch(
        //       setUser({
        //         user_nickname: res.data.username,
        //         user_id: res.data.id,
        //         // user_email: res.data.user_email,
        //       }),
        //     );
        //     window.alert(`로그인에 성공하였습니다.`);
        //     window.location.replace('/');
        //     //     window.location.replace('/');
        //   });
      })
      .catch((error) => {
        console.log('user 정보 조회 에러', error);
        window.alert('로그인에 실패하였습니다.');
        history.replace('/'); // 로그인 실패하면 서비스 소개 화면으로 돌려보냄
      });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token');

    if (token) {
      const header = {
        Authorization: `Bearer Token ${token}`,
      };
      api
        .get('users/', { headers: header })

        .then((res) => {
          if (res.data) {
            dispatch(
              setUser({
                is_login: true,
                username: res.data.username,
                user_id: res.data.user_id,
              }),
            );
          } else {
            window.alert(`로그인에 실패하였습니다.`);
            dispatch(kakaoLogOut());
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
        console.log(draft.user);
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        sessionStorage.removeItem('token');
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
        // let cookie = action.payload.is_login;
        // setCookie("JSESSIONID", cookie);
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
