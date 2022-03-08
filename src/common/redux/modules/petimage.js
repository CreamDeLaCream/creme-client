import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_PET_IMAGE = 'ADD_PET_IMAGE';
const SET_PET_IMAGE = 'SET_PET_IMAGE';
// const RESET_PET_IMAGE = 'RESET_PET_IMAGE';
const INITIALIZE_IMAGE = 'INITIALIZE_IMAGE';

// Action Creator
const addPetImage = createAction(ADD_PET_IMAGE, (pet_image) => ({ pet_image }));
const setPetImage = createAction(SET_PET_IMAGE, (pet_image_list) => ({
  pet_image_list,
}));
const initializeImage = createAction(INITIALIZE_IMAGE, () => {});
// const resetPetImage = createAction(RESET_PET_IMAGE, (pet_image_list) => ({
//   pet_image_list,
// }));

// InitialState
const initialState = {
  list: [],
};

// middleware
const addPetImageAX = ({ name, age, image }) => {
  return function (dispatch, getState, { history }) {
    const formData = new FormData();
    formData.append('dog_name', name);
    formData.append('dog_age', age);
    formData.append('image', image);
    api
      .post(`/analysis/pet`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log(res.data.slug);
        // dispatch(writeTextPage(res.data.comments));
        // window.location.reload();

        const petimage = {
          slug: res.data.slug,
          dog_name: res.data.dog_name,
          dog_age: res.data.dog_age,
          image: res.data.image,

          // url: `/${res.data.slug}`,
          // image: `${api.baseURL}/${_post.slug}`,
        };
        dispatch(addPetImage(petimage));
        // pet_image_list.push(petimage);
        // console.log('petimage redux', petimage);
        // console.log('pet_image_list', pet_image_list);
      })
      .catch((error) => {
        console.log('이미지 전송 실패', error);
      });
  };
};

const setPetImageAX = ({ slug }) => {
  return function (dispatch, getState, { history }) {
    console.log('testasdfsdfasdfasdf');
    const formData = new FormData();
    formData.append('slug', slug);
    api
      .get(`analysis/result/${slug}`)
      .then((res) => {
        console.log('res.data redux', res.data);

        // const pet_image_list = [];
        res.data.forEach(() => {
          const pet_image_list = {
            dog_emotion: res.data.dog_emotion,
            dog_emotion_percentage: res.data.dog_emotion_percentage,
            human_emotion: res.data.human_emotion,
            human_emotion_percentage: res.data.human_emotion_percentage,
            chemistry_percentage: res.data.chemistry_percentage,
            // image: `${api.baseURL}/${res.data.slug}`,
          };
          // pet_image_list.push(petimage);
          dispatch(setPetImage(pet_image_list));
          console.log('petimage redux', pet_image_list);
          console.log('res.data redux', res.data);
        });
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

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
    [SET_PET_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.pet_image_list);
      }),
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
  setPetImage,
  setPetImageAX,
  initializeImage,
};

export { actionCreators };
