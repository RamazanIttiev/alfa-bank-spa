import { URL } from '../utils';

export const getUsers = () =>
  fetch(`${URL}post?limit=9`, {
    headers: {
      'app-id': '616301612d5c2975ba6340aa',
    },
  })
    .then(response => response.json())
    .then(resData => resData.data);

export const deletePost = id =>
  fetch(`${URL}post/${id}`, {
    method: 'DELETE',
    headers: {
      'app-id': '616301612d5c2975ba6340aa',
    },
  }).then(data => data.json());
