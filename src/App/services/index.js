import { URL } from '../utils';
import { mapPosts } from './mappers';
import { removePost, setPosts } from '../store/postsSlice';

export const getPosts = async dispatch => {
  try {
    const response = await fetch(`${URL}post?limit=9`, {
      headers: {
        'app-id': process.env.REACT_APP_API_ID,
      },
    });
    const result = await response.json();
    dispatch(setPosts(mapPosts(result.data)));
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id, dispatch) => {
  try {
    const response = await fetch(`${URL}post/${id}`, {
      method: 'DELETE',
      headers: {
        'app-id': `${process.env.REACT_APP_API_ID}`,
      },
    });
    const result = await response.json();
    dispatch(removePost(result.id));
  } catch (error) {
    console.error(error);
  }
};
