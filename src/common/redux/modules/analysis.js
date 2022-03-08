import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_EMOTION = 'ADD_EMOTION';
const INITIALIZE_EMOTION = 'INITIALIZE_EMOTION';

// Action Creator
const addEmotion = createAction(ADD_EMOTION, (ques, ans) => ({ ques, ans }));
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
// const addPetImageAX = ({ name, age, image }) => {
//   return function (dispatch, getState, { history }) {
//     const formData = new FormData();
//     formData.append('dog_name', name);
//     formData.append('dog_age', age);
//     formData.append('image', image);
//     api
//       .post(/analysis/pet, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((response) => {
//         dispatch(addPetImage(response.data.images));
//         // window.location.reload();
//       })
//       .catch((error) => {
//         console.log('이미지 전송 실패', error);
//       });
//   };
// };

// Reducer
export default handleActions(
  {
    [ADD_EMOTION]: (state, action) =>
      produce(state, (draft) => {
        draft.emotionResult[action.payload.ques] = action.payload.ans;
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
};

export { actionCreators };
