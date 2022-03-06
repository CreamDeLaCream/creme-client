import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const ADD_PET_IMAGE = 'ADD_PET_IMAGE';
const SET_PET_IMAGE = 'SET_PET_IMAGE';

// Action Creator
const addPetImage = createAction(ADD_PET_IMAGE, (pet_image) => ({ pet_image }));
const setPetImage = createAction(SET_PET_IMAGE, (pet_image_list) => ({
  pet_image_list,
}));

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
          dog: res.data.dog_emotion,
          dog_name: res.data.dog_name,
          dog_age: res.data.dog_age,
          image: res.data.image,
          // url: `/${res.data.slug}`,
          // image: `${api.baseURL}/${_post.slug}`,
        };
        dispatch(addPetImage(petimage));
        // pet_image_list.push(petimage);
        console.log('petimage redux', petimage);
        // console.log('pet_image_list', pet_image_list);
      })
      .catch((error) => {
        console.log('이미지 전송 실패', error);
      });
  };
};

const setPetImageAX = ({ slug }) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`analysis/result/${slug}`)
      .then((res) => {
        console.log('res.data redux', res.data);

        // const pet_image_list = [];
        res.data.forEach((_post) => {
          const petimage = {
            slug: _post.slug,
            dog: _post.dog_emotion,
            dog_name: _post.dog_name,
            dog_age: _post.dog_age,
            image: _post.image,
            // image: `${api.baseURL}/${_post.slug}`,
          };
          console.log('rea', petimage);
          // pet_image_list.push(petimage);
          dispatch(setPetImage(petimage));
        });
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

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
  },
  initialState,
);

const actionCreators = {
  addPetImage,
  addPetImageAX,
  setPetImage,
  setPetImageAX,
};

export { actionCreators };
