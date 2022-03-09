import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_EMOTION = 'ADD_EMOTION';
const INITIALIZE_EMOTION = 'INITIALIZE_EMOTION';

// Action Creator
const addEmotion = createAction(ADD_EMOTION, (ques, ans, slug) => ({
  ques,
  ans,
  slug,
}));
const initializeEmotion = createAction(INITIALIZE_EMOTION, () => {});

// InitialState
const initialState = {
  emotionResult: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
};

// middleware
const addEmotionAX = (name, value, slug) => {
  return function (dispatch, getState, { history }) {
    dispatch(addEmotion(name, value, slug));
    const formData = new FormData();
    formData.append('emotionResult', getState.emotionResult);
    formData.append('slug', slug);
    // const data = { 0: null, 1: null, 2: null, 3: null, slug: {} };
    api
      .put(`analysis/human?slug=${slug}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // window.location.reload();
      })
      .catch((err) => {
        console.log('데이터 전송 실패', err);
      });
  };
};

// Reducer
export default handleActions(
  {
    [ADD_EMOTION]: (state, action) =>
      produce(state, (draft) => {
        draft.emotionResult[action.payload.ques] = action.payload.ans;
        draft.slug = action.payload.slug;
      }),
    [INITIALIZE_EMOTION]: (state, action) => {
      produce(state, (draft) => {
        draft.emotionResult = {
          0: null,
          1: null,
          2: null,
          3: null,
        };
      });
    },
  },
  initialState,
);

const actionCreators = {
  addEmotion,
  initializeEmotion,
  addEmotionAX,
};

export { actionCreators };
