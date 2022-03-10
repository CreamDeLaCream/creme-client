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
    // 3: null,
  },
};

// middleware
const addEmotionAX = (name, value, slug, answer) => {
  return function (dispatch, getState, { history }) {
    console.log(getState.emotionResult);
    // const formData = new FormData();
    // const answer = [
    //   {
    //     choice_id: 1,
    //   },
    //   {
    //     choice_id: 2,
    //   },
    //   {
    //     choice_id: 1,
    //   },
    //   {
    //     choice_id: 2,
    //   },
    // ];
    // formData.append('emotionResult', answer);
    // formData.append('slug', slug);
    // formData.append('emotionResult', answer);
    // formData.append('emotionResult', emotionResult);
    // api
    //   .post(`analysis/human?slug=${slug}`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    api
      .post(`analysis/human?slug=${slug}`, {
        slug: slug,
        answer: [
          {
            choice_id: 3,
            // choice_id: getState.emotionResult[1],
          },
          {
            choice_id: 2,
            // choice_id: getState.emotionResult[2],
          },
          {
            choice_id: 1,
            // choice_id: getState.emotionResult[3],
          },
        ],
      })
      .then((res) => {
        console.log('res.data redux', res.data);
        res.data.forEach(() => {});
        // res.data.forEach(() => {
        //   const pet_image_list = {
        //     dog_emotion: res.data.dog_emotion,
        //     dog_emotion_percentage: res.data.dog_emotion_percentage,
        //     human_emotion: res.data.human_emotion,
        //     human_emotion_percentage: res.data.human_emotion_percentage,
        //     chemistry_percentage: res.data.chemistry_percentage,
        //     // image: `${api.baseURL}/${res.data.slug}`,
        //   };
        // });

        // dispatch(addEmotionAX(name, value, slug, answer));
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
    [INITIALIZE_EMOTION]: (state, action) => {
      produce(state, (draft) => {
        draft.emotionResult = {
          0: null,
          1: null,
          2: null,
          // 3: null,
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
