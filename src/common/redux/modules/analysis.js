// import { createAction, handleActions } from 'redux-actions';
// import { produce } from 'immer';
// import api from '../../utils/API';

// // Action
// const ADD_PET_IMAGE = 'ADD_PET_IMAGE';

// // Action Creator
// const addPetImage = createAction(ADD_PET_IMAGE, (pet_image) => ({ pet_image }));

// // InitialState
// const initialState = {
//   list: [],
// };

// // middleware
// const addPetImageAX = ({ name, age, image }) => {
//   return function (dispatch, getState, { history }) {
//     const formData = new FormData();
//     formData.append('dog_name', name);
//     formData.append('dog_age', age);
//     formData.append('image', image);
//     api
//       .post(`/analysis/pet`, formData, {
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

// // Reducer
// export default handleActions(
//   {
//     [ADD_PET_IMAGE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.comment.push(action.payload.petimage);
//       }),
//   },
//   initialState,
// );

// const actionCreators = {
//   addPetImage,
//   addPetImageAX,
// };

// export { actionCreators };
