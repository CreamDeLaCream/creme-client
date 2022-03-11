import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_EMOTION = 'ADD_EMOTION';
const SET_RESULT = 'SET_RESULT';
const INITIALIZE_EMOTION = 'INITIALIZE_EMOTION';

// Action Creator
const addEmotion = createAction(ADD_EMOTION, (ques, ans, slug) => ({
  ques,
  ans,
  slug,
}));
const setResult = createAction(SET_RESULT, (result) => ({
  result,
}));
const initializeEmotion = createAction(INITIALIZE_EMOTION, () => ({}));

// InitialState
const initialState = {
  emotionResult: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
  result: {},
};

// middleware
const addEmotionAX = (name, value, slug) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`analysis/human?slug=${slug}`, {
        slug: slug,
        answer: [
          {
            choice_id: getState().analysis.emotionResult[0],
          },
          {
            choice_id: getState().analysis.emotionResult[1],
          },
          {
            choice_id: getState().analysis.emotionResult[2],
          },
          {
            choice_id: getState().analysis.emotionResult[3],
          },
        ],
      })
      .then((res) => {
        console.log('asdf', res);
        const result = {
          answers: res.data.answers,
          chemistry_percentage: res.data.chemistry_percentage,
          created_at: res.data.created_at,
          dog: res.data.dog,
          dog_age: res.data.dog_age,
          dog_emotion: res.data.dog_emotion,
          dog_emotion_description: res.data.dog_emotion_description,
          dog_emotion_percentage: res.data.dog_emotion_percentage,
          dog_coordinate: res.data.dog_coordinate,
          dog_name: res.data.dog_name,
          human_emotion: res.data.human_emotion,
          human_emotion_percentage: res.data.human_emotion_percentage,
          image: `${process.env.REACT_APP_BACKEND_URL}${res.data.image}`,
          is_chemistry_negative: res.data.is_chemistry_negative,
          is_human_emotion_negative: res.data.is_human_emotion_negative,
          needs: res.data.needs,
          slug: res.data.slug,
          status: res.data.status,
          // ...user,
        };

        dispatch(setResult(result));
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
        console.log('action', action);
      }),
    [SET_RESULT]: (state, action) =>
      produce(state, (draft) => {
        draft.result = action.payload.result;
        // draft.list.push(...action.payload.result_list);
      }),
    [INITIALIZE_EMOTION]: (state, action) => {
      produce(state, (draft) => {
        draft.emotionResult = {
          0: null,
          1: null,
          2: null,
          3: null,
        };
        // draft.result_list = action.payload.result_list;
      });
    },
  },
  initialState,
);

const actionCreators = {
  addEmotion,
  initializeEmotion,
  addEmotionAX,
  setResult,
};

export { actionCreators };
