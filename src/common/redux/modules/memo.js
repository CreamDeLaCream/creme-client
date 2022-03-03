import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_MEMO = 'ADD_MEMO';
const SET_MEMO = 'SET_MEMO';

// Action Creator
const addMemo = createAction(ADD_MEMO, (petmemo) => ({ petmemo }));
const setMemo = createAction(SET_MEMO, (memo_list) => ({ memo_list }));

// InitialState
const initialState = {
  list: [],
};

// middleware
const setMemoAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/api/analysis/pet`)
      .then((res) => {
        let memo_list = [];
        res.data.forEach((_post) => {
          let post = {
            post_id: _post.id,
            name: _post.name,
            profile_image: _post.profile_image,
            content: _post.content,
          };
          memo_list.push(post);
        });
        dispatch(setMemo(memo_list));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

const addMemoAX = ({ slug, petmemo }) => {
  return function (dispatch, getState, { history }) {
    let formData = new FormData();
    formData.append('slug', slug);
    formData.append('memo', petmemo);
    api
      .post(`/analysis/pet`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // dispatch(writeTextPage(response.data.comments));
        dispatch(addMemo(response.data.memos));
        // window.location.reload();
      })
      .catch((error) => {
        console.log('메모 전송 실패', error);
      });
  };
};

// Reducer
export default handleActions(
  {
    [ADD_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.comment.push(action.payload.post);
      }),
    [SET_MEMO]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.postlist);
      }),
  },
  initialState,
);

const actionCreators = {
  addMemo,
  addMemoAX,
  setMemo,
  setMemoAX,
};

export { actionCreators };
