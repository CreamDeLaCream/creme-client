import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import api from '../../utils/API';

// Action
const SET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';

// Action Creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (test) => ({ test }));

// InitialState
const initialState = {
  list: [],
};

// middleware
const addPostAX = ({ name, age, image }) => {
  return function (dispatch, getState, { history }) {
    let formData = new FormData();
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
        dispatch(addPost(response.data.posts));
        // window.location.reload();
      })
      .catch((error) => {
        console.log('이미지 전송 실패', error);
      });
  };
};

const setPostAX = () => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/api/analysis/pet`)
      .then((res) => {
        let post_list = [];
        res.data.forEach((_post) => {
          let post = {
            post_id: _post.id,
            name: _post.name,
            profile_image: _post.profile_image,
            content: _post.content,
          };
          post_list.push(post);
        });
        dispatch(setPost(post_list));
      })
      .catch((e) => {
        console.log('불러오기 에러', e);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.postlist);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.comment.push(action.payload.post);
      }),
  },
  initialState,
);

const actionCreators = {
  setPost,
  addPost,
  addPostAX,
  setPostAX,
};

export { actionCreators };
