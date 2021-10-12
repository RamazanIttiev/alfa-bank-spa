import { URL } from '../utils';

export const getUsers = () =>
  fetch(`${URL}post?limit=9`, {
    headers: {
      'app-id': process.env.REACT_APP_API_ID,
    },
  })
    .then(response => response.json())
    .then(resData => resData.data);

export const deletePost = id =>
  fetch(`${URL}post/${id}`, {
    method: 'DELETE',
    headers: {
      'app-id': `${process.env.REACT_APP_API_ID}`,
    },
  }).then(data => data.json());
