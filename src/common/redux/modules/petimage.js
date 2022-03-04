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
      .then((response) => {
        // dispatch(writeTextPage(response.data.comments));
        dispatch(addPetImage(response.data.images));
        // window.location.reload();
      })
      .catch((error) => {
        console.log('이미지 전송 실패', error);
      });
  };
};

const setPetImageAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/api/analysis/pet`)
      .then((res) => {
        const pet_image_list = [];
        res.data.forEach((_post) => {
          const post = {
            post_id: _post.id,
            name: _post.name,
            profile_image: _post.profile_image,
            content: _post.content,
          };
          pet_image_list.push(post);
        });
        dispatch(setPetImage(pet_image_list));
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
        draft.comment.push(action.payload.petimage);
      }),
    [SET_PET_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.petimagelist);
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
