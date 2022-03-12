import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_MEMO = 'ADD_MEMO';
const INITIALIZE_MEMO = 'INITIALIZE_MEMO';

// Action Creator
const addMemo = createAction(ADD_MEMO, (petmemo) => ({
  petmemo,
}));
const initializeMemo = createAction(INITIALIZE_MEMO, () => ({}));

// InitialState
const initialState = {
  petmemo: [],
};

// middleware
const addMemoAX = ({ slug, memo, is_like }) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token');
    const header = {};
    if (token) {
      header.Authorization = `Bearer ${token}`;
      api
        .post(
          `analysis/result/completed`,
          { slug: slug, memo: memo, is_favorite: is_like },
          { headers: header },
        )
        .then((res) => {
          // console.log(res);
          // dispatch(writeTextPage(response.data.comments));
          dispatch(addMemo(slug, memo, is_like));
          // window.location.reload();
        })
        .catch((err) => {
          console.log('메모 전송 실패', err);
        });
    }
  };
};

// Reducer
export default handleActions(
  {
    [ADD_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.petmemo = action.payload.petmemo;
      }),
    [INITIALIZE_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.petmemo = [];
      }),
    // [SET_MEMO]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.list.push(...action.payload.postlist);
    //   }),
  },
  initialState,
);

const actionCreators = {
  addMemo,
  addMemoAX,
  initializeMemo,
  // setMemo,
  // setMemoAX,
};

export { actionCreators };
