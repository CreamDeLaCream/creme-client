import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_PET_IMAGE = 'ADD_PET_IMAGE';
// const SET_PET_IMAGE = 'SET_PET_IMAGE';
const INITIALIZE_IMAGE = 'INITIALIZE_IMAGE';

// Action Creator
const addPetImage = createAction(ADD_PET_IMAGE, (pet_image) => ({ pet_image }));
// const setPetImage = createAction(SET_PET_IMAGE, (pet_image_list) => ({
//   pet_image_list,
// }));
const initializeImage = createAction(INITIALIZE_IMAGE, () => ({}));

// InitialState
const initialState = {
  list: [],
};

// middleware
const addPetImageAX = ({ name, age, image }) => {
  return function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token');

    const formData = new FormData();
    formData.append('dog_name', name);
    formData.append('dog_age', age);
    formData.append('image', image);
    const header = {
      'Content-Type': 'multipart/form-data',
    };
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
    api
      .post(`/analysis/pet`, formData, { headers: header })
      .then((res) => {
        const petimage = {
          slug: res.data.slug,
          dog_name: res.data.dog_name,
          dog_age: res.data.dog_age,
          image: res.data.image,
        };
        dispatch(addPetImage(petimage));
        history.replace(`/analysis`);
      })
      .catch((err) => {
        window.alert('사진을 다시 확인해주세요.');
      });
  };
};

// const setPetImageAX = ({ slug }) => {
//   return function (dispatch, getState, { history }) {
//     api
//       .get(`analysis/result?slug=${slug}`)
//       .then((res) => {
//         res.data.forEach(() => {
//           const pet_image_list = {
//             dog_emotion: res.data.dog_emotion,
//             dog_emotion_percentage: res.data.dog_emotion_percentage,
//             human_emotion: res.data.human_emotion,
//             human_emotion_percentage: res.data.human_emotion_percentage,
//             chemistry_percentage: res.data.chemistry_percentage,
//           };
//           // pet_image_list.push(petimage);
//           dispatch(setPetImage(pet_image_list));
//           console.log('petimage redux', pet_image_list);
//           console.log('res.data redux', res.data);
//         });
//       })
//       .catch((e) => {
//         console.log('불러오기 에러', e);
//       });
//   };
// };

// const DeleteImageAX = () => {
//   return function (dispatch, getState, { history }) {
//     auth.signOut().then(() => {
//       dispatch(logOut());
//       history.replace('/');
//     });
//   };
// };

// Reducer
export default handleActions(
  {
    [ADD_PET_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.pet_image);
      }),
    // [SET_PET_IMAGE]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.pet_image_list.push(...action.payload.pet_image_list);
    //   }),
    [INITIALIZE_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [];
      }),
  },
  initialState,
);

const actionCreators = {
  addPetImage,
  addPetImageAX,
  // setPetImage,
  // setPetImageAX,
  initializeImage,
};

export { actionCreators };
